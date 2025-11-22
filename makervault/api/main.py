from fastapi import BackgroundTasks, Depends, FastAPI, UploadFile, File, Form, HTTPException, Query
from fastapi.responses import FileResponse
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from starlette.middleware.cors import CORSMiddleware
from sqlmodel import SQLModel, Session, create_engine, select, Field
from pydantic import BaseModel
from typing import List, Optional
from pathlib import Path
from PIL import Image
from zipfile import ZipFile, ZIP_DEFLATED
import tempfile
import os, uuid, json, time

import jwt
from jwt import PyJWTError


DB_URL = os.getenv("DB_URL", "sqlite:///./app.db")
STORAGE = Path(os.getenv("FILE_STORAGE", "./storage"))
STORAGE.mkdir(parents=True, exist_ok=True)
THUMBS = STORAGE / "thumbs"
THUMBS.mkdir(parents=True, exist_ok=True)


engine = create_engine(DB_URL, connect_args={"check_same_thread": False})

AUTH_USERNAME = os.getenv("AUTH_USERNAME", "admin")
AUTH_PASSWORD = os.getenv("AUTH_PASSWORD", "super-secret")
AUTH_SECRET = os.getenv("AUTH_SECRET", "changeme-secret")
AUTH_TOKEN_TTL = int(os.getenv("AUTH_TOKEN_TTL", "43200"))
AUTH_ALGO = "HS256"
AUTH_ENABLED = bool(AUTH_USERNAME and AUTH_PASSWORD)
auth_scheme = HTTPBearer(auto_error=False)


class Folder(SQLModel, table=True):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), primary_key=True)
    name: str
    tags_json: str = Field(default="[]")


class Asset(SQLModel, table=True):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), primary_key=True)
    filename: str
    mime: str
    size: int
    tags_json: str = Field(default="[]")
    title: Optional[str] = None
    notes: Optional[str] = None
    folder_id: Optional[str] = None


class AssetCreate(BaseModel):
    title: Optional[str] = None
    notes: Optional[str] = None
    tags: List[str] = []


class AssetOut(BaseModel):
    id: str
    filename: str
    mime: str
    size: int
    title: Optional[str]
    notes: Optional[str]
    tags: List[str]
    url: str
    thumb_url: Optional[str]
    folder_id: Optional[str]


class FolderIn(BaseModel):
    name: str
    tags: List[str] = []


class FolderOut(BaseModel):
    id: str
    name: str
    tags: List[str]


class LoginRequest(BaseModel):
    username: str
    password: str


class LoginResponse(BaseModel):
    token: str
    expires_in: int


class DownloadRequest(BaseModel):
    asset_ids: Optional[List[str]] = None
    tag: Optional[str] = None
    folder_id: Optional[str] = None
    filename: Optional[str] = None


app = FastAPI(title="MakerVault API")


origins_env = os.getenv("CORS_ORIGINS", "http://localhost:5173")
origins = [o.strip() for o in origins_env.split(",") if o.strip()] or ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def on_startup():
    SQLModel.metadata.create_all(engine)


# Utilities ------------------------------------------------------


def create_token(username: str) -> str:
    now = int(time.time())
    payload = {"sub": username, "iat": now, "exp": now + AUTH_TOKEN_TTL}
    return jwt.encode(payload, AUTH_SECRET, algorithm=AUTH_ALGO)


def require_auth(
    credentials: Optional[HTTPAuthorizationCredentials] = Depends(auth_scheme),
    token_param: Optional[str] = Query(default=None, alias="token"),
):
    if not AUTH_ENABLED:
        return None
    token = credentials.credentials if credentials else token_param
    if not token:
        raise HTTPException(status_code=401, detail="Unauthorized")
    try:
        jwt.decode(token, AUTH_SECRET, algorithms=[AUTH_ALGO])
    except PyJWTError:
        raise HTTPException(status_code=401, detail="Invalid or expired token")
    return token


def asset_dir(asset_id: str) -> Path:
    p = STORAGE / asset_id
    p.mkdir(parents=True, exist_ok=True)
    return p


def asset_path(asset_id: str, name: str) -> Path:
    return asset_dir(asset_id) / name


def save_thumb(asset_id: str, src: Path) -> Optional[str]:
    try:
        thumb = THUMBS / f"{asset_id}.jpg"
        with Image.open(src) as im:
            im = im.convert("RGB")
            im.thumbnail((512, 512))
            im.save(thumb, quality=88)
        return f"/thumb/{asset_id}.jpg"
    except Exception:
        return None


def to_out(a: Asset) -> AssetOut:
    tags = json.loads(a.tags_json or "[]")
    return AssetOut(
        id=a.id,
        filename=a.filename,
        mime=a.mime,
        size=a.size,
        title=a.title,
        notes=a.notes,
        tags=tags,
        url=f"/file/{a.id}/{a.filename}",
        thumb_url=f"/thumb/{a.id}.jpg" if (THUMBS / f"{a.id}.jpg").exists() else None,
        folder_id=a.folder_id,
    )


def arcname_for_asset(asset: Asset, folder_label_map: Optional[dict] = None) -> str:
    folder_part = "unassigned"
    if asset.folder_id:
        folder_part = (folder_label_map or {}).get(asset.folder_id, asset.folder_id)
    return f"{folder_part}/{asset.filename}"


def zip_assets_response(assets: List[Asset], download_name: str, background: BackgroundTasks, folder_label_map: Optional[dict] = None):
    files: List[tuple[str, Path]] = []
    for a in assets:
        path = asset_path(a.id, a.filename)
        if not path.exists():
            continue
        files.append((arcname_for_asset(a, folder_label_map), path))
    if not files:
        raise HTTPException(status_code=404, detail="No files available for download")

    tmp = tempfile.NamedTemporaryFile(delete=False, suffix=".zip")
    tmp_path = Path(tmp.name)
    tmp.close()
    with ZipFile(tmp_path, "w", ZIP_DEFLATED) as zf:
        for arc, fs_path in files:
            zf.write(fs_path, arcname=arc)

    background.add_task(lambda p=tmp_path: p.unlink(missing_ok=True))
    return FileResponse(tmp_path, media_type="application/zip", filename=download_name)


# Routes ---------------------------------------------------------


@app.get("/health")
def health():
    return {"ok": True, "auth_required": AUTH_ENABLED}


@app.post("/login", response_model=LoginResponse)
def login(body: LoginRequest):
    if not AUTH_ENABLED:
        raise HTTPException(status_code=503, detail="Authentication is not configured on the server")
    if body.username != AUTH_USERNAME or body.password != AUTH_PASSWORD:
        raise HTTPException(status_code=401, detail="Invalid username or password")
    token = create_token(body.username)
    return LoginResponse(token=token, expires_in=AUTH_TOKEN_TTL)


@app.post("/refresh", response_model=LoginResponse)
def refresh_token(
    credentials: Optional[HTTPAuthorizationCredentials] = Depends(auth_scheme),
    token_param: Optional[str] = Query(default=None, alias="token"),
):
    if not AUTH_ENABLED:
        raise HTTPException(status_code=503, detail="Authentication is not configured on the server")
    token = credentials.credentials if credentials else token_param
    if not token:
        raise HTTPException(status_code=401, detail="Unauthorized")
    try:
        payload = jwt.decode(token, AUTH_SECRET, algorithms=[AUTH_ALGO])
    except PyJWTError:
        raise HTTPException(status_code=401, detail="Invalid or expired token")
    username = payload.get("sub")
    if not username:
        raise HTTPException(status_code=401, detail="Invalid token payload")
    new_token = create_token(username)
    return LoginResponse(token=new_token, expires_in=AUTH_TOKEN_TTL)


@app.post("/upload", response_model=AssetOut)
async def upload(
    file: UploadFile = File(...),
    title: Optional[str] = Form(default=None),
    notes: Optional[str] = Form(default=None),
    tags: Optional[str] = Form(default=None),  # comma-separated
    folder_id: Optional[str] = Form(default=None),
    _: Optional[str] = Depends(require_auth),
):
    asset = Asset(
        filename=file.filename,
        mime=file.content_type or "application/octet-stream",
        size=0,
        title=title,
        notes=notes,
        tags_json=json.dumps([t.strip() for t in (tags or "").split(",") if t.strip()]),
        folder_id=folder_id,
    )

    with Session(engine) as s:
        s.add(asset)
        s.commit()
        s.refresh(asset)

    # persist file
    dest = asset_path(asset.id, asset.filename)
    with open(dest, "wb") as f:
        while True:
            chunk = await file.read(1024 * 1024)
            if not chunk:
                break
            f.write(chunk)
    size = dest.stat().st_size

    # make a thumbnail for common image formats
    if (asset.mime or "").lower().startswith("image/") and dest.suffix.lower() in {".png", ".jpg", ".jpeg", ".webp", ".bmp"}:
        save_thumb(asset.id, dest)

    # update size
    with Session(engine) as s:
        db_a = s.get(Asset, asset.id)
        if db_a:
            db_a.size = size
            s.add(db_a)
            s.commit()
            s.refresh(db_a)
            asset = db_a

    return to_out(asset)


@app.get("/file/{asset_id}/{name}")
def get_file(asset_id: str, name: str, _: Optional[str] = Depends(require_auth)):
    p = asset_path(asset_id, name)
    if not p.exists():
        raise HTTPException(404)

    media_type: Optional[str] = None
    with Session(engine) as s:
        a = s.get(Asset, asset_id)
        if a:
            media_type = a.mime

    return FileResponse(
        p,
        media_type=media_type or "application/octet-stream",
        filename=name,
    )


@app.get("/thumb/{asset_id}.jpg")
def get_thumb(asset_id: str, _: Optional[str] = Depends(require_auth)):
    p = THUMBS / f"{asset_id}.jpg"
    if not p.exists():
        raise HTTPException(404)
    return FileResponse(p)


@app.get("/assets", response_model=List[AssetOut])
def list_assets(
    q: Optional[str] = None,
    tags: Optional[str] = Query(default=None, description="Comma-separated tags"),
    folder_id: Optional[str] = None,
    _: Optional[str] = Depends(require_auth),
):
    with Session(engine) as s:
        stmt = select(Asset)
        if q:
            qlike = f"%{q}%"
            stmt = stmt.where((Asset.filename.like(qlike)) | (Asset.title.like(qlike)) | (Asset.notes.like(qlike)))
        if folder_id:
            stmt = stmt.where(Asset.folder_id == folder_id)
        assets = list(s.exec(stmt))

    tag_filter = set((tags or "").split(",")) - {""}
    out: List[AssetOut] = []
    for a in assets:
        atags = set(json.loads(a.tags_json or "[]"))
        if tag_filter and not tag_filter.issubset(atags):
            continue
        out.append(to_out(a))
    return out


@app.post("/download/zip")
def download_zip(body: DownloadRequest, background: BackgroundTasks, _: Optional[str] = Depends(require_auth)):
    if not (body.asset_ids or body.tag or body.folder_id):
        raise HTTPException(status_code=400, detail="Provide asset_ids, tag, or folder_id to download.")

    with Session(engine) as s:
        stmt = select(Asset)
        if body.asset_ids:
            stmt = stmt.where(Asset.id.in_(body.asset_ids))
        if body.folder_id:
            stmt = stmt.where(Asset.folder_id == body.folder_id)
        assets = list(s.exec(stmt))
        folder_map = {}
        folder_ids = {a.folder_id for a in assets if a.folder_id}
        if folder_ids:
            for f in s.exec(select(Folder).where(Folder.id.in_(folder_ids))):
                folder_map[f.id] = f.name

    if body.tag:
        tag = body.tag.strip()
        assets = [a for a in assets if tag in json.loads(a.tags_json or "[]")]

    download_name = body.filename or "makersvault.zip"
    if body.tag:
        safe_tag = body.tag.replace(" ", "_")[:50] or "tag"
        download_name = f"{safe_tag}.zip"
    if body.folder_id and folder_map.get(body.folder_id):
        safe_name = folder_map[body.folder_id].replace(" ", "_")[:50] or "folder"
        download_name = f"{safe_name}.zip"

    return zip_assets_response(assets, download_name, background, folder_map)


class TagUpdate(BaseModel):
    tags: List[str]


class AssetMetaUpdate(BaseModel):
    title: Optional[str] = None
    notes: Optional[str] = None


class AssetRename(BaseModel):
    filename: str


class AssetFolderUpdate(BaseModel):
    folder_id: Optional[str] = None


@app.post("/asset/{asset_id}/tags", response_model=AssetOut)
def set_tags(asset_id: str, body: TagUpdate, _: Optional[str] = Depends(require_auth)):
    with Session(engine) as s:
        a = s.get(Asset, asset_id)
        if not a:
            raise HTTPException(404)
        a.tags_json = json.dumps(body.tags)
        s.add(a)
        s.commit()
        s.refresh(a)
        return to_out(a)


@app.post("/asset/{asset_id}/meta", response_model=AssetOut)
def update_asset_meta(asset_id: str, body: AssetMetaUpdate, _: Optional[str] = Depends(require_auth)):
    with Session(engine) as s:
        a = s.get(Asset, asset_id)
        if not a:
            raise HTTPException(404)
        if body.title is not None:
            a.title = body.title
        if body.notes is not None:
            a.notes = body.notes
        s.add(a)
        s.commit()
        s.refresh(a)
        return to_out(a)


@app.post("/asset/{asset_id}/rename", response_model=AssetOut)
def rename_asset(asset_id: str, body: AssetRename, _: Optional[str] = Depends(require_auth)):
    new_name = (body.filename or "").strip()
    if not new_name:
        raise HTTPException(400, "Filename cannot be empty")
    if "/" in new_name or "\\" in new_name:
        raise HTTPException(400, "Invalid filename")

    with Session(engine) as s:
        a = s.get(Asset, asset_id)
        if not a:
            raise HTTPException(404)
        old_path = asset_path(asset_id, a.filename)
        if not old_path.exists():
            raise HTTPException(404, "File not found on disk")
        root, ext = os.path.splitext(os.path.basename(a.filename))
        proposed_root, proposed_ext = os.path.splitext(os.path.basename(new_name))
        final_ext = proposed_ext or ext
        if not final_ext:
            raise HTTPException(400, "Filename must include an extension")
        new_name_only = (proposed_root or root) + final_ext
        new_path = asset_path(asset_id, new_name_only)
        if new_name_only == a.filename:
            return to_out(a)
        if new_path.exists():
            raise HTTPException(400, "A file with that name already exists")
        old_path.rename(new_path)
        a.filename = new_name_only
        s.add(a)
        s.commit()
        s.refresh(a)
        return to_out(a)


@app.delete("/asset/{asset_id}")
def delete_asset(asset_id: str, _: Optional[str] = Depends(require_auth)):
    with Session(engine) as s:
        a = s.get(Asset, asset_id)
        if not a:
            raise HTTPException(404)
        s.delete(a)
        s.commit()
    # best-effort cleanup
    try:
        ap = STORAGE / asset_id
        if ap.exists():
            for child in ap.iterdir():
                child.unlink(missing_ok=True)
            ap.rmdir()
        (THUMBS / f"{asset_id}.jpg").unlink(missing_ok=True)
    except Exception:
        pass
    return {"ok": True}


# Folder endpoints ----------------------------------------------


@app.get("/folders", response_model=List[FolderOut])
def list_folders(_: Optional[str] = Depends(require_auth)):
    with Session(engine) as s:
        rows = list(s.exec(select(Folder)))
    out: List[FolderOut] = []
    for f in rows:
        out.append(FolderOut(id=f.id, name=f.name, tags=json.loads(f.tags_json or "[]")))
    return out


@app.post("/folders", response_model=FolderOut)
def create_folder(body: FolderIn, _: Optional[str] = Depends(require_auth)):
    f = Folder(name=body.name, tags_json=json.dumps(body.tags))
    with Session(engine) as s:
        s.add(f)
        s.commit()
        s.refresh(f)
    return FolderOut(id=f.id, name=f.name, tags=body.tags)


@app.patch("/folder/{folder_id}", response_model=FolderOut)
def update_folder(folder_id: str, body: FolderIn, _: Optional[str] = Depends(require_auth)):
    with Session(engine) as s:
        f = s.get(Folder, folder_id)
        if not f:
            raise HTTPException(404)
        f.name = body.name
        f.tags_json = json.dumps(body.tags)
        s.add(f)
        s.commit()
        s.refresh(f)
        return FolderOut(id=f.id, name=f.name, tags=body.tags)


@app.delete("/folder/{folder_id}")
def delete_folder(folder_id: str, _: Optional[str] = Depends(require_auth)):
    with Session(engine) as s:
        f = s.get(Folder, folder_id)
        if not f:
            raise HTTPException(404)
        s.delete(f)
        s.commit()
    return {"ok": True}


@app.get("/folder/{folder_id}/download")
def download_folder(folder_id: str, background: BackgroundTasks, _: Optional[str] = Depends(require_auth)):
    with Session(engine) as s:
        folder = s.get(Folder, folder_id)
        if not folder:
            raise HTTPException(status_code=404, detail="Folder not found")
        assets = list(s.exec(select(Asset).where(Asset.folder_id == folder_id)))
        folder_map = {folder_id: folder.name}
    download_name = f"{(folder.name or 'folder').replace(' ', '_')[:50] or 'folder'}.zip"
    return zip_assets_response(assets, download_name, background, folder_map)

@app.post("/asset/{asset_id}/folder", response_model=AssetOut)
def update_asset_folder(asset_id: str, body: AssetFolderUpdate, _: Optional[str] = Depends(require_auth)):
    with Session(engine) as s:
        asset = s.get(Asset, asset_id)
        if not asset:
            raise HTTPException(404)
        folder_id = body.folder_id or None
        if folder_id:
            folder = s.get(Folder, folder_id)
            if not folder:
                raise HTTPException(status_code=400, detail="Folder not found")
            asset.folder_id = folder.id
        else:
            asset.folder_id = None
        s.add(asset)
        s.commit()
        s.refresh(asset)
        return to_out(asset)

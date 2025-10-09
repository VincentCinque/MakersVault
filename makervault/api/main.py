from fastapi import FastAPI, UploadFile, File, Form, HTTPException, Query
from sqlmodel import SQLModel, Session, create_engine, select
from pydantic import BaseModel
from typing import List, Optional
from pathlib import Path
from PIL import Image
import shutil, os, uuid, json


DB_URL = os.getenv("DB_URL", "sqlite:///./app.db")
STORAGE = Path(os.getenv("FILE_STORAGE", "./storage"))
STORAGE.mkdir(parents=True, exist_ok=True)
THUMBS = STORAGE / "thumbs"
THUMBS.mkdir(parents=True, exist_ok=True)


engine = create_engine(DB_URL, connect_args={"check_same_thread": False})


from sqlmodel import Field


class Asset(SQLModel, table=True):
id: str = Field(default_factory=lambda: str(uuid.uuid4()), primary_key=True)
filename: str
mime: str
size: int
tags_json: str = Field(default="[]")
title: Optional[str] = None
notes: Optional[str] = None


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


app = FastAPI(title="MakerVault API")


origins = [os.getenv("CORS_ORIGINS", "http://localhost:5173")]
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


def asset_path(asset_id: str, name: str) -> Path:
return STORAGE / asset_id / name


def save_thumb(asset_id: str, src: Path) -> Optional[str]:
try:
dest_dir = STORAGE / asset_id
dest_dir.mkdir(parents=True, exist_ok=True)
thumb = THUMBS / f"{asset_id}.jpg"
with Image.open(src) as im:
im = im.convert("RGB")
im.thumbnail((512, 512))
im.save(thumb, quality=88)
return f"/thumb/{asset_id}.jpg"
except Exception:
return None
# Routes ---------------------------------------------------------
raise HTTPException(404)
return FileResponse(p)


@app.get("/assets", response_model=List[AssetOut])
def list_assets(q: Optional[str] = None, tags: Optional[str] = Query(default=None, description="Comma‑separated tags")):
with Session(engine) as s:
stmt = select(Asset)
if q:
qlike = f"%{q}%"
stmt = stmt.where((Asset.filename.like(qlike)) | (Asset.title.like(qlike)) | (Asset.notes.like(qlike)))
assets = list(s.exec(stmt))
tag_filter = set((tags or "").split(",")) - {""}
out = []
for a in assets:
atags = set(json.loads(a.tags_json or "[]"))
if tag_filter and not tag_filter.issubset(atags):
continue
out.append(AssetOut(
id=a.id,
filename=a.filename,
mime=a.mime,
size=a.size,
title=a.title,
notes=a.notes,
tags=list(atags),
url=f"/file/{a.id}/{a.filename}",
thumb_url=f"/thumb/{a.id}.jpg" if (THUMBS / f"{a.id}.jpg").exists() else None
))
return out


class TagUpdate(BaseModel):
tags: List[str]


@app.post("/asset/{asset_id}/tags", response_model=AssetOut)
def set_tags(asset_id: str, body: TagUpdate):
with Session(engine) as s:
a = s.get(Asset, asset_id)
if not a:
raise HTTPException(404)
a.tags_json = json.dumps(body.tags)
s.add(a)
s.commit()
return AssetOut(
id=a.id,
filename=a.filename,
mime=a.mime,
size=a.size,
title=a.title,
notes=a.notes,
tags=body.tags,
url=f"/file/{a.id}/{a.filename}",
thumb_url=f"/thumb/{a.id}.jpg" if (THUMBS / f"{a.id}.jpg").exists() else None
)
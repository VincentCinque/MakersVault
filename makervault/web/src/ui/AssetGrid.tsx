import React, { useEffect, useMemo, useState } from "react";
import {
  Asset,
  Folder,
  deleteAsset,
  fileUrl,
  listAssets,
  listFolders,
  renameAsset,
  setTags,
  updateAssetFolder,
  updateAssetMeta,
} from "../lib/api";
import ModelViewer, { ModelSnapshot } from "./ModelViewer";
import TagBadge from "./TagBadge";
import TagInput from "./TagInput";
import { colorForTag } from "./tagColors";

function extOf(name: string) {
  const m = /\.([^.]+)$/.exec(name);
  return (m?.[1] || "").toLowerCase();
}

type Props = { folderId?: string | null };

type RefreshOpts = { tags?: string[]; search?: string };
type GroupBucket = { id: string; title: string; items: Asset[] };

export default function AssetGrid({ folderId }: Props) {
  const [items, setItems] = useState<Asset[]>([]);
  const [folders, setFolders] = useState<Folder[]>([]);
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(new Set());
  const [q, setQ] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [previewItem, setPreviewItem] = useState<Asset | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [movingId, setMovingId] = useState<string | null>(null);
  const [sortKey, setSortKey] = useState<"name" | "size" | "type" | "folder">("name");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const refresh = async (opts: RefreshOpts = {}) => {
    setLoading(true);
    try {
      const data = await listAssets({
        q: opts.search ?? q,
        tags: opts.tags ?? activeTags,
        folder_id: folderId || undefined,
      });
      setItems(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { refresh(); }, [folderId]);
  useEffect(() => {
    (async () => {
      try {
        setFolders(await listFolders());
      } catch (err) {
        console.error("Failed to load folders", err);
      }
    })();
  }, []);

  const allTags = useMemo(() => {
    const t = new Set<string>();
    for (const it of items) for (const tag of it.tags) t.add(tag);
    return Array.from(t).sort((a,b)=>a.localeCompare(b));
  }, [items]);

  const folderNames = useMemo(() => {
    const m: Record<string, string> = {};
    for (const f of folders) {
      m[f.id] = f.name;
    }
    return m;
  }, [folders]);

  const folderOptions = useMemo(() => {
    return [
      { id: null as string | null, name: "Unassigned" },
      ...folders.map(f => ({ id: f.id, name: f.name || "Untitled" })),
    ];
  }, [folders]);

  const sortedItems = useMemo(() => {
    const copy = [...items];
    const dir = sortDir === "asc" ? 1 : -1;
    const nameForFolder = (a: Asset) => (a.folder_id ? folderNames[a.folder_id] || "" : "");
    copy.sort((a, b) => {
      if (sortKey === "size") {
        return (a.size - b.size) * dir;
      }
      if (sortKey === "type") {
        return extOf(a.filename).localeCompare(extOf(b.filename)) * dir;
      }
      if (sortKey === "folder") {
        return nameForFolder(a).localeCompare(nameForFolder(b)) * dir;
      }
      // default name
      return a.filename.localeCompare(b.filename) * dir;
    });
    return copy;
  }, [items, sortKey, sortDir, folderNames]);

  const folderGroups = useMemo<GroupBucket[]>(() => {
    if (sortKey !== "folder") return [];
    const grouping: Record<string, GroupBucket> = {};
    for (const item of items) {
      const key = item.folder_id || "__ungrouped";
      if (!grouping[key]) {
        grouping[key] = {
          id: `folder:${key}`,
          title: item.folder_id ? folderNames[item.folder_id] || "Untitled" : "Unassigned",
          items: [],
        };
      }
      grouping[key].items.push(item);
    }
    const dir = sortDir === "asc" ? 1 : -1;
    return Object.values(grouping)
      .sort((a, b) => a.title.localeCompare(b.title) * dir)
      .map(group => ({
        ...group,
        items: group.items.sort((a, b) => a.filename.localeCompare(b.filename)),
      }));
  }, [items, folderNames, sortKey, sortDir]);

  const typeGroups = useMemo<GroupBucket[]>(() => {
    if (sortKey !== "type") return [];
    const grouping: Record<string, GroupBucket> = {};
    for (const item of items) {
      const ext = extOf(item.filename) || "other";
      if (!grouping[ext]) {
        grouping[ext] = {
          id: `type:${ext}`,
          title: ext === "other" ? "Other" : ext.toUpperCase(),
          items: [],
        };
      }
      grouping[ext].items.push(item);
    }
    const dir = sortDir === "asc" ? 1 : -1;
    return Object.values(grouping)
      .sort((a, b) => a.title.localeCompare(b.title) * dir)
      .map(group => ({
        ...group,
        items: group.items.sort((a, b) => a.filename.localeCompare(b.filename)),
      }));
  }, [items, sortKey, sortDir]);

  const toggleGroup = (id: string) => {
    setCollapsedGroups(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleTag = (t: string) => {
    setActiveTags(prev => {
      const next = prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t];
      refresh({ tags: next });
      return next;
    });
  };

  const onSaveTags = async (id: string, tags: string[]) => {
    await setTags(id, tags);
    await refresh();
  };

  const onSaveNotes = async (id: string, notes: string) => {
    await updateAssetMeta(id, { notes });
    await refresh();
  };

  const onRename = async (id: string, filename: string) => {
    await renameAsset(id, filename);
    await refresh();
  };

  const onMoveFolder = async (id: string, folder_id: string | null) => {
    try {
      setMovingId(id);
      await updateAssetFolder(id, folder_id);
      await refresh();
    } catch (err) {
      console.error(err);
      alert("Folder update failed. Please try again.");
    } finally {
      setMovingId(null);
    }
  };

  const downloadAsset = async (asset: Asset) => {
    try {
      setDownloadingId(asset.id);
      const res = await fetch(fileUrl(asset.url));
      if (!res.ok) throw new Error("Download failed");
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = asset.filename || "download";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error(err);
      alert("Download failed. Please try again.");
    } finally {
      setDownloadingId(null);
    }
  };

  const removeAsset = async (asset: Asset) => {
    if (!confirm(`Delete "${asset.title || asset.filename}"? This cannot be undone.`)) {
      return;
    }
    try {
      setDeletingId(asset.id);
      await deleteAsset(asset.id);
      await refresh();
    } catch (err) {
      console.error(err);
      alert("Delete failed. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3 flex-wrap">
        <input
          value={q}
          onChange={e=>setQ(e.target.value)}
          onKeyDown={e => {
            if (e.key === "Enter") {
              const val = (e.currentTarget as HTMLInputElement).value;
              refresh({ search: val });
            }
          }}
          placeholder="Search title, filename, notes…"
          className="px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/70 w-80"
        />
        <button
          className="px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 disabled:opacity-60"
          onClick={() => refresh({ search: q })}
          disabled={loading}
        >
          Search
        </button>
        {loading && <span className="text-sm opacity-70">Loading…</span>}
        <div className="flex items-center gap-2 text-sm">
          <span className="opacity-70">Sort</span>
          <select
            className="px-2 py-1 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/70"
            value={sortKey}
            onChange={e => setSortKey(e.target.value as typeof sortKey)}
          >
            <option value="name">Name</option>
            <option value="size">Size</option>
            <option value="type">File type</option>
            <option value="folder">Folder</option>
          </select>
          <button
            type="button"
            onClick={() => setSortDir(prev => (prev === "asc" ? "desc" : "asc"))}
            className="px-2 py-1 rounded-md border border-neutral-300 dark:border-neutral-700"
          >
            {sortDir === "asc" ? "Asc" : "Desc"}
          </button>
        </div>
      </div>

      {!!allTags.length && (
        <div className="flex flex-wrap gap-2">
          {allTags.map(t => {
            const colors = colorForTag(t);
            const active = activeTags.includes(t);
            return (
              <button
                key={t}
                className={`px-2 py-1 rounded-full text-sm border transition-colors ${
                  active ? "ring-2 ring-offset-1 ring-emerald-500 dark:ring-offset-neutral-900" : ""
                }`}
                style={{
                  backgroundColor: active ? colors.bg : "transparent",
                  color: colors.text,
                  borderColor: colors.border,
                }}
                onClick={()=>toggleTag(t)}
              >
                {t}
              </button>
            );
          })}
          {activeTags.length>0 && (
            <button
              className="px-2 py-1 rounded-full text-sm border border-neutral-300 dark:border-neutral-700"
              onClick={() => { setActiveTags([]); refresh({ tags: [] }); }}
            >
              Reset
            </button>
          )}
        </div>
      )}

      {["folder", "type"].includes(sortKey) ? (
        <div className="space-y-4">
          {(sortKey === "folder" ? folderGroups : typeGroups).map(group => {
            const collapsed = collapsedGroups.has(group.id);
            return (
              <div
                key={group.id}
                className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70"
              >
                <button
                  className="w-full flex items-center justify-between px-4 py-3 text-left"
                  onClick={() => toggleGroup(group.id)}
                >
                  <div>
                    <div className="font-medium">{group.title}</div>
                    <div className="text-xs opacity-70">{group.items.length} item{group.items.length === 1 ? "" : "s"}</div>
                  </div>
                  <span className="text-sm opacity-70">{collapsed ? "Show" : "Hide"}</span>
                </button>
                {!collapsed && (
                  <div className="px-4 pb-4 overflow-x-auto">
                    <div className="flex gap-4 min-h-[280px]">
                      {group.items.map(it => (
                        <div key={it.id} className="min-w-[260px] max-w-[320px]">
                          <AssetCard
                            item={it}
                            onSaveTags={onSaveTags}
                            onSaveNotes={onSaveNotes}
                            onRename={onRename}
                            onPreview={setPreviewItem}
                            onDownload={downloadAsset}
                            downloading={downloadingId === it.id}
                            onDelete={removeAsset}
                            deleting={deletingId === it.id}
                            onMoveFolder={onMoveFolder}
                            folderOptions={folderOptions}
                            moving={movingId === it.id}
                          />
                        </div>
                      ))}
                      {!group.items.length && (
                        <div className="px-2 py-4 text-sm opacity-60">No assets in this folder</div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
          {sortedItems.map(it => (
            <AssetCard
              key={it.id}
              item={it}
              onSaveTags={onSaveTags}
              onSaveNotes={onSaveNotes}
              onRename={onRename}
              onPreview={setPreviewItem}
              onDownload={downloadAsset}
              downloading={downloadingId === it.id}
              onDelete={removeAsset}
              deleting={deletingId === it.id}
              onMoveFolder={onMoveFolder}
              folderOptions={folderOptions}
              moving={movingId === it.id}
            />
          ))}
        </div>
      )}

      {previewItem && (
        <AssetPreviewModal asset={previewItem} onClose={() => setPreviewItem(null)} />
      )}
    </div>
  );
}

function AssetCard({
  item,
  onSaveTags,
  onSaveNotes,
  onRename,
  onPreview,
  onDownload,
  downloading,
  onDelete,
  deleting,
  onMoveFolder,
  folderOptions,
  moving,
}: {
  item: Asset;
  onSaveTags: (id: string, tags: string[]) => void;
  onSaveNotes: (id: string, notes: string) => void;
  onRename: (id: string, filename: string) => void;
  onPreview: (asset: Asset | null) => void;
  onDownload: (asset: Asset) => void;
  downloading: boolean;
  onDelete: (asset: Asset) => void;
  deleting: boolean;
  onMoveFolder: (id: string, folder_id: string | null) => void;
  folderOptions: { id: string | null; name: string }[];
  moving: boolean;
}) {
  const [editingTags, setEditingTags] = useState(false);
  const [tagList, setTagList] = useState<string[]>(item.tags);
  const [editingNotes, setEditingNotes] = useState(false);
  const [notesValue, setNotesValue] = useState(item.notes || "");
  const [notesCollapsed, setNotesCollapsed] = useState(true);
  const [renaming, setRenaming] = useState(false);
  const [nameValue, setNameValue] = useState(item.filename);
  const nameInputRef = React.useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!editingTags) {
      setTagList(item.tags);
    }
  }, [item.tags, editingTags]);

  useEffect(() => {
    if (!editingNotes) {
      setNotesValue(item.notes || "");
    }
  }, [item.notes, editingNotes]);

  useEffect(() => {
    if (!renaming) {
      setNameValue(item.filename);
    } else {
      setTimeout(() => nameInputRef.current?.select(), 0);
    }
  }, [item.filename, renaming]);

  const startEditing = () => {
    setTagList(item.tags);
    setEditingTags(true);
  };

  const cancelEditing = () => {
    setEditingTags(false);
    setTagList(item.tags);
  };

  const save = async () => {
    await onSaveTags(item.id, tagList);
    setEditingTags(false);
  };

  const saveNotes = async () => {
    await onSaveNotes(item.id, notesValue);
    setEditingNotes(false);
  };

  const cancelNotes = () => {
    setEditingNotes(false);
    setNotesValue(item.notes || "");
  };

  const noteText = (item.notes || "").trim();

  const commitRename = async () => {
    const next = nameValue.trim();
    if (!next) {
      setNameValue(item.filename);
      setRenaming(false);
      return;
    }
    if (next === item.filename) {
      setRenaming(false);
      return;
    }
    try {
      await onRename(item.id, next);
    } catch (err) {
      console.error(err);
      alert("Rename failed");
      setNameValue(item.filename);
    } finally {
      setRenaming(false);
    }
  };

  const cancelRename = () => {
    setNameValue(item.filename);
    setRenaming(false);
  };

  const handleRenameKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      commitRename();
    } else if (e.key === "Escape") {
      e.preventDefault();
      cancelRename();
    }
  };

  const handleFolderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const next = e.target.value || null;
    const current = item.folder_id || null;
    if (next === current) return;
    onMoveFolder(item.id, next);
  };

  return (
    <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white/60 dark:bg-neutral-900/60">
      <div
        className="h-40 relative cursor-pointer"
        onDoubleClick={() => onPreview(item)}
        title="Double-click to open large preview"
        onClick={e => e.stopPropagation()}
      >
        {renderPreviewContent(item, "card")}
      </div>
      <div className="p-3 flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold uppercase text-neutral-500 dark:text-neutral-400">
            {moving ? "Updating…" : "Folder"}
          </label>
          <select
            value={item.folder_id || ""}
            onChange={handleFolderChange}
            disabled={moving}
            className="px-2 py-1 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm"
          >
            {folderOptions.map(opt => (
              <option key={opt.id || "none"} value={opt.id || ""}>
                {opt.name}
              </option>
            ))}
          </select>
        </div>
        <div
          className="text-sm font-medium truncate cursor-text"
          title={item.filename}
          onDoubleClick={e => { e.stopPropagation(); setRenaming(true); }}
          onClick={e => renaming && e.stopPropagation()}
        >
          {renaming ? (
            <input
              ref={nameInputRef}
              value={nameValue}
              onChange={e => setNameValue(e.target.value)}
              onBlur={commitRename}
              onKeyDown={handleRenameKey}
              onClick={e => e.stopPropagation()}
              className="px-2 py-1 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 text-sm"
              autoFocus
            />
          ) : (
            item.title || item.filename
          )}
        </div>
        <div className="flex flex-wrap gap-1">
          {item.tags.length ? (
            item.tags.map(t => <TagBadge key={t} tag={t} />)
          ) : (
            <span className="text-xs opacity-60">No tags</span>
          )}
        </div>
        <div className="border border-dashed border-neutral-300 dark:border-neutral-700 rounded-md p-2 text-sm flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs uppercase tracking-wide text-neutral-500">
            <span>Notes</span>
            <button
              className="text-[11px] px-2 py-0.5 rounded-md border border-neutral-300 dark:border-neutral-700"
              onClick={() => setNotesCollapsed(v => !v)}
            >
              {notesCollapsed ? "Expand" : "Collapse"}
            </button>
          </div>
          {!notesCollapsed && (
            <>
              {editingNotes ? (
                <>
                  <textarea
                    value={notesValue}
                    onChange={e => setNotesValue(e.target.value)}
                    className="w-full min-h-[80px] rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/70 p-2"
                    placeholder="Add some details about this asset"
                  />
                  <div className="flex flex-wrap gap-2">
                    <button className="text-sm px-3 py-1 rounded-md bg-emerald-600 text-white" onClick={saveNotes}>Save</button>
                    <button className="text-sm px-3 py-1 rounded-md border" onClick={cancelNotes}>Cancel</button>
                  </div>
                </>
              ) : (
                <>
                  <div className={`text-sm whitespace-pre-wrap ${noteText ? "text-neutral-800 dark:text-neutral-100" : "opacity-60"}`}>
                    {noteText || "Add notes"}
                  </div>
                  <button
                    className="self-start text-xs px-2 py-1 rounded-md border border-neutral-300 dark:border-neutral-700"
                    onClick={() => setEditingNotes(true)}
                  >
                    {noteText ? "Edit notes" : "Add notes"}
                  </button>
                </>
              )}
            </>
          )}
          {notesCollapsed && (
            <div className={`text-sm ${noteText ? "text-neutral-700 dark:text-neutral-200" : "opacity-60"}`}>
              {noteText ? `${noteText.slice(0, 60)}${noteText.length > 60 ? "…" : ""}` : "No notes"}
            </div>
          )}
        </div>

        {editingTags ? (
          <div className="flex flex-col gap-2">
            <TagInput
              value={tagList}
              onChange={setTagList}
              placeholder="Type and press comma/Enter"
            />
            <div className="flex flex-wrap gap-2">
              <button className="text-sm px-3 py-1 rounded-md bg-emerald-600 text-white" onClick={save}>Save</button>
              <button className="text-sm px-3 py-1 rounded-md border" onClick={cancelEditing}>Cancel</button>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 flex-wrap">
            <button className="text-sm px-2 py-1 rounded-md border border-neutral-300 dark:border-neutral-700" onClick={startEditing}>Edit tags</button>
            <button
              className="text-sm px-2 py-1 rounded-md border border-neutral-300 dark:border-neutral-700 disabled:opacity-60"
              onClick={() => onDownload(item)}
              disabled={downloading}
            >
              {downloading ? "Downloading…" : "Download"}
            </button>
            <button
              className="text-sm px-2 py-1 rounded-md border border-red-300 text-red-700 dark:text-red-300 disabled:opacity-60"
              onClick={() => onDelete(item)}
              disabled={deleting}
            >
              {deleting ? "Deleting…" : "Delete"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

type PreviewVariant = "card" | "modal";

function renderPreviewContent(asset: Asset, variant: PreviewVariant) {
  const ext = extOf(asset.filename);
  const assetUrl = fileUrl(asset.url);
  const thumbUrl = asset.thumb_url ? fileUrl(asset.thumb_url) : null;
  const imgClass =
    variant === "card"
      ? "w-full h-full object-cover"
      : "w-full h-full object-contain bg-white";
  const is3d = ["stl", "3mf", "step", "stp", "obj"].includes(ext);

  if (variant === "card") {
    if (thumbUrl) {
      return <img src={thumbUrl} alt={asset.filename} className={imgClass} />;
    }
    if (ext === "svg") {
      return <img src={assetUrl} alt={asset.filename} className={imgClass} />;
    }
    if (is3d) {
      return <ModelSnapshot url={assetUrl} ext={ext} assetId={asset.id} />;
    }
    return (
      <div className="flex items-center justify-center w-full h-full text-sm opacity-60">
        No preview
      </div>
    );
  }

  if (is3d) {
    return <ModelViewer key={`${variant}-${asset.id}`} url={assetUrl} ext={ext} assetId={asset.id} />;
  }
  if (thumbUrl || ext === "svg") {
    const src = thumbUrl || assetUrl;
    return <img src={src} alt={asset.filename} className={imgClass} />;
  }
  return (
    <div className="flex items-center justify-center w-full h-full text-sm opacity-60">
      Preview unavailable
    </div>
  );
}

function AssetPreviewModal({ asset, onClose }: { asset: Asset; onClose: () => void }) {
  const stop = (e: React.MouseEvent) => e.stopPropagation();
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-neutral-900 rounded-lg shadow-2xl max-w-5xl w-full max-h-full overflow-hidden flex flex-col"
        onClick={stop}
      >
        <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 px-4 py-3">
          <div>
            <h2 className="text-lg font-semibold">{asset.title || asset.filename}</h2>
            <p className="text-sm opacity-70">
              {asset.filename} · {formatFileSize(asset.size)}
            </p>
          </div>
          <button
            className="px-3 py-1 rounded-md border border-neutral-300 dark:border-neutral-700 text-sm"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <div className="p-4 space-y-4 overflow-auto">
          <div className="w-full h-[70vh] min-h-[400px]">
            <div className="w-full h-full rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center overflow-hidden">
              {renderPreviewContent(asset, "modal")}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {asset.tags.length ? (
              asset.tags.map(tag => <TagBadge key={tag} tag={tag} />)
            ) : (
              <span className="text-xs opacity-60">No tags</span>
            )}
          </div>
          {asset.notes && (
            <div className="text-sm border border-dashed border-neutral-300 dark:border-neutral-700 rounded-md p-3 whitespace-pre-wrap">
              {asset.notes}
            </div>
          )}
          <div className="flex gap-3">
            <a
              className="px-3 py-2 rounded-md bg-emerald-600 text-white text-sm"
              href={fileUrl(asset.url)}
              download={asset.filename}
            >
              Download
            </a>
            <button
              className="px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function formatFileSize(bytes: number) {
  if (!bytes && bytes !== 0) return "";
  const units = ["B", "KB", "MB", "GB"];
  let size = bytes;
  let idx = 0;
  while (size >= 1024 && idx < units.length - 1) {
    size /= 1024;
    idx++;
  }
  return `${size.toFixed(idx === 0 ? 0 : 1)} ${units[idx]}`;
}

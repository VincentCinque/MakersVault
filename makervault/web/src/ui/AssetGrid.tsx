import React, { useEffect, useMemo, useState } from "react";
import { Asset, fileUrl, listAssets, setTags } from "../lib/api";
import ModelViewer from "./ModelViewer";

function extOf(name: string) {
  const m = /\.([^.]+)$/.exec(name);
  return (m?.[1] || "").toLowerCase();
}

type Props = { folderId?: string | null };

export default function AssetGrid({ folderId }: Props) {
  const [items, setItems] = useState<Asset[]>([]);
  const [q, setQ] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const refresh = async () => {
    setLoading(true);
    try {
      const data = await listAssets({ q, tags: activeTags, folder_id: folderId || undefined });
      setItems(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { refresh(); }, [folderId]);

  const allTags = useMemo(() => {
    const t = new Set<string>();
    for (const it of items) for (const tag of it.tags) t.add(tag);
    return Array.from(t).sort((a,b)=>a.localeCompare(b));
  }, [items]);

  const toggleTag = (t: string) => {
    setActiveTags(prev => prev.includes(t) ? prev.filter(x=>x!==t) : [...prev, t]);
  };

  const onSaveTags = async (id: string, tags: string[]) => {
    await setTags(id, tags);
    await refresh();
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <input
          value={q}
          onChange={e=>setQ(e.target.value)}
          placeholder="Search title, filename, notes…"
          className="px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/70 w-80"
        />
        <button className="px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700" onClick={refresh}>Search</button>
        {loading && <span className="text-sm opacity-70">Loading…</span>}
      </div>

      {!!allTags.length && (
        <div className="flex flex-wrap gap-2">
          {allTags.map(t => (
            <button
              key={t}
              className={`px-2 py-1 rounded-full text-sm border ${activeTags.includes(t) ? "bg-emerald-600 text-white border-emerald-600" : "border-neutral-300 dark:border-neutral-700"}`}
              onClick={()=>toggleTag(t)}
            >
              {t}
            </button>
          ))}
          {activeTags.length>0 && (
            <button className="px-2 py-1 rounded-full text-sm border border-neutral-300 dark:border-neutral-700" onClick={()=>setActiveTags([])}>Reset</button>
          )}
        </div>
      )}

      <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
        {items.map(it => (
          <AssetCard key={it.id} item={it} onSaveTags={onSaveTags} />
        ))}
      </div>
    </div>
  );
}

function AssetCard({ item, onSaveTags }: { item: Asset; onSaveTags: (id: string, tags: string[])=>void }) {
  const [editingTags, setEditingTags] = useState(false);
  const [tags, setTagsLocal] = useState(item.tags.join(", "));
  const ext = extOf(item.filename);

  const save = async () => {
    const t = tags.split(",").map(s=>s.trim()).filter(Boolean);
    await onSaveTags(item.id, t);
    setEditingTags(false);
  };

  const api = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");
  const preview = item.thumb_url ? (
    <img src={fileUrl(item.thumb_url)} alt="thumb" className="w-full h-full object-cover" />
  ) : ext === "svg" ? (
    <img src={`${api}${item.url}`} alt={item.filename} className="w-full h-full object-contain bg-white" />
  ) : ["stl","3mf","step","stp"].includes(ext) ? (
    <ModelViewer url={`${api}${item.url}`} ext={ext} />
  ) : (
    <div className="flex items-center justify-center w-full h-full text-sm opacity-60">No preview</div>
  );

  return (
    <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white/60 dark:bg-neutral-900/60">
      <div className="h-40 relative">{preview}</div>
      <div className="p-3 flex flex-col gap-2">
        <div className="text-sm font-medium truncate" title={item.filename}>{item.title || item.filename}</div>
        <div className="flex flex-wrap gap-1">
          {item.tags.map(t => (
            <span key={t} className="px-1.5 py-0.5 rounded-full bg-neutral-200 dark:bg-neutral-800 text-xs">{t}</span>
          ))}
          {item.tags.length === 0 && <span className="text-xs opacity-60">No tags</span>}
        </div>
        {editingTags ? (
          <div className="flex items-center gap-2">
            <input value={tags} onChange={e=>setTagsLocal(e.target.value)} className="px-2 py-1 text-sm rounded-md border border-neutral-300 dark:border-neutral-700 flex-1" />
            <button className="text-sm px-2 py-1 rounded-md bg-emerald-600 text-white" onClick={save}>Save</button>
            <button className="text-sm px-2 py-1 rounded-md border" onClick={()=>{setEditingTags(false); setTagsLocal(item.tags.join(", "));}}>Cancel</button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <button className="text-sm px-2 py-1 rounded-md border border-neutral-300 dark:border-neutral-700" onClick={()=>setEditingTags(true)}>Edit tags</button>
            <a className="text-sm px-2 py-1 rounded-md border border-neutral-300 dark:border-neutral-700" href={fileUrl(item.url)} target="_blank">Download</a>
          </div>
        )}
      </div>
    </div>
  );
}

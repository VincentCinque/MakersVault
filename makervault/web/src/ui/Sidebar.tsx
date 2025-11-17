import React, { useEffect, useState } from "react";
import { Folder, createFolder, deleteFolder, listFolders, updateFolder } from "../lib/api";
import TagInput from "./TagInput";

type Props = {
  selectedId?: string | null;
  onSelect: (id: string | null) => void;
};

export default function Sidebar({ selectedId, onSelect }: Props) {
  const [folders, setFolders] = useState<Folder[]>([]);
  const [creating, setCreating] = useState(false);
  const [newName, setNewName] = useState("");
  const [busy, setBusy] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editTags, setEditTags] = useState<string[]>([]);

  const refresh = async () => setFolders(await listFolders());
  useEffect(() => { refresh(); }, []);

  const startCreate = () => { setCreating(true); setNewName(""); };
  const create = async () => {
    if (!newName.trim()) return;
    setBusy(true);
    try {
      await createFolder(newName.trim());
      await refresh();
    } finally { setBusy(false); setCreating(false); }
  };

  const startEdit = (f: Folder) => {
    setEditing(f.id);
    setEditName(f.name);
    setEditTags(f.tags);
  };
  const saveEdit = async () => {
    if (!editing) return;
    setBusy(true);
    try {
      await updateFolder(editing, editName.trim() || "Untitled", editTags);
      await refresh();
    } finally { setBusy(false); setEditing(null); setEditTags([]); }
  };

  const remove = async (id: string) => {
    if (!confirm("Delete folder? (Assets remain but become unassigned)")) return;
    setBusy(true);
    try { await deleteFolder(id); await refresh(); if (selectedId === id) onSelect(null); }
    finally { setBusy(false); }
  };

  return (
    <aside className="w-64 border-r border-neutral-200 dark:border-neutral-800 p-3 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="text-xs text-neutral-500">Location Manager</div>
        <button className="text-sm px-2 py-1 rounded-md border" onClick={startCreate}>New</button>
      </div>

      <button
        className={`flex items-center gap-2 px-2 py-1 rounded-md ${!selectedId ? 'bg-emerald-50 dark:bg-neutral-800' : ''}`}
        onClick={() => onSelect(null)}
      >
        <span>All Items</span>
      </button>

      <div className="flex flex-col gap-1">
        {folders.map(f => (
          <div key={f.id} className={`rounded-md ${selectedId===f.id ? 'bg-emerald-50 dark:bg-neutral-800' : ''}`}>
            <div className="flex items-center gap-2 px-2 py-1">
              <button className="flex-1 text-left truncate" onClick={()=>onSelect(f.id)} title={f.name}>{f.name}</button>
              <button className="text-xs px-1.5 py-0.5 rounded border" onClick={()=>startEdit(f)}>Edit</button>
              <button className="text-xs px-1.5 py-0.5 rounded border" onClick={()=>remove(f.id)}>Del</button>
            </div>
          </div>
        ))}
        {folders.length === 0 && <div className="text-sm opacity-60 px-2">No folders yet</div>}
      </div>

      {creating && (
        <div className="mt-2 flex flex-col gap-2">
          <input
            value={newName}
            onChange={e=>setNewName(e.target.value)}
            placeholder="Folder name"
            className="px-2 py-1 text-sm rounded-md border w-full bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white"
          />
          <div className="flex gap-2">
            <button disabled={busy} className="text-sm px-3 py-1 rounded-md bg-emerald-600 text-white flex-1" onClick={create}>Create</button>
            <button className="text-sm px-3 py-1 rounded-md border flex-1" onClick={()=>setCreating(false)}>Cancel</button>
          </div>
        </div>
      )}

      {editing && (
        <div className="mt-2 flex flex-col gap-2">
          <input
            value={editName}
            onChange={e=>setEditName(e.target.value)}
            className="px-2 py-1 text-sm rounded-md border bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white"
          />
          <TagInput value={editTags} onChange={setEditTags} placeholder="Add folder tags" />
          <div className="flex items-center gap-2">
            <button disabled={busy} className="text-sm px-2 py-1 rounded-md bg-emerald-600 text-white" onClick={saveEdit}>Save</button>
            <button className="text-sm px-2 py-1 rounded-md border" onClick={()=>{ setEditing(null); setEditTags([]); }}>Cancel</button>
          </div>
        </div>
      )}
    </aside>
  );
}

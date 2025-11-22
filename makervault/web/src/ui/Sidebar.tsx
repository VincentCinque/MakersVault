import React, { useEffect, useState } from "react";
import { Folder, UnauthorizedError, createFolder, deleteFolder, downloadFolderZip, listFolders, updateFolder } from "../lib/api";
import TagInput from "./TagInput";

type Props = {
  selectedId?: string | null;
  onSelect: (id: string | null) => void;
  onFoldersChanged?: () => void;
  onUnauthorized?: () => void;
};

export default function Sidebar({ selectedId, onSelect, onFoldersChanged, onUnauthorized }: Props) {
  const [folders, setFolders] = useState<Folder[]>([]);
  const [creating, setCreating] = useState(false);
  const [newName, setNewName] = useState("");
  const [busy, setBusy] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editTags, setEditTags] = useState<string[]>([]);

  const filenameFromDisposition = (res: Response, fallback: string) => {
    const dispo = res.headers.get("content-disposition") || "";
    const match = dispo.match(/filename="?([^\";]+)"?/i);
    return (match && match[1]) || fallback;
  };

  const saveResponseToDisk = async (res: Response, fallback: string) => {
    const filename = filenameFromDisposition(res, fallback);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleError = (err: unknown, message: string) => {
    if (err instanceof UnauthorizedError) {
      onUnauthorized?.();
      return;
    }
    console.error(err);
    alert(message);
  };

  const refresh = async () => {
    try {
      setFolders(await listFolders());
    } catch (err) {
      handleError(err, "Unable to load folders.");
    }
  };
  useEffect(() => { refresh(); }, []);

  const startCreate = () => { setCreating(true); setNewName(""); };
  const create = async () => {
    if (!newName.trim()) return;
    setBusy(true);
    try {
      await createFolder(newName.trim());
      await refresh();
      onFoldersChanged?.();
    } catch (err) {
      handleError(err, "Folder creation failed. Please try again.");
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
      onFoldersChanged?.();
    } catch (err) {
      handleError(err, "Folder update failed. Please try again.");
    } finally { setBusy(false); setEditing(null); setEditTags([]); }
  };

  const remove = async (id: string) => {
    if (!confirm("Delete folder? (Assets remain but become unassigned)")) return;
    setBusy(true);
    try {
      await deleteFolder(id);
      await refresh();
      onFoldersChanged?.();
      if (selectedId === id) onSelect(null);
    }
    catch (err) {
      handleError(err, "Failed to delete folder.");
    }
    finally { setBusy(false); }
  };

  const downloadFolder = async (folder: Folder) => {
    setBusy(true);
    try {
      const res = await downloadFolderZip(folder.id);
      const safe = (folder.name || "folder").replace(/\s+/g, "_") || "folder";
      await saveResponseToDisk(res, `${safe}.zip`);
    } catch (err) {
      handleError(err, "Unable to download folder.");
    } finally {
      setBusy(false);
    }
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
              <button className="text-xs px-1.5 py-0.5 rounded border disabled:opacity-60" disabled={busy} onClick={()=>downloadFolder(f)}>Zip</button>
              <button className="text-xs px-1.5 py-0.5 rounded border disabled:opacity-60" disabled={busy} onClick={()=>startEdit(f)}>Edit</button>
              <button className="text-xs px-1.5 py-0.5 rounded border disabled:opacity-60" disabled={busy} onClick={()=>remove(f.id)}>Del</button>
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

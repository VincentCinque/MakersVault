import { appendTokenToUrl, authHeaders } from "./auth";

export type Asset = {
  id: string;
  filename: string;
  mime: string;
  size: number;
  title?: string | null;
  notes?: string | null;
  tags: string[];
  url: string; // relative to API host
  thumb_url?: string | null; // relative to API host
  folder_id?: string | null;
};

// API base URL resolution (browser-reachable)
function resolveApiBase(): string {
  const envUrl = (import.meta.env.VITE_API_URL as string | undefined) || "";
  const isAbs = /^(https?:)?\/\//i.test(envUrl);
  if (envUrl) {
    if (isAbs) return envUrl.replace(/\/$/, "");
    // If someone sets just a port like ":8000" or "8000"
    const port = envUrl.replace(/^:?/, "");
    const host = typeof window !== "undefined" ? window.location.hostname : "localhost";
    return `http://${host}:${port}`.replace(/\/$/, "");
  }
  // Default: same host, API on 8000
  const host = typeof window !== "undefined" ? window.location.hostname : "localhost";
  return `http://${host}:8000`;
}

const API = resolveApiBase();

export async function listAssets(params: { q?: string; tags?: string[]; folder_id?: string } = {}): Promise<Asset[]> {
  const qs = new URLSearchParams();
  if (params.q) qs.set("q", params.q);
  if (params.tags && params.tags.length) qs.set("tags", params.tags.join(","));
  if (params.folder_id) qs.set("folder_id", params.folder_id);
  const res = await fetch(`${API}/assets?${qs.toString()}`, {
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error("Failed to list assets");
  return res.json();
}

export async function uploadAsset(
  file: File,
  opts: { title?: string; notes?: string; tags?: string[]; folder_id?: string }
 = {}
) {
  const fd = new FormData();
  fd.set("file", file);
  if (opts.title) fd.set("title", opts.title);
  if (opts.notes) fd.set("notes", opts.notes);
  if (opts.tags && opts.tags.length) fd.set("tags", opts.tags.join(","));
  if (opts.folder_id) fd.set("folder_id", opts.folder_id);
  const res = await fetch(`${API}/upload`, {
    method: "POST",
    body: fd,
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error("Upload failed");
  return res.json();
}

export async function setTags(id: string, tags: string[]) {
  const res = await fetch(`${API}/asset/${id}/tags`, {
    method: "POST",
    headers: authHeaders({ "Content-Type": "application/json" }),
    body: JSON.stringify({ tags }),
  });
  if (!res.ok) throw new Error("Tag update failed");
  return res.json();
}

export async function updateAssetMeta(id: string, payload: { title?: string | null; notes?: string | null }) {
  const res = await fetch(`${API}/asset/${id}/meta`, {
    method: "POST",
    headers: authHeaders({ "Content-Type": "application/json" }),
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Metadata update failed");
  return res.json();
}

export async function deleteAsset(id: string) {
  const res = await fetch(`${API}/asset/${id}`, { method: "DELETE", headers: authHeaders() });
  if (!res.ok) throw new Error("Delete asset failed");
  return res.json();
}

export async function renameAsset(id: string, filename: string) {
  const res = await fetch(`${API}/asset/${id}/rename`, {
    method: "POST",
    headers: authHeaders({ "Content-Type": "application/json" }),
    body: JSON.stringify({ filename }),
  });
  if (!res.ok) throw new Error("Rename failed");
  return res.json();
}

export async function updateAssetFolder(id: string, folder_id: string | null) {
  const res = await fetch(`${API}/asset/${id}/folder`, {
    method: "POST",
    headers: authHeaders({ "Content-Type": "application/json" }),
    body: JSON.stringify({ folder_id }),
  });
  if (!res.ok) throw new Error("Folder update failed");
  return res.json();
}

export function fileUrl(rel: string) {
  // API returns relative URLs. Join with API base.
  if (!rel) return rel;
  return appendTokenToUrl(`${API}${rel}`);
}

// Folders -------------------------------------------------------

export type Folder = { id: string; name: string; tags: string[] };

export async function listFolders(): Promise<Folder[]> {
  const res = await fetch(`${API}/folders`, { headers: authHeaders() });
  if (!res.ok) throw new Error("Failed to list folders");
  return res.json();
}

export async function createFolder(name: string, tags: string[] = []) {
  const res = await fetch(`${API}/folders`, {
    method: "POST",
    headers: authHeaders({ "Content-Type": "application/json" }),
    body: JSON.stringify({ name, tags }),
  });
  if (!res.ok) throw new Error("Create folder failed");
  return res.json();
}

export async function updateFolder(id: string, name: string, tags: string[]) {
  const res = await fetch(`${API}/folder/${id}`, {
    method: "PATCH",
    headers: authHeaders({ "Content-Type": "application/json" }),
    body: JSON.stringify({ name, tags }),
  });
  if (!res.ok) throw new Error("Update folder failed");
  return res.json();
}

export async function deleteFolder(id: string) {
  const res = await fetch(`${API}/folder/${id}`, { method: "DELETE", headers: authHeaders() });
  if (!res.ok) throw new Error("Delete folder failed");
  return res.json();
}

export type HealthInfo = { ok: boolean; auth_required: boolean };

export async function apiHealth(): Promise<HealthInfo | null> {
  try {
    const res = await fetch(`${API}/health`, { cache: "no-store" });
    if (!res.ok) return null;
    const data = await res.json();
    return {
      ok: Boolean(data?.ok),
      auth_required: Boolean(data?.auth_required),
    };
  } catch {
    return null;
  }
}

export const API_BASE = API;

export async function login(username: string, password: string): Promise<{ token: string; expires_in: number }> {
  const res = await fetch(`${API}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) {
    let message = "Login failed";
    try {
      const data = await res.json();
      if (typeof data?.detail === "string") message = data.detail;
    } catch {
      // ignore
    }
    throw new Error(message);
  }
  return res.json();
}

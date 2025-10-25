import React, { useRef, useState } from "react";
import { uploadAsset } from "../lib/api";

type Props = { onUploaded: () => void; folderId?: string | null };

export default function UploadBar({ onUploaded, folderId }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [busy, setBusy] = useState(false);

  const onPick = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setBusy(true);
      await uploadAsset(file, { folder_id: folderId || undefined });
      onUploaded();
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setBusy(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  return (
    <div className="flex items-center gap-2">
      <input
        ref={inputRef}
        type="file"
        onChange={onPick}
        accept=".png,.jpg,.jpeg,.webp,.bmp,.svg,.stl,.step,.stp,.3mf"
        className="hidden"
      />
      <button
        className="px-3 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-60"
        disabled={busy}
        onClick={() => inputRef.current?.click()}
      >
        {busy ? "Uploading…" : "Upload"}
      </button>
    </div>
  );
}

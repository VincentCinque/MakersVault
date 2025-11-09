import React from "react";
import UploadBar from "./UploadBar";
import AssetGrid from "./AssetGrid";
import Sidebar from "./Sidebar";
import { API_BASE, apiHealth } from "../lib/api";

export default function App() {
  const [nonce, setNonce] = React.useState(0);
  const [folderId, setFolderId] = React.useState<string | null>(null);
  const [apiUp, setApiUp] = React.useState<boolean | null>(null);
  React.useEffect(() => { (async ()=> setApiUp(await apiHealth()))(); }, []);
  return (
    <div className="h-screen flex">
      <Sidebar selectedId={folderId} onSelect={setFolderId} />
      <main className="flex-1 p-4 overflow-auto">
        {apiUp === false && (
          <div className="mb-3 p-2 rounded-md bg-red-100 text-red-900 dark:bg-red-900/30 dark:text-red-100">
            API unreachable at {API_BASE}. Ensure the API container is running and port 8000 is accessible.
          </div>
        )}
        <header className="flex items-center justify-between mb-4">
          <img
            src="/img/whitelogo.png"
            alt="Makers Vault"
            className="h-32 w-auto max-w-[420px]"
          />
          <UploadBar folderId={folderId} onUploaded={() => setNonce(n => n + 1)} />
        </header>
        <AssetGrid key={nonce + (folderId||'')} folderId={folderId} />
      </main>
    </div>
  );
}

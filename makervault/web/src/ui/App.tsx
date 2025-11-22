import React from "react";
import UploadBar from "./UploadBar";
import AssetGrid from "./AssetGrid";
import Sidebar from "./Sidebar";
import Login from "./Login";
import ThemeToggle from "./ThemeToggle";
import { API_BASE, apiHealth, refreshToken, type HealthInfo } from "../lib/api";
import { clearToken, readToken, storeToken } from "../lib/auth";

const THEME_KEY = "makersvault_theme";
const DEFAULT_REFRESH_SECONDS = 6 * 60 * 60; // 6 hours

export default function App() {
  const [token, setToken] = React.useState<string | null>(() => readToken());
  const [nonce, setNonce] = React.useState(0);
  const [folderId, setFolderId] = React.useState<string | null>(null);
  const [folderVersion, setFolderVersion] = React.useState(0);
  const [health, setHealth] = React.useState<HealthInfo | null>(null);
  const [tokenTtl, setTokenTtl] = React.useState<number | null>(null);
  const [theme, setTheme] = React.useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    try {
      const stored = window.localStorage.getItem(THEME_KEY) as "light" | "dark" | null;
      if (stored === "light" || stored === "dark") return stored;
    } catch {
      // ignore storage errors
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  React.useEffect(() => {
    if (typeof document === "undefined") return;
    try {
      window.localStorage.setItem(THEME_KEY, theme);
    } catch {
      // ignore storage errors
    }
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  React.useEffect(() => { (async ()=> setHealth(await apiHealth()))(); }, []);
  const apiUp = health?.ok ?? null;
  const authRequired = health?.auth_required ?? true;

  const handleLogin = (tok: string, ttl: number) => {
    storeToken(tok);
    setToken(tok);
    setTokenTtl(ttl);
  };

  const handleUnauthorized = React.useCallback(() => {
    clearToken();
    setToken(null);
    setTokenTtl(null);
    alert("Your session has expired. Please sign in again.");
  }, []);

  const handleFoldersChanged = React.useCallback(() => {
    setFolderVersion(v => v + 1);
  }, []);

  const handleLogout = () => {
    clearToken();
    setToken(null);
    setTokenTtl(null);
  };

  React.useEffect(() => {
    if (!token) return;
    const ttl = tokenTtl ?? DEFAULT_REFRESH_SECONDS;
    const refreshMs = Math.max(
      5 * 60 * 1000,
      Math.min(ttl * 0.8 * 1000, ttl * 1000 - 5 * 60 * 1000)
    );
    const timer = window.setTimeout(async () => {
      try {
        const res = await refreshToken();
        storeToken(res.token);
        setToken(res.token);
        setTokenTtl(res.expires_in);
      } catch {
        handleUnauthorized();
      }
    }, refreshMs);
    return () => window.clearTimeout(timer);
  }, [token, tokenTtl, handleUnauthorized]);

  if (authRequired && !token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-200 via-neutral-100 to-white dark:from-neutral-900 dark:via-neutral-950 dark:to-black">
        <Login onSuccess={handleLogin} apiUp={apiUp} />
      </div>
    );
  }

  return (
    <div className="h-screen flex">
      <Sidebar
        selectedId={folderId}
        onSelect={setFolderId}
        onFoldersChanged={handleFoldersChanged}
        onUnauthorized={handleUnauthorized}
      />
      <main className="flex-1 p-4 overflow-auto">
        {apiUp === false && (
          <div className="mb-3 p-2 rounded-md bg-red-100 text-red-900 dark:bg-red-900/30 dark:text-red-100">
            API unreachable at {API_BASE}. Ensure the API container is running and port 8000 is accessible.
          </div>
        )}
        <header className="flex items-center justify-between mb-4 gap-4 flex-wrap">
          <img
            src="/img/whitelogo.png"
            alt="Makers Vault"
            className="h-32 w-auto max-w-[420px]"
          />
          <div className="flex flex-wrap items-center gap-3">
            <UploadBar
              folderId={folderId}
              onUploaded={() => setNonce(n => n + 1)}
              onUnauthorized={handleUnauthorized}
            />
            <ThemeToggle value={theme} onToggle={() => setTheme(prev => (prev === "light" ? "dark" : "light"))} />
            <button
              onClick={() => {
                if (confirm("Are you sure you want to log out?")) {
                  handleLogout();
                }
              }}
              className="px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 text-sm"
            >
              Log out
            </button>
          </div>
        </header>
        <AssetGrid
          key={`${nonce + (folderId||'')}-${folderVersion}`}
          folderId={folderId}
          foldersVersion={folderVersion}
          onUnauthorized={handleUnauthorized}
        />
      </main>
    </div>
  );
}

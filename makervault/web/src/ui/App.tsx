import React from "react";
import UploadBar from "./UploadBar";
import AssetGrid from "./AssetGrid";
import Sidebar from "./Sidebar";
import Login from "./Login";
import ThemeToggle from "./ThemeToggle";
import { API_BASE, apiHealth, type HealthInfo } from "../lib/api";
import { clearToken, readToken, storeToken } from "../lib/auth";

const THEME_KEY = "makersvault_theme";

export default function App() {
  const [token, setToken] = React.useState<string | null>(() => readToken());
  const [nonce, setNonce] = React.useState(0);
  const [folderId, setFolderId] = React.useState<string | null>(null);
  const [health, setHealth] = React.useState<HealthInfo | null>(null);
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

  const handleLogin = (tok: string) => {
    storeToken(tok);
    setToken(tok);
  };

  const handleLogout = () => {
    clearToken();
    setToken(null);
  };

  if (authRequired && !token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-200 via-neutral-100 to-white dark:from-neutral-900 dark:via-neutral-950 dark:to-black">
        <Login onSuccess={handleLogin} apiUp={apiUp} />
      </div>
    );
  }

  return (
    <div className="h-screen flex">
      <Sidebar selectedId={folderId} onSelect={setFolderId} />
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
            <UploadBar folderId={folderId} onUploaded={() => setNonce(n => n + 1)} />
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
        <AssetGrid key={nonce + (folderId||'')} folderId={folderId} />
      </main>
    </div>
  );
}

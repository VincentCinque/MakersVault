import React from "react";
import { login } from "../lib/api";

type Props = {
  onSuccess: (token: string) => void;
  apiUp: boolean | null;
};

export default function Login({ onSuccess, apiUp }: Props) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await login(username, password);
      onSuccess(res.token);
    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Login failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 p-6 shadow-xl backdrop-blur">
      <div className="mb-6 text-center space-y-1">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">Makers Vault</h1>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">Sign in to continue</p>
      </div>
      {apiUp === false && (
        <div className="mb-4 rounded-md bg-red-100 text-red-900 dark:bg-red-900/30 dark:text-red-100 px-3 py-2 text-sm">
          API appears offline. Ensure the API service is running.
        </div>
      )}
      {error && (
        <div className="mb-4 rounded-md bg-red-100 text-red-900 dark:bg-red-900/30 dark:text-red-100 px-3 py-2 text-sm">
          {error}
        </div>
      )}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Username</label>
          <input
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900"
            autoComplete="username"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900"
            autoComplete="current-password"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full px-3 py-2 rounded-md bg-emerald-600 text-white font-medium disabled:opacity-60"
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}

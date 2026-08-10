"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-1 z-10 border-b border-black/10 dark:border-white/10 bg-[#F1F3F1]/80 dark:bg-[#0A0D0C]/80 backdrop-blur">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#F2A93C] animate-pulse"></span>
          <span className="font-mono text-sm tracking-tight text-black dark:text-white">keploy-and-go</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME" target="_blank" rel="noopener noreferrer" className="text-sm text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors">View on GitHub</a>
          {mounted && (
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="text-sm font-mono px-3 py-1 rounded-full border border-black/20 dark:border-white/20 text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:border-black/40 dark:hover:border-white/40 transition-colors">
              {theme === "dark" ? "light_mode" : "dark_mode"}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
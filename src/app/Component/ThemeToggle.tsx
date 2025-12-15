
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; 

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="ml-3 rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-xs
                 text-slate-700 hover:bg-slate-200 transition
                 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100
                 dark:hover:bg-slate-800"
    >
      {isDark ? "Light" : "Dark"} mode
    </button>
  );
}

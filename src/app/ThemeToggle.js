'use client';

import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      let savedTheme = 'light';
      try { savedTheme = localStorage.getItem('theme') || 'light'; } catch {}
      const dark = savedTheme === 'dark';
      setIsDark(dark);
      document.documentElement.classList.toggle('dark', dark);
      setIsMounted(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.classList.toggle('dark', nextDark);
    try { localStorage.setItem('theme', nextDark ? 'dark' : 'light'); } catch {}
  };

  // Keep the exact same footprint while the saved preference is being read.
  if (!isMounted) return <div aria-hidden="true" className="h-11 w-20 shrink-0" />;

  const label = isDark ? 'Включить светлую тему' : 'Включить тёмную тему';
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
      className="relative grid h-11 w-20 shrink-0 grid-cols-2 items-center rounded-xl border border-blue-100 bg-slate-100 p-1 text-slate-400 transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:border-purple-500/30 dark:bg-purple-950/40 dark:text-slate-300"
    >
      <span aria-hidden="true" className={`pointer-events-none absolute bottom-1 left-1 top-1 w-[calc(50%-4px)] rounded-lg border shadow-sm transition-transform duration-300 ease-in-out motion-reduce:transition-none ${isDark ? 'translate-x-full border-purple-300/40 bg-purple-900/60' : 'translate-x-0 border-blue-100/70 bg-white'}`} />
      <span aria-hidden="true" className="relative z-10 flex h-full items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="h-4 w-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M4.22 4.22l1.59 1.59m12.38 12.38l1.59 1.59M3 12h2.25m13.5 0H21m-16.78 6.22l1.59-1.59M17.66 6.34l1.59-1.59M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
        </svg>
      </span>
      <span aria-hidden="true" className="relative z-10 flex h-full items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="h-4 w-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      </span>
    </button>
  );
}

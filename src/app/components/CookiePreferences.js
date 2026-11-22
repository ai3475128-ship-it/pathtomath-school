'use client';

import { useEffect, useRef, useSyncExternalStore } from 'react';
import { observeCookieSurface } from '@/lib/floating-controls';

const KEY = 'azimut-media-consent-v1';
const CHANGE = 'azimut-media-consent-change';
let sessionChoice = '';

function choice() {
  try { return localStorage.getItem(KEY) || sessionChoice; } catch { return sessionChoice; }
}
function subscribe(callback) {
  window.addEventListener(CHANGE, callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener(CHANGE, callback);
    window.removeEventListener('storage', callback);
  };
}
export function useMediaPreference() {
  return useSyncExternalStore(subscribe, choice, () => '');
}
export function setMediaPreference(value) {
  sessionChoice = value;
  try { localStorage.setItem(KEY, value); } catch {}
  window.dispatchEvent(new Event(CHANGE));
}

export default function CookiePreferences() {
  const preference = useMediaPreference();
  const surfaceRef = useRef(null);

  // Reserve space above whichever cookie surface is currently visible.
  useEffect(() => {
    if (!surfaceRef.current) return;
    return observeCookieSurface(surfaceRef.current, window);
  }, [preference]);

  if (preference) return <button ref={surfaceRef} type="button" onClick={() => setMediaPreference('')} className="fixed bottom-3 right-3 z-40 rounded-full border border-slate-200 bg-white/95 px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm transition-colors duration-200 hover:border-sky-300 hover:bg-sky-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:border-purple-500/30 dark:bg-[#140e24] dark:text-purple-200 dark:hover:bg-purple-950">Настройки cookie</button>;
  return <section ref={surfaceRef} aria-label="Настройки cookie" className="fixed inset-x-4 bottom-4 z-50 mx-auto max-h-[calc(100dvh-11rem)] max-w-3xl overflow-y-auto rounded-2xl border border-sky-100 bg-white p-5 text-slate-700 shadow-xl dark:border-purple-500/30 dark:bg-[#140e24] dark:text-slate-200">
    <h2 className="font-bold">Настройки cookie</h2>
    <p className="mt-2 text-sm">Мы используем необходимые cookie для работы сайта и входа в аккаунт. Дополнительные cookie могут использовать видеосервисы при просмотре уроков. Вы можете принять их или оставить только необходимые.</p>
    <div className="mt-4 flex flex-wrap gap-3">
      <button type="button" onClick={() => setMediaPreference('allow')} className="rounded-xl bg-sky-600 px-4 py-2 text-sm font-bold text-white hover:bg-sky-700 dark:bg-purple-600">Принять все</button>
      <button type="button" onClick={() => setMediaPreference('essential')} className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-bold dark:border-purple-500/40">Только необходимые</button>
    </div>
  </section>;
}

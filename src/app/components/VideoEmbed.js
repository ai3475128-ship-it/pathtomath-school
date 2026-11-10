'use client';

import { setMediaPreference, useMediaPreference } from './CookiePreferences';

export default function VideoEmbed({ url, title }) {
  const preference = useMediaPreference();
  if (preference !== 'allow') return <div className="rounded-2xl border border-blue-100 p-6 dark:border-purple-500/20">
    <p className="text-sm">Видео размещено на стороннем сервисе, который может использовать cookie.</p>
    <button type="button" onClick={() => setMediaPreference('allow')} className="mt-3 rounded-xl bg-sky-600 px-4 py-2 text-sm font-bold text-white dark:bg-purple-600">Разрешить и показать видео</button>
  </div>;
  return <iframe src={url} title={title} className="w-full aspect-video rounded-2xl border-0" allow="autoplay; fullscreen; encrypted-media; picture-in-picture" sandbox="allow-scripts allow-same-origin allow-presentation" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />;
}

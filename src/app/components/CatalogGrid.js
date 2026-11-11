import Link from 'next/link';
import PhysicsPreview from './physics-cards/PhysicsPreview';
import OlympiadPreview from './olympiad-cards/OlympiadPreview';
import styles from './olympiad-cards/OlympiadPreview.module.css';

export default function CatalogGrid({ items, preview }) {
  return <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {items.map(({ href, title, number, id }) => <Link key={href} href={href} className={`group flex min-h-40 flex-col gap-3 rounded-3xl border border-blue-100/70 bg-white/90 p-6 shadow-sm transition-colors hover:border-sky-500 hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600 dark:border-purple-500/20 dark:bg-purple-950/20 dark:hover:bg-[#634EE4] ${preview ? styles.card : ''}`}>
      <span className={preview ? styles.label : ''}>
        {number && <span className="mb-3 block text-2xl font-black text-sky-500 group-hover:text-white dark:text-purple-300">{String(number).padStart(2, '0')}</span>}
        <span className="text-lg font-bold leading-snug text-slate-800 group-hover:text-white dark:text-white">{title}</span>
      </span>
      {preview === 'physics' && <PhysicsPreview number={number} />}
      {preview === 'olympiad' && <OlympiadPreview topic={id} />}
    </Link>)}
  </div>;
}

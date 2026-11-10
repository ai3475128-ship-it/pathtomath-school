import Link from 'next/link';
import { olympiadLogos } from './olympiad-logos';
import styles from './OlympiadPreview.module.css';

export default function CompetitionCard({ olympiad }) {
  const logo = olympiadLogos[olympiad.id];

  return <Link href={`/olympiads/tasks/${olympiad.id}`}
    className={`group flex min-h-[150px] flex-col rounded-[24px] border border-blue-100/60 bg-white/80 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-sky-500 hover:bg-sky-500 hover:shadow-xl dark:border-purple-500/20 dark:bg-purple-950/10 dark:hover:border-sky-500 dark:hover:bg-sky-500 ${styles.card} ${logo ? styles.hasLogo : ''}`}>
    <div className={styles.competitionLabel}>
      <span className="text-xs font-black uppercase tracking-wide text-sky-600 group-hover:text-white dark:text-purple-300 dark:group-hover:text-white">{olympiad.level} уровень</span>
      <h2 className="mt-3 text-lg font-black leading-snug text-slate-800 group-hover:text-white dark:text-white">{olympiad.name}</h2>
    </div>
    {logo && <span className={styles.logoPreview} aria-hidden="true">
      <svg className={styles.logoSurface} viewBox={logo.viewBox} focusable="false"><path d={logo.path} fillRule="evenodd" /></svg>
    </span>}
  </Link>;
}

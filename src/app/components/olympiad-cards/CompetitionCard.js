import Link from 'next/link';
import { olympiadLogos } from './olympiad-logos';
import { userOlympiadLogos } from './user-olympiad-logos';
import CustomCompetitionLogo from './CustomCompetitionLogo';
import styles from './OlympiadPreview.module.css';

export default function CompetitionCard({ olympiad, href }) {
  const custom = olympiad.id === 'omo';
  const logo = userOlympiadLogos[olympiad.id] || olympiadLogos[olympiad.id];
  const hasLogo = custom || Boolean(logo);

  return <Link href={href || `/olympiads/tasks/${olympiad.id}`}
    className={`group flex min-h-[150px] flex-col rounded-[24px] border border-blue-100/60 bg-white/80 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-sky-500 hover:bg-sky-500 hover:shadow-xl dark:border-purple-500/20 dark:bg-purple-950/10 dark:hover:border-sky-500 dark:hover:bg-sky-500 ${styles.card} ${hasLogo ? styles.hasLogo : ''}`}>
    <div className={styles.competitionLabel}>
      <span className="text-xs font-black uppercase tracking-wide text-sky-600 group-hover:text-white dark:text-purple-300 dark:group-hover:text-white">{olympiad.level} уровень</span>
      <h2 className="mt-3 text-lg font-black leading-snug text-slate-800 group-hover:text-white dark:text-white">{olympiad.name}</h2>
    </div>
    {hasLogo && <span className={styles.logoPreview} aria-hidden="true">
      {custom ? <CustomCompetitionLogo id={olympiad.id} /> : olympiad.id === 'lomonosov' ? <span className={`${styles.logoSurface} ${styles.captionedLogo}`}>
        <svg viewBox={logo.viewBox} focusable="false"><path d={logo.path} fillRule="evenodd" /></svg>
        <span className={styles.logoCaption}>ЛОМОНОСОВ</span>
      </span> : <svg className={styles.logoSurface} viewBox={logo.viewBox} focusable="false"><path d={logo.path} fillRule="evenodd" /></svg>}
    </span>}
  </Link>;
}

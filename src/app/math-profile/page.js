import Link from 'next/link';
import { SectionFrame } from '../components/SectionHub';
import styles from './MathIllustration.module.css';

function MathIllustration() {
  return <span className={`${styles.math} text-sky-500 transition-colors duration-300 group-hover:text-white dark:text-purple-300`} aria-hidden="true">
    <span className={styles.formula}>
      <span className={styles.sumBlock}>
        <span className={styles.upper}>n</span>
        <span className={styles.sum}>∑</span>
        <span className={styles.lower}>i = 1</span>
      </span>
      <span className={styles.term}>a<sub>i</sub></span>
      <span className={styles.expansion}>= a<sub>1</sub> + ··· + a<sub>n</sub></span>
    </span>
  </span>;
}

function PhysicsIllustration() {
  return <svg viewBox="0 0 200 200" aria-hidden="true" className="h-40 w-40 text-sky-500 transition-colors duration-300 group-hover:text-white dark:text-purple-300 sm:h-44 sm:w-44">
    <g className={styles.orbits} fill="none" stroke="currentColor" strokeWidth="1.6">
      <ellipse cx="100" cy="100" rx="32" ry="77" />
      <ellipse cx="100" cy="100" rx="32" ry="77" transform="rotate(60 100 100)" opacity=".75" />
      <ellipse cx="100" cy="100" rx="32" ry="77" transform="rotate(120 100 100)" opacity=".75" />
      <circle cx="158" cy="65" r="4.5" fill="currentColor" stroke="none" />
      <circle cx="42" cy="135" r="4.5" fill="currentColor" stroke="none" />
    </g>
    <circle className={styles.nucleus} cx="100" cy="100" r="9" fill="currentColor" />
    <g fill="currentColor" className={styles.burst}>
      <circle cx="100" cy="100" r="2.6" style={{ '--dx': '30px', '--dy': '-42px' }} />
      <circle cx="100" cy="100" r="2" style={{ '--dx': '-45px', '--dy': '-27px' }} />
      <circle cx="100" cy="100" r="2.4" style={{ '--dx': '48px', '--dy': '13px' }} />
      <circle cx="100" cy="100" r="2" style={{ '--dx': '-22px', '--dy': '47px' }} />
      <circle cx="100" cy="100" r="2.2" style={{ '--dx': '23px', '--dy': '43px' }} />
      <circle cx="100" cy="100" r="2" style={{ '--dx': '-48px', '--dy': '15px' }} />
    </g>
  </svg>;
}

const subjects = [
  { href: '/math-profile/ege', title: 'Математика', Illustration: MathIllustration },
  { href: '/math-profile/physics', title: 'Физика', Illustration: PhysicsIllustration },
];

export default function EgeHubPage() {
  return <SectionFrame title="ЕГЭ">
    <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 sm:gap-6">
      {subjects.map(({ href, title, Illustration }) => <Link key={href} href={href} className={`${styles.subject} group relative flex min-h-[290px] flex-col items-center justify-center overflow-hidden rounded-[28px] border border-blue-100/60 bg-white/85 px-8 py-10 text-center shadow-sm backdrop-blur-md transition-all duration-300 hover:border-sky-500 hover:bg-sky-500 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600 dark:border-purple-500/20 dark:bg-purple-950/20 dark:hover:border-[#634EE4] dark:hover:bg-[#634EE4] dark:focus-visible:outline-purple-400 sm:min-h-[340px]`}>
        <svg aria-hidden="true" viewBox="0 0 500 180" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 w-full text-sky-100/60 transition-opacity duration-300 group-hover:opacity-20 dark:text-purple-500/10"><path d="M0 180V150C125 12 235 155 330 104S445 34 500 24v156Z" fill="currentColor" /></svg>
        <span className="relative flex w-full justify-center"><Illustration /></span>
        <h2 className="relative mt-3 text-2xl font-black leading-tight text-slate-800 transition-colors duration-300 group-hover:text-white dark:text-white sm:text-3xl">{title}</h2>
      </Link>)}
    </div>
  </SectionFrame>;
}

import Link from 'next/link';
import { SectionFrame } from '../components/SectionHub';
import OlympiadIllustration from './OlympiadIllustration';

export const metadata = { title: 'Олимпиады по математике | АЗИМУТ', description: 'Олимпиадный календарь и задачи для подготовки по темам и олимпиадам.' };

const sections = [
  { href: '/olympiad-calendar', title: 'Олимпиадный календарь', illustration: 'calendar' },
  { href: '/math-profile/olympiads/intro', title: 'Подготовительные задачи', illustration: 'preparation' },
  { href: '/math-profile/olympiads/main', title: 'Задачи с олимпиад', illustration: 'topics' },
  { href: '/olympiads/tasks', title: 'Задачи по олимпиадам', illustration: 'olympiads' },
];

export default function OlympiadsHubPage() {
  return <SectionFrame title="Олимпиады">
    <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 sm:gap-6">
      {sections.map(({ href, title, illustration }) => <Link key={href} href={href} className="group relative flex min-h-[270px] flex-col items-center justify-center overflow-hidden rounded-[28px] border border-blue-100/60 bg-white/85 px-6 py-8 text-center shadow-sm backdrop-blur-md transition-all duration-300 hover:border-sky-500 hover:bg-sky-500 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600 dark:border-purple-500/20 dark:bg-purple-950/20 dark:hover:border-[#634EE4] dark:hover:bg-[#634EE4] dark:focus-visible:outline-purple-400 sm:min-h-[300px]">
        <svg aria-hidden="true" viewBox="0 0 500 180" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 w-full text-sky-100/60 transition-opacity duration-300 group-hover:opacity-20 dark:text-purple-500/10"><path d="M0 180V150C125 12 235 155 330 104S445 34 500 24v156Z" fill="currentColor" /></svg>
        <span className="relative text-sky-500 transition-colors duration-300 group-hover:text-white dark:text-purple-300 dark:group-hover:text-white"><OlympiadIllustration name={illustration} /></span>
        <h2 className="relative mt-4 text-xl font-black leading-tight text-slate-800 transition-colors duration-300 group-hover:text-white dark:text-white sm:text-2xl">{title}</h2>
      </Link>)}
    </div>
  </SectionFrame>;
}

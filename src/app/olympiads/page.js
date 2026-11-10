import Link from 'next/link';
import { SectionFrame } from '../components/SectionHub';

export const metadata = { title: 'Олимпиады по математике | АЗИМУТ', description: 'Олимпиадный календарь и задачи для подготовки по темам и олимпиадам.' };

function CalendarIcon() {
  return <svg viewBox="0 0 180 180" aria-hidden="true" className="h-36 w-36 sm:h-40 sm:w-40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="29" y="37" width="122" height="110" rx="14" />
    <path d="M29 65h122 M57 27v20 M123 27v20" />
    <g fill="currentColor" stroke="none" opacity=".3">
      <rect x="46" y="78" width="11" height="11" rx="1" /><rect x="68" y="78" width="11" height="11" rx="1" /><rect x="90" y="78" width="11" height="11" rx="1" />
      <rect x="46" y="99" width="11" height="11" rx="1" /><rect x="68" y="99" width="11" height="11" rx="1" /><rect x="90" y="99" width="11" height="11" rx="1" />
      <rect x="46" y="120" width="11" height="11" rx="1" /><rect x="68" y="120" width="11" height="11" rx="1" />
    </g>
    <path d="m121 96 5 10 11 2-8 8 2 11-10-5-10 5 2-11-8-8 11-2z" fill="currentColor" fillOpacity=".12" />
  </svg>;
}

function PreparationIcon() {
  return <svg viewBox="0 0 180 180" aria-hidden="true" className="h-36 w-36 sm:h-40 sm:w-40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M36 34 124 27v112l-88 8z M36 34c-5 1-7 4-7 8v101c0 4 3 6 7 5l88-7 M36 41l88-7 M53 120l52-5 M53 130l52-5" />
    <path d="M96 60H72l13 15-13 15h24" strokeWidth="2.5" />
    <g transform="rotate(19 140 110)"><rect x="135" y="80" width="10" height="53" rx="4" /><path d="M135 90h10 M135 125h10 M135 133l5 10 5-10" /></g>
  </svg>;
}

function TopicsIcon() {
  return <svg viewBox="0 0 180 180" aria-hidden="true" className="h-36 w-36 sm:h-40 sm:w-40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="26" y="27" width="58" height="58" rx="9" /><rect x="96" y="27" width="58" height="58" rx="9" />
    <rect x="26" y="97" width="58" height="58" rx="9" /><rect x="96" y="97" width="58" height="58" rx="9" />
    <path d="M67 43H45l12 13-12 13h22 M109 68l16-27 16 27z M39 123l9 10 13-22h9 M110 140v-15h7v15 M123 140v-25h7v25 M136 140v-34h7v34" />
  </svg>;
}

function LaurelBranch() {
  const leaves = [
    [65.4, 144.5, -72], [62.9, 142.7, 48],
    [54.2, 134.2, -65], [52.5, 131.8, 43],
    [46.1, 121.0, -57], [44.9, 118.0, 38],
    [40.9, 105.1, -47], [40.1, 102.1, 32],
    [38.3, 88.1, -35], [38.1, 84.9, 26],
    [38.6, 70.6, -25], [38.9, 67.4, 20],
    [41.7, 53.3, -12], [48.6, 35.8, 23],
  ];

  return <g strokeWidth="1.8">
    <path d="M80 151C34 140 25 62 57 23" />
    {leaves.map(([x, y, angle]) => <path key={`${x}-${y}`} d="M0 0C-4-5-4-12 0-17 4-12 4-5 0 0Z" transform={`translate(${x} ${y}) rotate(${angle})`} />)}
  </g>;
}

function OlympiadsIcon() {
  return <svg viewBox="0 0 180 180" aria-hidden="true" className="h-36 w-36 sm:h-40 sm:w-40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <LaurelBranch />
    <g transform="translate(180 0) scale(-1 1)"><LaurelBranch /></g>
    <path d="M66 59h48v7H79l22 24-22 24h35v7H66v-6L88 90 66 65z" fill="currentColor" stroke="none" />
  </svg>;
}

const sections = [
  { href: '/olympiad-calendar', title: 'Олимпиадный календарь', Icon: CalendarIcon },
  { href: '/math-profile/olympiads/intro', title: 'Подготовительные задачи', Icon: PreparationIcon },
  { href: '/math-profile/olympiads/main', title: 'Задачи с олимпиад', Icon: TopicsIcon },
  { href: '/olympiads/tasks', title: 'Задачи по олимпиадам', Icon: OlympiadsIcon },
];

export default function OlympiadsHubPage() {
  return <SectionFrame title="Олимпиады">
    <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 sm:gap-6">
      {sections.map(({ href, title, Icon }) => <Link key={href} href={href} className="group relative flex min-h-[270px] flex-col items-center justify-center overflow-hidden rounded-[28px] border border-blue-100/60 bg-white/85 px-6 py-8 text-center shadow-sm backdrop-blur-md transition-all duration-300 hover:border-sky-500 hover:bg-sky-500 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600 dark:border-purple-500/20 dark:bg-purple-950/20 dark:hover:border-[#634EE4] dark:hover:bg-[#634EE4] dark:focus-visible:outline-purple-400 sm:min-h-[300px]">
        <svg aria-hidden="true" viewBox="0 0 500 180" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 w-full text-sky-100/60 transition-opacity duration-300 group-hover:opacity-20 dark:text-purple-500/10"><path d="M0 180V150C125 12 235 155 330 104S445 34 500 24v156Z" fill="currentColor" /></svg>
        <span className="relative text-sky-500 transition-colors duration-300 group-hover:text-white dark:text-purple-300 dark:group-hover:text-white"><Icon /></span>
        <h2 className="relative mt-4 text-xl font-black leading-tight text-slate-800 transition-colors duration-300 group-hover:text-white dark:text-white sm:text-2xl">{title}</h2>
      </Link>)}
    </div>
  </SectionFrame>;
}

import Link from 'next/link';
import { SectionFrame } from '../components/SectionHub';

function MathIllustration() {
  return <svg viewBox="0 0 200 200" aria-hidden="true" className="h-40 w-40 text-sky-500 transition-colors duration-300 group-hover:text-white dark:text-purple-300 sm:h-44 sm:w-44">
    <path d="M49 69a73 73 0 0 1 73-45M152 130a73 73 0 0 1-73 45" fill="none" stroke="currentColor" strokeWidth="1.5" opacity=".55" />
    <circle cx="54" cy="59" r="4" fill="currentColor" />
    <circle cx="149" cy="140" r="4" fill="currentColor" />
    <path d="M69 47h74v12H89l31 40-31 42h54v12H69v-9l34-45-34-43z" fill="currentColor" opacity=".9" />
    <path d="M72 50h68M72 150h68" stroke="currentColor" strokeWidth="2" opacity=".45" />
  </svg>;
}

function PhysicsIllustration() {
  return <svg viewBox="0 0 200 200" aria-hidden="true" className="h-40 w-40 text-sky-500 transition-colors duration-300 group-hover:text-white dark:text-purple-300 sm:h-44 sm:w-44">
    <g fill="none" stroke="currentColor" strokeWidth="1.6">
      <ellipse cx="100" cy="100" rx="32" ry="77" />
      <ellipse cx="100" cy="100" rx="32" ry="77" transform="rotate(60 100 100)" opacity=".75" />
      <ellipse cx="100" cy="100" rx="32" ry="77" transform="rotate(120 100 100)" opacity=".75" />
    </g>
    <circle cx="100" cy="100" r="9" fill="currentColor" />
    <circle cx="158" cy="65" r="4.5" fill="currentColor" />
    <circle cx="42" cy="135" r="4.5" fill="currentColor" />
  </svg>;
}

const subjects = [
  { href: '/math-profile/ege', title: 'Математика', Illustration: MathIllustration },
  { href: '/math-profile/physics', title: 'Физика', Illustration: PhysicsIllustration },
];

export default function EgeHubPage() {
  return <SectionFrame title="ЕГЭ">
    <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 sm:gap-6">
      {subjects.map(({ href, title, Illustration }) => <Link key={href} href={href} className="group relative flex min-h-[290px] flex-col items-center justify-center overflow-hidden rounded-[28px] border border-blue-100/60 bg-white/85 px-8 py-10 text-center shadow-sm backdrop-blur-md transition-all duration-300 hover:border-sky-500 hover:bg-sky-500 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600 dark:border-purple-500/20 dark:bg-purple-950/20 dark:hover:border-[#634EE4] dark:hover:bg-[#634EE4] dark:focus-visible:outline-purple-400 sm:min-h-[340px]">
        <svg aria-hidden="true" viewBox="0 0 500 180" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 w-full text-sky-100/60 transition-opacity duration-300 group-hover:opacity-20 dark:text-purple-500/10"><path d="M0 180V150C125 12 235 155 330 104S445 34 500 24v156Z" fill="currentColor" /></svg>
        <span className="relative"><Illustration /></span>
        <h2 className="relative mt-3 text-2xl font-black leading-tight text-slate-800 transition-colors duration-300 group-hover:text-white dark:text-white sm:text-3xl">{title}</h2>
      </Link>)}
    </div>
  </SectionFrame>;
}

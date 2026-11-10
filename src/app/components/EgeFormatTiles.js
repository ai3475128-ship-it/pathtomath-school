import Link from 'next/link';

const iconClass = 'h-36 w-36 text-sky-500 transition-colors duration-300 group-hover:text-white dark:text-purple-300 sm:h-40 sm:w-40';

function PreparationIcon({ subject }) {
  return <svg viewBox="0 0 200 200" aria-hidden="true" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M38 37 139 29v126l-101 9z" />
    <path d="M38 37c-5 1-7 4-7 8v115c0 4 3 6 7 6l101-9" />
    <path d="M38 43 139 35M56 133l59-5M56 143l59-5" opacity=".8" />
    <text x="89" y="67" textAnchor="middle" fill="currentColor" stroke="none" fontSize="16" fontWeight="700">ЕГЭ</text>
    {subject === 'physics' ? <g transform="translate(89 96)" strokeWidth="1.4">
      <ellipse rx="15" ry="7" /><ellipse rx="15" ry="7" transform="rotate(60)" /><ellipse rx="15" ry="7" transform="rotate(120)" />
      <circle r="2" fill="currentColor" stroke="none" />
    </g> : <text x="89" y="111" textAnchor="middle" fill="currentColor" stroke="none" fontSize="31" fontFamily="serif">∑</text>}
    <g transform="rotate(19 156 120)">
      <rect x="151" y="88" width="11" height="58" rx="4" />
      <path d="M151 98h11M151 137h11M151 146l5.5 11 5.5-11" />
    </g>
  </svg>;
}

function BankIcon() {
  return <svg viewBox="0 0 200 200" aria-hidden="true" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {[0, 1].flatMap((row) => [0, 1].map((col) => <g key={`${row}-${col}`} transform={`translate(${26 + col * 77} ${48 + row * 56})`}>
      <rect width="68" height="44" rx="8" />
      <rect x="10" y="14" width="11" height="11" rx="1" />
      <path d="M29 19h27M29 27h19" opacity=".8" />
    </g>))}
  </svg>;
}

export default function EgeFormatTiles({ subject, introHref, bankHref, bankTitle = 'Банк заданий' }) {
  const items = [
    { href: introHref, title: 'Подготовительные задачи', illustration: <PreparationIcon subject={subject} /> },
    { href: bankHref, title: bankTitle, illustration: <BankIcon /> },
  ];
  return <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 sm:gap-6">
    {items.map(({ href, title, illustration }) => <Link key={href} href={href} className="group relative flex min-h-[290px] flex-col items-center justify-center overflow-hidden rounded-[28px] border border-blue-100/60 bg-white/85 px-6 py-10 text-center shadow-sm backdrop-blur-md transition-all duration-300 hover:border-sky-500 hover:bg-sky-500 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600 dark:border-purple-500/20 dark:bg-purple-950/20 dark:hover:border-[#634EE4] dark:hover:bg-[#634EE4] dark:focus-visible:outline-purple-400 sm:min-h-[340px]">
      <svg aria-hidden="true" viewBox="0 0 500 180" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 w-full text-sky-100/60 transition-opacity duration-300 group-hover:opacity-20 dark:text-purple-500/10"><path d="M0 180V150C125 12 235 155 330 104S445 34 500 24v156Z" fill="currentColor" /></svg>
      <span className="relative">{illustration}</span>
      <h2 className="relative mt-4 text-xl font-black leading-tight text-slate-800 transition-colors duration-300 group-hover:text-white dark:text-white sm:text-2xl">{title}</h2>
    </Link>)}
  </div>;
}

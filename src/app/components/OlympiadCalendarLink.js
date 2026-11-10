import Link from 'next/link';

export default function OlympiadCalendarLink() {
  return (
    <Link href="/olympiad-calendar" className="group flex items-center justify-between gap-4 rounded-2xl border border-sky-200 bg-white p-5 shadow-sm hover:border-sky-400 dark:border-purple-500/30 dark:bg-[#140e24] dark:hover:border-purple-400">
      <span><span className="block font-black text-sky-700 dark:text-purple-300">Олимпиадный календарь</span><span className="mt-1 block text-sm text-slate-600 dark:text-slate-300">Даты и регистрация на олимпиады по математике</span></span>
      <span aria-hidden="true" className="text-xl text-sky-600 dark:text-purple-300">→</span>
    </Link>
  );
}

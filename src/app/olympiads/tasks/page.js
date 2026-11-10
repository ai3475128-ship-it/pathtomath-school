import Link from 'next/link';
import { olympiads } from '@/lib/olympiad-calendar';
import { SectionFrame } from '../../components/SectionHub';

export default function OlympiadTaskDirectory() {
  return <SectionFrame title="Задачи по олимпиадам" breadcrumb={{ href: '/olympiads', label: 'Олимпиады' }} description="Выберите олимпиаду, чтобы открыть её задачи и доступные материалы для подготовки.">
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {olympiads.map((olympiad) => <Link key={olympiad.id} href={`/olympiads/tasks/${olympiad.id}`} className="group flex min-h-[150px] flex-col rounded-[24px] border border-blue-100/60 bg-white/80 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-sky-500 hover:bg-sky-500 hover:shadow-xl dark:border-purple-500/20 dark:bg-purple-950/10 dark:hover:border-[#634EE4] dark:hover:bg-[#634EE4]">
        <span className="text-xs font-black uppercase tracking-wide text-sky-600 group-hover:text-white dark:text-purple-300 dark:group-hover:text-white">{olympiad.level} уровень</span>
        <h2 className="mt-3 text-lg font-black leading-snug text-slate-800 group-hover:text-white dark:text-white">{olympiad.name}</h2>
      </Link>)}
    </div>
  </SectionFrame>;
}

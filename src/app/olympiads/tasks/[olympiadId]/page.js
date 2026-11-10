import Link from 'next/link';
import { notFound } from 'next/navigation';
import { olympiads } from '@/lib/olympiad-calendar';
import { competitionTasksByGrade, competitionArchives } from '@/lib/olympiad-competition-tasks';
import { SectionFrame } from '../../../components/SectionHub';
import TaskListBlock from '../../../math-profile/[taskNumber]/TaskListBlock';

export default async function OlympiadTasksPage({ params, searchParams }) {
  const { olympiadId } = await params;
  const query = await searchParams;
  const olympiad = olympiads.find((item) => item.id === olympiadId);
  if (!olympiad) notFound();
  const grade = ['8', '9', '10', '11'].includes(query?.grade) ? query.grade : '8';
  const groups = competitionTasksByGrade[olympiadId]?.[grade] || [];
  const archive = competitionArchives[olympiadId];

  return <SectionFrame title={olympiad.name} eyebrow="Олимпиады" breadcrumb={{ href: '/olympiads/tasks', label: 'Задачи по олимпиадам' }}>
    <div className="mx-auto w-full max-w-5xl space-y-6">
      <nav aria-label="Выберите класс" className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {['8', '9', '10', '11'].map((option) => <Link key={option} href={`/olympiads/tasks/${olympiadId}?grade=${option}`} aria-current={option === grade ? 'page' : undefined} scroll={false} className={`rounded-xl border px-4 py-2.5 text-sm font-black transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600 sm:px-6 ${option === grade ? 'border-sky-500 bg-sky-500 text-white dark:border-purple-500 dark:bg-[#634EE4]' : 'border-blue-100 bg-white/80 text-slate-600 hover:border-sky-500 hover:bg-sky-500 hover:text-white dark:border-purple-500/30 dark:bg-purple-950/20 dark:text-purple-200 dark:hover:bg-[#634EE4] dark:hover:text-white'}`}>
          {option} класс
        </Link>)}
      </nav>
      {groups.length ? groups.map((group) => <section key={group.module} className="space-y-4"><h2 className="text-xl font-black text-slate-800 dark:text-white">{group.topic}</h2><TaskListBlock storageModule={group.module} onlyTaskIds={group.ids} /></section>) : <div className="rounded-[28px] border border-blue-100/60 bg-white/80 px-6 py-12 text-center text-sm font-semibold text-slate-500 shadow-sm dark:border-purple-500/20 dark:bg-purple-950/20 dark:text-slate-300">Задачи для {grade} класса пока не добавлены.</div>}
      <div className="text-center"><a href={archive || olympiad.url} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-2xl border border-sky-300 bg-white px-5 py-3 text-sm font-bold text-sky-700 hover:bg-sky-500 hover:text-white dark:border-purple-500/30 dark:bg-purple-950/20 dark:text-purple-300 dark:hover:bg-[#634EE4] dark:hover:text-white">Материалы организатора</a></div>
    </div>
  </SectionFrame>;
}

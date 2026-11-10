import { notFound } from 'next/navigation';
import { olympiads } from '@/lib/olympiad-calendar';
import { competitionTasks, competitionArchives } from '@/lib/olympiad-competition-tasks';
import { SectionFrame } from '../../../components/SectionHub';
import TaskListBlock from '../../../math-profile/[taskNumber]/TaskListBlock';

export default async function OlympiadTasksPage({ params }) {
  const { olympiadId } = await params;
  const olympiad = olympiads.find((item) => item.id === olympiadId);
  if (!olympiad) notFound();
  const groups = competitionTasks[olympiadId] || [];
  const archive = competitionArchives[olympiadId];
  return <SectionFrame title={olympiad.name} breadcrumb={{ href: '/olympiads/tasks', label: 'Задачи по олимпиадам' }}>
    <div className="space-y-8">
      {groups.length ? groups.map((group) => <section key={group.module} className="space-y-4"><h2 className="text-xl font-black text-slate-800 dark:text-white">{group.topic}</h2><TaskListBlock storageModule={group.module} onlyTaskIds={group.ids} /></section>) : <p className="rounded-3xl border border-blue-100/60 bg-white/80 p-8 text-slate-600 dark:border-purple-500/20 dark:bg-purple-950/20 dark:text-slate-300">В нашей базе задачи этой олимпиады пока не добавлены.</p>}
      <a href={archive || olympiad.url} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-2xl border border-sky-300 bg-white px-5 py-3 text-sm font-bold text-sky-700 hover:bg-sky-500 hover:text-white dark:border-purple-500/30 dark:bg-purple-950/20 dark:text-purple-300 dark:hover:bg-[#634EE4] dark:hover:text-white">{archive ? 'Задания прошлых лет на сайте организатора' : 'Официальный сайт олимпиады'}</a>
    </div>
  </SectionFrame>;
}

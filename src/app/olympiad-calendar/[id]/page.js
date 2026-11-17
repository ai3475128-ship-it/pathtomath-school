import Link from 'next/link';
import { notFound } from 'next/navigation';
import { calendarOlympiads, events, olympiadDetails } from '@/lib/olympiad-calendar';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const item = calendarOlympiads.find(o=>o.id===id);
  return item ? { title:`${item.name} — олимпиада по математике | АЗИМУТ`, description:`Даты и этапы олимпиады «${item.name}» по математике, информация об участии и ссылка на организатора.` } : {};
}
function Stage({ heading, description, dates, fallback }) {
  return <section className="rounded-[26px] border border-blue-100 bg-white p-6 shadow-sm dark:border-purple-500/20 dark:bg-[#1b1235] sm:p-8">
    <h2 className="text-xl font-black text-[#162550] dark:text-white">{heading}</h2>
    <p className="mt-3 max-w-4xl leading-relaxed text-slate-700 dark:text-slate-200">{description || fallback}</p>
    {dates.length > 0 && <ul className="mt-5 space-y-3">{dates.map(event=><li key={event.id} className="rounded-2xl bg-blue-50/70 p-4 dark:bg-purple-950/40">
      <div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="font-extrabold text-slate-900 dark:text-white">{event.stage}</h3>{event.tentative && <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-900">Предварительно</span>}</div>
      <p className="mt-1 font-bold text-blue-700 dark:text-purple-200">{event.dateText}</p>
      {event.format && <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">{event.format}</p>}
      {event.detail && <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200">{event.detail}</p>}
      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1"><a href={event.source} target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-bold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900 dark:text-purple-200">Источник сведений</a>{event.secondarySource && <a href={event.secondarySource} target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-bold text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900 dark:text-purple-200">Общее расписание</a>}</div>
    </li>)}</ul>}
  </section>;
}
export default async function OlympiadDetailPage({ params }) {
  const { id } = await params;
  const item = calendarOlympiads.find(o=>o.id===id);
  if (!item) notFound();
  const info=olympiadDetails[id] || {};
  const dates=events.filter(e=>e.olympiad===id).sort((a,b)=>a.start.localeCompare(b.start));
  const stage=kind=>dates.filter(e=>e.kinds.includes(kind));
  return <main className="min-h-screen bg-[#f0f5ff] px-4 pb-20 pt-10 text-slate-800 dark:bg-[#0f0920] dark:text-slate-100 sm:px-8 sm:pt-14">
    <div className="mx-auto max-w-5xl space-y-6">
      <nav aria-label="Навигация" className="flex flex-wrap gap-2 text-sm font-medium text-slate-600 dark:text-slate-300"><Link href="/olympiads" className="hover:text-blue-700">Олимпиады</Link><span>/</span><Link href="/olympiad-calendar" className="hover:text-blue-700">Календарь</Link><span>/</span><span>{item.name}</span></nav>
      <header className="rounded-[30px] bg-gradient-to-br from-blue-600 to-blue-800 p-7 text-white dark:from-purple-700 dark:to-purple-950 sm:p-10">
        <p className="text-xs font-black uppercase tracking-[.16em] text-blue-100">Математика · 2026/27{item.level ? ` · ${item.level} уровень` : ' · Всероссийская олимпиада'}</p>
        <h1 className="mt-3 break-words text-3xl font-black tracking-tight sm:text-4xl">{item.name}</h1>
        {info.grades && <p className="mt-3 text-blue-50">{info.grades}</p>}
        <div className="mt-6 flex flex-wrap gap-3"><a href={item.url} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-blue-800 hover:bg-blue-50">Сайт олимпиады</a>{item.registerUrl && <a href={item.registerUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/70 px-5 py-3 text-sm font-extrabold text-white hover:bg-white/15">Сайт регистрации</a>}</div>
      </header>
      <Stage heading="Регистрация" dates={stage('registration')} fallback="Сроки регистрации и правила подачи заявки уточняйте на сайте организатора." />
      <Stage heading="Отборочный этап" description={info.selection} dates={stage('qualifying')} fallback="Формат, классы и условия прохождения отбора уточняйте на сайте организатора." />
      <Stage heading="Заключительный этап" description={info.final} dates={stage('final')} fallback="Сроки, формат, площадки и условия допуска уточняйте на сайте организатора." />
      <div className="flex flex-wrap items-center justify-between gap-4"><Link href="/olympiad-calendar" className="text-sm font-bold text-blue-700 hover:underline dark:text-purple-300">← Вернуться в календарь</Link><p className="text-sm text-slate-600 dark:text-slate-300">Даты могут меняться — сверяйте их с организатором.</p></div>
    </div>
  </main>;
}

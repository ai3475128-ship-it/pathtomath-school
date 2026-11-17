import Link from 'next/link';
import CalendarClock from './CalendarClock';
import { activeEvents, calendarMonth, calendarOlympiads, events, eventsForMonth, monthGrid, shiftCalendarMonth } from '@/lib/olympiad-calendar';

const title = 'Календарь олимпиад по математике 2026–2027 | АЗИМУТ';
const description = 'Даты математических олимпиад, регистрации и этапы сезона 2026/27, информация и ссылки на организаторов.';
export function generateMetadata() {
  let canonical;
  try { const origin = new URL(process.env.APP_ORIGIN); if (origin.protocol === 'https:') canonical = new URL('/olympiad-calendar', origin).href; } catch {}
  return { title, description, ...(canonical ? { alternates: { canonical } } : {}), openGraph: { title, description, type: 'website', ...(canonical ? { url: canonical } : {}) } };
}
const byId = Object.fromEntries(calendarOlympiads.map((o) => [o.id, o]));
const weekdays = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];
function ruDate(date, options) { return new Intl.DateTimeFormat('ru-RU', { ...options, timeZone:'UTC' }).format(new Date(`${date}T12:00:00Z`)); }
function monthLabel(month) { const s=ruDate(`${month}-01`,{month:'long',year:'numeric'}).replace(/\s*г\.$/,''); return s.charAt(0).toLocaleUpperCase('ru')+s.slice(1); }
function calendarHref(month, q, level) { const params=new URLSearchParams({month}); if(q)params.set('q',q); if(level)params.set('level',level); return `/olympiad-calendar?${params}`; }
function eventLabel(e) { return `${e.boundary === 'start' ? 'Начало · ' : e.boundary === 'end' ? 'Окончание · ' : e.boundary === 'continues' ? 'Продолжается · ' : ''}${e.stage}${e.tentative ? ' · предварительно' : ''}`; }
function EventRow({ event, active = false }) {
  const olympiad=byId[event.olympiad];
  if(!olympiad)return null;
  const stage=active ? `${event.stage} · до ${event.activeUntil || ruDate(event.end,{day:'numeric',month:'long'})}${event.tentative ? ' · предварительно' : ''}` : eventLabel(event);
  return <Link href={`/olympiad-calendar/${olympiad.id}`} className="flex min-w-0 items-center gap-3 rounded-xl px-3 py-3 text-slate-900 transition-colors hover:bg-sky-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:text-slate-100 dark:hover:bg-purple-900/30">
    <span className="h-2 w-2 shrink-0 rounded-full bg-sky-500 dark:bg-purple-400" aria-hidden="true" />
    <span className="min-w-0 flex-1"><span className="block break-words text-sm font-bold leading-snug sm:text-base">{olympiad.name}</span><span className="mt-1 block break-words text-sm leading-snug text-slate-600 dark:text-slate-300">{stage}</span></span>
    {olympiad.level && <span className="shrink-0 whitespace-nowrap rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600 dark:bg-purple-950 dark:text-purple-200">{olympiad.level} уровень</span>}
  </Link>;
}
function MonthView({ month, today, days, query, level }) {
  return <section aria-label="Календарь месяца" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-purple-500/20 dark:bg-[#1b1235] sm:p-6">
    <div className="flex items-center justify-between gap-3">
      <h2 className="text-lg font-bold text-slate-900 dark:text-white">{monthLabel(month)}</h2>
      <nav aria-label="Выбор месяца" className="flex items-center gap-1">
        <Link aria-label="Предыдущий месяц" href={calendarHref(shiftCalendarMonth(month,-1),query,level)} className="grid h-10 w-10 place-items-center rounded-lg text-xl text-slate-600 hover:bg-sky-50 hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-sky-600 dark:text-slate-200 dark:hover:bg-purple-900/40">‹</Link>
        <Link aria-label="Следующий месяц" href={calendarHref(shiftCalendarMonth(month,1),query,level)} className="grid h-10 w-10 place-items-center rounded-lg text-xl text-slate-600 hover:bg-sky-50 hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-sky-600 dark:text-slate-200 dark:hover:bg-purple-900/40">›</Link>
      </nav>
    </div>
    <div className="mt-4 grid grid-cols-7 gap-1 text-center" role="group" aria-label={`Дни: ${monthLabel(month)}`}>
      {weekdays.map(day=><span key={day} className="py-2 text-xs font-semibold text-slate-500 dark:text-slate-400">{day}</span>)}
      {monthGrid(month).map((date,index)=>{
        if(!date)return <span key={`empty-${index}`} aria-hidden="true" className="h-11"/>;
        const count=days[date]?.length || 0;
        const cls=`relative flex h-11 items-center justify-center rounded-lg text-sm font-semibold ${date===today ? 'bg-sky-100 text-sky-900 ring-1 ring-sky-300 dark:bg-purple-900/60 dark:text-white dark:ring-purple-400' : 'text-slate-700 dark:text-slate-200'} ${count ? 'hover:bg-sky-100 focus-visible:outline-2 focus-visible:outline-sky-600 dark:hover:bg-purple-900/60' : ''}`;
        const content=<>{Number(date.slice(-2))}{count > 0 && <span aria-hidden="true" className="absolute bottom-1.5 h-1 w-1 rounded-full bg-sky-600 dark:bg-purple-300"/>}</>;
        return count ? <a key={date} href={`#day-${date}`} aria-label={`${ruDate(date,{day:'numeric',month:'long'})}: событий ${count}`} aria-current={date===today?'date':undefined} className={cls}>{content}</a> : <span key={date} aria-current={date===today?'date':undefined} className={cls}>{content}</span>;
      })}
    </div>
    <p className="mt-4 text-xs text-slate-500 dark:text-slate-400"><span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-600 align-middle dark:bg-purple-300"/> Даты с событиями</p>
  </section>;
}
function OlympiadTable({ matching }) {
  const groups=[{level:'I',label:'I уровень'},{level:'II',label:'II уровень'},{level:'III',label:'III уровень'},{level:null,label:'Другие олимпиады'}]
    .map(group=>({...group,items:matching.filter(item=>item.level===group.level)})).filter(group=>group.items.length);
  return <section aria-labelledby="directory-heading" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-purple-500/20 dark:bg-[#1b1235] sm:p-7">
    <div className="flex flex-wrap items-baseline justify-between gap-2"><h2 id="directory-heading" className="text-xl font-bold text-slate-900 dark:text-white">Все олимпиады</h2><span className="text-sm text-slate-500 dark:text-slate-400">{matching.length} в каталоге</span></div>
    {groups.length ? <div className="mt-5 grid gap-7 md:grid-cols-2 xl:grid-cols-3">{groups.map(group=><table key={group.label} className="w-full self-start border-collapse text-left">
      <caption className="border-b border-slate-200 pb-3 text-left text-sm font-bold text-slate-900 dark:border-purple-500/20 dark:text-white">{group.label}</caption>
      <tbody>{group.items.map(item=><tr key={item.id} className="border-b border-slate-100 last:border-0 hover:bg-sky-50/70 dark:border-purple-500/10 dark:hover:bg-purple-900/20"><td className="py-2.5 pr-2 text-sm leading-snug"><Link href={`/olympiad-calendar/${item.id}`} className="font-medium text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:text-purple-300 dark:decoration-purple-500 dark:hover:text-purple-200">{item.name}</Link></td></tr>)}</tbody>
    </table>)}</div> : <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">По вашему запросу ничего не найдено.</p>}
  </section>;
}
export default async function OlympiadCalendarPage({ searchParams }) {
  const params = await searchParams;
  const today = new Intl.DateTimeFormat('en-CA', {timeZone:'Europe/Moscow',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
  const month = calendarMonth(params?.month, today);
  const query = typeof params?.q === 'string' ? params.q.trim().slice(0,100) : '';
  const level = ['I','II','III'].includes(params?.level) ? params.level : '';
  const matching=calendarOlympiads.filter(o=>(!level || o.level===level) && o.name.toLocaleLowerCase('ru').includes(query.toLocaleLowerCase('ru')));
  const allowed=new Set(matching.map(o=>o.id));
  const filtered=events.filter(e=>allowed.has(e.olympiad));
  const active=activeEvents(filtered,today);
  const points=eventsForMonth(filtered,month);
  const days=Object.groupBy(points,e=>e.date);
  return <main className="min-h-screen bg-[#f5f8fc] px-4 pb-20 pt-10 text-slate-800 dark:bg-[#0f0920] dark:text-slate-100 sm:px-8 sm:pt-14">
    <div className="mx-auto max-w-7xl space-y-6">
      <CalendarClock serverDate={today} expiresAt={filtered.map(e=>e.endInstant).filter(Boolean)} />
      <nav aria-label="Навигация" className="flex flex-wrap gap-2 text-sm font-medium text-slate-500 dark:text-slate-300"><Link href="/" className="hover:text-sky-700">Главная</Link><span>/</span><Link href="/olympiads" className="hover:text-sky-700">Олимпиады</Link><span>/</span><span>Календарь</span></nav>
      <header><span className="text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-purple-300">Математика · сезон 2026/27</span><h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Календарь олимпиад</h1></header>
      <form action="/olympiad-calendar" method="get" className="flex flex-wrap items-end gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-purple-500/20 dark:bg-[#1b1235]">
        <input type="hidden" name="month" value={month} />
        <label className="min-w-[180px] flex-1 text-xs font-semibold text-slate-700 dark:text-slate-200">Название олимпиады<input name="q" defaultValue={query} placeholder="Например, Ломоносов" className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm font-normal text-slate-900 dark:border-purple-500/30 dark:bg-[#100a21] dark:text-white" /></label>
        <label className="text-xs font-semibold text-slate-700 dark:text-slate-200">Уровень<select name="level" defaultValue={level} className="mt-1.5 block rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm font-normal text-slate-900 dark:border-purple-500/30 dark:bg-[#100a21] dark:text-white"><option value="">Все уровни</option><option value="I">I уровень</option><option value="II">II уровень</option><option value="III">III уровень</option></select></label>
        <button className="rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-sky-700 dark:bg-purple-700">Найти</button>
        {(query || level) && <Link href={calendarHref(month,'','')} className="px-2 py-2.5 text-sm font-semibold text-sky-700 dark:text-purple-300">Сбросить</Link>}
      </form>
      <div className="grid items-start gap-5 lg:grid-cols-[minmax(300px,0.85fr)_minmax(0,1.55fr)]">
        <MonthView month={month} today={today} days={days} query={query} level={level}/>
        <section aria-labelledby="active-heading" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-purple-500/20 dark:bg-[#1b1235] sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-2"><h2 id="active-heading" className="text-lg font-bold text-slate-900 dark:text-white">Актуально сейчас</h2><span className="text-sm text-slate-500 dark:text-slate-400">{ruDate(today,{day:'numeric',month:'long'})}</span></div>
          {active.length ? <div className="mt-3 grid gap-x-3 sm:grid-cols-2">{active.map(event=><EventRow key={event.id} event={event} active />)}</div> : <p className="mt-5 text-sm text-slate-600 dark:text-slate-300">Сейчас нет текущих событий по выбранным фильтрам.</p>}
        </section>
      </div>
      <section aria-label={`События за ${monthLabel(month)}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-purple-500/20 dark:bg-[#1b1235] sm:p-7">
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-200 pb-4 dark:border-purple-500/20"><h2 className="text-xl font-bold text-slate-900 dark:text-white">События месяца</h2><span className="text-sm text-slate-500 dark:text-slate-400">{monthLabel(month)}</span></div>
        {points.length ? <div>{Object.entries(days).map(([date,items])=><article key={date} id={`day-${date}`} className="scroll-mt-28 border-b border-slate-100 py-4 last:border-0 dark:border-purple-500/10 sm:flex sm:gap-6">
          <h3 className="mb-2 shrink-0 text-sm font-bold text-slate-900 dark:text-white sm:mb-0 sm:w-36 sm:pt-3"><span className="block">{ruDate(date,{day:'numeric',month:'long'})}</span><span className="mt-1 block font-normal text-slate-500 dark:text-slate-400">{ruDate(date,{weekday:'long'})}</span></h3>
          <div className="min-w-0 flex-1 divide-y divide-slate-100 dark:divide-purple-500/10">{items.map(event=><EventRow key={`${event.id}-${event.boundary}`} event={event}/>)}</div>
        </article>)}</div> : <p className="py-7 text-sm text-slate-600 dark:text-slate-300">В этом месяце нет событий по выбранным фильтрам.</p>}
      </section>
      <OlympiadTable matching={matching}/>
      <p className="text-sm text-slate-500 dark:text-slate-400">Даты могут меняться. Для регистрации и выбора площадки проверяйте объявления организаторов.</p>
    </div>
  </main>;
}

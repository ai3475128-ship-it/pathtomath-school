import Link from 'next/link';
import CalendarClock from './CalendarClock';
import { activeEvents, calendarMonth, calendarOlympiads, events, eventsForMonth, shiftCalendarMonth } from '@/lib/olympiad-calendar';

const title = 'Календарь олимпиад по математике 2026–2027 | АЗИМУТ';
const description = 'Даты математических олимпиад, регистрации и этапы сезона 2026/27, информация и ссылки на организаторов.';
export function generateMetadata() {
  let canonical;
  try { const origin = new URL(process.env.APP_ORIGIN); if (origin.protocol === 'https:') canonical = new URL('/olympiad-calendar', origin).href; } catch {}
  return { title, description, ...(canonical ? { alternates: { canonical } } : {}), openGraph: { title, description, type: 'website', ...(canonical ? { url: canonical } : {}) } };
}
const byId = Object.fromEntries(calendarOlympiads.map((o) => [o.id, o]));
const initials = { hse:'ВП', moscow:'МО', lomonosov:'ЛМ', pvg:'ПВ', fizteh:'ФТ', spbu:'СП', spb:'СП', turgor:'ТГ', siberia:'ВС', innopolis:'ИО', omo:'ОМ', kurchatov:'К', umsh:'ЮМ', rosatom:'РА', verchenko:'В', turlom:'ТЛ', izumrud:'ИЗ', bibn:'БИ', shag:'ШБ', open:'ОО', belchonok:'Б', formula:'ФЕ', vsosh:'ВС' };
function ruDate(date, options) { return new Intl.DateTimeFormat('ru-RU', { ...options, timeZone:'UTC' }).format(new Date(`${date}T12:00:00Z`)); }
function monthLabel(month) { const s=ruDate(`${month}-01`,{month:'long',year:'numeric'}).replace(/\s*г\.$/,''); return s.charAt(0).toLocaleUpperCase('ru')+s.slice(1); }
function calendarHref(month, q, level) { const params=new URLSearchParams({month}); if(q)params.set('q',q); if(level)params.set('level',level); return `/olympiad-calendar?${params}`; }
function eventLabel(e) { return `${e.boundary === 'start' ? 'Начало · ' : e.boundary === 'end' ? 'Окончание · ' : e.boundary === 'continues' ? 'Продолжается · ' : ''}${e.stage}${e.tentative ? ' · предварительно' : ''}`; }
function EventIcon({ olympiad }) { return <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xs font-black text-blue-700 transition-colors group-hover:bg-white/20 group-hover:text-white dark:bg-purple-950 dark:text-purple-200" aria-hidden="true">{initials[olympiad.id] || '∑'}</span>; }
function EventLink({ event, active = false }) {
  const olympiad=byId[event.olympiad]; if(!olympiad)return null;
  return <Link href={`/olympiad-calendar/${olympiad.id}`} className={`group flex min-w-0 items-start gap-3 rounded-2xl border p-3.5 transition-colors hover:border-blue-600 hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:hover:border-purple-600 dark:hover:bg-purple-600 ${active ? 'border-white/70 bg-white' : 'border-blue-100 bg-white dark:border-purple-500/20 dark:bg-[#1b1235]'}`}>
    <EventIcon olympiad={olympiad} />
    <span className="min-w-0 flex-1"><span className={`block break-words text-sm font-extrabold leading-snug group-hover:text-white ${active ? 'text-slate-900' : 'text-slate-900 dark:text-slate-100'}`}>{olympiad.name}</span>
      <span className={`mt-1 block break-words text-sm font-semibold leading-snug group-hover:text-white ${active ? 'text-blue-700' : 'text-blue-700 dark:text-purple-200'}`}>{active ? `${event.stage} · до ${event.activeUntil || ruDate(event.end,{day:'numeric',month:'long'})}${event.tentative ? ' · предварительно' : ''}` : eventLabel(event)}</span>
    </span>
    {olympiad.level && <span className={`shrink-0 whitespace-nowrap rounded-full px-2 py-1 text-[10px] font-bold group-hover:bg-white/20 group-hover:text-white ${active ? 'bg-slate-100 text-slate-700' : 'bg-slate-100 text-slate-600 dark:bg-purple-950 dark:text-purple-200'}`}>{olympiad.level} ур.</span>}
  </Link>;
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
  return <main className="min-h-screen bg-[#f0f5ff] px-4 pb-20 pt-10 text-slate-800 dark:bg-[#0f0920] dark:text-slate-100 sm:px-8 sm:pt-14">
    <div className="mx-auto max-w-[1600px] space-y-7">
      <CalendarClock serverDate={today} expiresAt={filtered.map(e=>e.endInstant).filter(Boolean)} />
      <nav aria-label="Навигация" className="flex flex-wrap gap-2 text-sm font-medium text-slate-600 dark:text-slate-300"><Link href="/" className="hover:text-blue-700">Главная</Link><span>/</span><Link href="/olympiads" className="hover:text-blue-700">Олимпиады</Link><span>/</span><span>Календарь</span></nav>
      <header className="flex flex-wrap items-end justify-between gap-5">
        <div><span className="text-xs font-black uppercase tracking-[.16em] text-blue-700 dark:text-purple-300">Математика · сезон 2026/27</span><h1 className="mt-2 text-3xl font-black tracking-tight text-[#162550] dark:text-white sm:text-5xl">Календарь олимпиад</h1></div>
        <nav aria-label="Выбор месяца" className="flex items-center gap-2 rounded-2xl border border-blue-100 bg-white p-2 shadow-sm dark:border-purple-500/20 dark:bg-[#1b1235]">
          <Link aria-label="Предыдущий месяц" href={calendarHref(shiftCalendarMonth(month,-1),query,level)} className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-xl font-bold text-blue-700 hover:bg-blue-100 dark:bg-purple-950 dark:text-purple-200">‹</Link>
          <span aria-live="polite" className="min-w-[150px] rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-extrabold text-white dark:bg-purple-700 sm:min-w-[180px]">{monthLabel(month)}</span>
          <Link aria-label="Следующий месяц" href={calendarHref(shiftCalendarMonth(month,1),query,level)} className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-xl font-bold text-blue-700 hover:bg-blue-100 dark:bg-purple-950 dark:text-purple-200">›</Link>
        </nav>
      </header>
      <form action="/olympiad-calendar" method="get" className="flex flex-wrap items-end gap-3 rounded-2xl border border-blue-100 bg-white p-4 dark:border-purple-500/20 dark:bg-[#1b1235]">
        <input type="hidden" name="month" value={month} />
        <label className="min-w-[180px] flex-1 text-xs font-bold text-slate-700 dark:text-slate-200">Найти олимпиаду<input name="q" defaultValue={query} placeholder="Название олимпиады" className="mt-1.5 block w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm font-normal text-slate-900 dark:border-purple-500/30 dark:bg-[#100a21] dark:text-white" /></label>
        <label className="text-xs font-bold text-slate-700 dark:text-slate-200">Уровень<select name="level" defaultValue={level} className="mt-1.5 block rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm font-normal text-slate-900 dark:border-purple-500/30 dark:bg-[#100a21] dark:text-white"><option value="">Все уровни</option><option value="I">I уровень</option><option value="II">II уровень</option><option value="III">III уровень</option></select></label>
        <button className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-700 dark:bg-purple-700">Найти</button>
        {(query || level) && <Link href={calendarHref(month,'','')} className="px-2 py-2.5 text-sm font-bold text-blue-700 dark:text-purple-300">Сбросить</Link>}
      </form>
      <section aria-labelledby="active-heading" className="rounded-[28px] bg-gradient-to-br from-blue-500 to-blue-700 p-5 text-white shadow-lg shadow-blue-900/10 dark:from-purple-700 dark:to-purple-900 sm:p-7">
        <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2"><div><h2 id="active-heading" className="text-2xl font-black">Актуально сейчас</h2><p className="mt-1 text-sm text-blue-50">Текущие этапы и регистрация · {ruDate(today,{day:'numeric',month:'long',year:'numeric'})}</p></div><span className="text-sm font-bold text-blue-50">Математика</span></div>
        {active.length ? <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">{active.map(e=><EventLink key={e.id} event={e} active />)}</div> : <p className="rounded-2xl bg-white/10 p-4 text-sm">На сегодня нет текущих событий по выбранным фильтрам.</p>}
      </section>
      <section aria-label={`События за ${monthLabel(month)}`}>
        <div className="mb-4 flex flex-wrap items-end justify-between gap-2"><div><h2 className="text-2xl font-black text-[#162550] dark:text-white">События месяца</h2><p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Нажмите на событие, чтобы узнать об олимпиаде подробнее.</p></div><span className="text-sm font-bold text-slate-600 dark:text-slate-300">{monthLabel(month)}</span></div>
        {points.length ? <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">{Object.entries(days).map(([date,items])=><article key={date} className={`min-w-0 rounded-[24px] border bg-white p-5 shadow-sm dark:bg-[#1b1235] ${date===today?'border-blue-500 dark:border-purple-400':'border-blue-100 dark:border-purple-500/20'}`}>
          <h3 className="mb-3 flex flex-wrap items-baseline gap-2"><span className="text-xl font-black text-[#162550] dark:text-white">{ruDate(date,{day:'numeric',month:'long'})}</span><span className="text-sm font-semibold text-slate-600 dark:text-slate-300">{ruDate(date,{weekday:'long'})}</span>{date===today && <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-bold text-blue-800">Сегодня</span>}</h3>
          <div className="space-y-2">{items.map(e=><EventLink key={`${e.id}-${e.boundary}`} event={e}/>)}</div>
        </article>)}</div> : <div className="rounded-2xl border border-blue-100 bg-white p-7 text-slate-600 dark:border-purple-500/20 dark:bg-[#1b1235] dark:text-slate-300">В этом месяце нет опубликованных событий по выбранным фильтрам. Попробуйте другой месяц или откройте каталог олимпиад ниже.</div>}
      </section>
      <details className="group rounded-[24px] border border-blue-100 bg-white p-5 dark:border-purple-500/20 dark:bg-[#1b1235]">
        <summary className="cursor-pointer text-lg font-black text-[#162550] dark:text-white">Все олимпиады · {matching.length}</summary>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">В каталоге есть и олимпиады, у которых пока не опубликованы точные даты.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{matching.map(o=><Link key={o.id} href={`/olympiad-calendar/${o.id}`} className="group flex items-center gap-3 rounded-2xl border border-blue-100 p-4 hover:border-blue-600 hover:bg-blue-600 dark:border-purple-500/20 dark:hover:border-purple-600 dark:hover:bg-purple-600"><EventIcon olympiad={o}/><span className="min-w-0"><span className="block break-words text-sm font-bold text-slate-900 group-hover:text-white dark:text-white">{o.name}</span><span className="mt-1 block text-xs font-semibold text-slate-600 group-hover:text-white dark:text-slate-300">{o.level ? `${o.level} уровень` : 'Всероссийская олимпиада'}</span></span></Link>)}</div>
        {!matching.length && <p className="mt-4 text-sm">По вашему запросу ничего не найдено.</p>}
      </details>
      <p className="text-sm text-slate-600 dark:text-slate-300">Даты могут меняться. Для регистрации и выбора площадки проверяйте объявления организаторов.</p>
    </div>
  </main>;
}

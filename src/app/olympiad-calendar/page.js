import Link from 'next/link';
import { checkedOn, events, olympiads, registryUrl } from '@/lib/olympiad-calendar';

const title = 'Календарь олимпиад по математике 2026–2027 | АЗИМУТ';
const description = 'Календарь перечневых олимпиад по математике 2026–2027: даты этапов, уровни и ссылки на сайты организаторов для регистрации.';

export function generateMetadata() {
  let canonical;
  try {
    const origin = new URL(process.env.APP_ORIGIN);
    if (origin.protocol === 'https:') canonical = new URL('/olympiad-calendar', origin).href;
  } catch { /* Public origin is optional in local development. */ }
  return { title, description, ...(canonical ? { alternates: { canonical } } : {}), openGraph: { title, description, type: 'website', ...(canonical ? { url: canonical } : {}) } };
}

export default async function OlympiadCalendarPage({ searchParams }) {
  const params = await searchParams;
  const query = typeof params?.q === 'string' ? params.q.trim().slice(0, 100) : '';
  const level = ['I', 'II', 'III'].includes(params?.level) ? params.level : '';
  const matching = olympiads.filter((item) => (!level || item.level === level) && item.name.toLocaleLowerCase('ru').includes(query.toLocaleLowerCase('ru')));
  const matchingIds = new Set(matching.map((item) => item.id));
  const visibleEvents = events.filter((event) => matchingIds.has(event.olympiad)).sort((a, b) => a.start.localeCompare(b.start));
  const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Moscow', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
  const upcoming = visibleEvents.filter((event) => event.end >= today);
  const past = visibleEvents.filter((event) => event.end < today);

  function EventCard({ event }) {
    const olympiad = olympiads.find((item) => item.id === event.olympiad);
    return <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-purple-500/20 dark:bg-[#140e24]">
      <div className="flex flex-wrap items-center justify-between gap-2"><span className="font-black text-sky-700 dark:text-purple-300">{event.dateText}</span><span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-700 dark:bg-purple-950/50 dark:text-purple-300">{olympiad.level} уровень</span></div>
      <h3 className="mt-3 text-xl font-extrabold text-slate-900 dark:text-white">{olympiad.name}</h3><p className="mt-1 font-semibold text-slate-700 dark:text-slate-200">{event.stage}</p>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{event.format}</p><p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{event.detail}</p>
      <div className="mt-4 flex flex-wrap gap-4 text-sm font-bold"><a href={olympiad.registerUrl || olympiad.url} target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-4 dark:text-purple-300">{olympiad.registerUrl ? "Регистрация ↗" : "Сайт олимпиады ↗"}</a><a href={event.source} target="_blank" rel="noopener noreferrer" className="text-slate-600 underline underline-offset-4 dark:text-slate-300">Источник даты ↗</a></div>
    </article>;
  }

  return <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-800 dark:bg-[#080412] dark:text-slate-100 sm:px-8">
    <div className="mx-auto max-w-6xl space-y-10">
      <header><Link href="/" className="text-sm font-bold text-sky-700 hover:underline dark:text-purple-300">← На главную</Link><p className="mt-8 text-xs font-black uppercase tracking-widest text-sky-700 dark:text-purple-300">Математика · сезон 2026/27</p><h1 className="mt-3 max-w-4xl text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">Календарь олимпиад по математике</h1><p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300">Перечневые олимпиады, сроки этапов и ссылки на организаторов. Выберите олимпиаду и проверьте условия участия и регистрацию на её официальном сайте.</p><p className="mt-4 text-sm font-semibold text-slate-600 dark:text-slate-300">Данные проверены: {checkedOn}. Расписание может измениться.</p></header>
      <form className="flex flex-wrap items-end gap-3 rounded-2xl border border-sky-100 bg-white p-5 dark:border-purple-500/20 dark:bg-[#140e24]" action="/olympiad-calendar" method="get">
        <label className="min-w-[200px] flex-1 text-sm font-bold">Поиск олимпиады<input name="q" defaultValue={query} placeholder="Например, Ломоносов" className="mt-2 block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal dark:border-purple-500/30 dark:bg-[#080412]" /></label>
        <label className="text-sm font-bold">Уровень<select name="level" defaultValue={level} className="mt-2 block rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal dark:border-purple-500/30 dark:bg-[#080412]"><option value="">Все уровни</option><option value="I">I уровень</option><option value="II">II уровень</option><option value="III">III уровень</option></select></label>
        <button className="rounded-xl bg-sky-600 px-5 py-3 text-sm font-bold text-white hover:bg-sky-700 dark:bg-purple-600">Найти</button><Link href="/olympiad-calendar" className="px-2 py-3 text-sm font-bold text-sky-700 dark:text-purple-300">Сбросить</Link>
      </form>
      <section aria-labelledby="dates"><h2 id="dates" className="text-2xl font-black dark:text-white">Ближайшие даты</h2><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Здесь только даты, которые мы внесли после проверки. Список этапов пока неполный.</p>{upcoming.length ? <div className="mt-5 grid gap-4 md:grid-cols-2">{upcoming.map((event) => <EventCard key={event.id} event={event} />)}</div> : <p className="mt-4 rounded-2xl bg-white p-5 text-slate-600 dark:bg-[#140e24] dark:text-slate-300">Подходящих предстоящих дат пока нет. Проверьте сайты олимпиад ниже.</p>}
        {past.length > 0 && <details className="mt-5 rounded-2xl border border-slate-200 p-5 dark:border-purple-500/20"><summary className="cursor-pointer font-bold">Прошедшие даты ({past.length})</summary><div className="mt-4 grid gap-4 md:grid-cols-2">{past.map((event) => <EventCard key={event.id} event={event} />)}</div></details>}
      </section>
      <section aria-labelledby="list"><h2 id="list" className="text-2xl font-black dark:text-white">Перечневые олимпиады по математике</h2><p className="mt-2 max-w-4xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">Уровни указаны для профиля «математика» на 2026/27 учебный год. Ссылки ведут на сайты олимпиад: регистрация может быть открыта не круглый год. Сверяйте данные с <a href={registryUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-sky-700 underline dark:text-purple-300">РСОШ ↗</a>.</p>
        <div className="mt-5 grid gap-3 md:grid-cols-2">{matching.map((item) => <article key={item.id} className="flex flex-col justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-5 dark:border-purple-500/20 dark:bg-[#140e24]"><div><span className="text-xs font-black uppercase tracking-wide text-sky-700 dark:text-purple-300">{item.level} уровень</span><h3 className="mt-1 font-extrabold text-slate-900 dark:text-white">{item.name}</h3>{!events.some((event) => event.olympiad === item.id) && <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Даты пока не добавлены — уточняйте у организатора.</p>}</div><div className="flex flex-wrap gap-4"><a href={item.url} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-sky-700 underline underline-offset-4 dark:text-purple-300">Сайт олимпиады ↗</a>{item.registerUrl && <a href={item.registerUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-sky-700 underline underline-offset-4 dark:text-purple-300">Регистрация ↗</a>}</div></article>)}</div>
        {matching.length === 0 && <p className="mt-4 text-slate-600 dark:text-slate-300">По вашему запросу ничего не найдено. Измените фильтры.</p>}
      </section>
    </div>
  </main>;
}

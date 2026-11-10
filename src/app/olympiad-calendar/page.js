import Link from 'next/link';
import CalendarClock from './CalendarClock';
import { checkedOn, events, olympiads, orderOlympiadsByDates } from '@/lib/olympiad-calendar';

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
  const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Moscow', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
  const ordered = orderOlympiadsByDates(matching, events, today);

  const cardClass = 'group block h-full rounded-[24px] border border-blue-100/60 bg-white/80 p-6 shadow-sm transition-all duration-300 hover:border-sky-500 hover:bg-sky-500 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600 dark:border-purple-500/20 dark:bg-purple-950/10 dark:hover:border-[#634EE4] dark:hover:bg-[#634EE4] dark:focus-visible:outline-purple-400';
  const secondaryText = 'text-slate-600 group-hover:text-white dark:text-slate-300 dark:group-hover:text-white';

  return <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-800 dark:bg-[#080412] dark:text-slate-100 sm:px-8">
    <div className="mx-auto w-full max-w-[1800px] space-y-10">
      <CalendarClock serverDate={today} />
      <header><Link href="/" className="text-sm font-bold text-sky-700 hover:underline dark:text-purple-300">← На главную</Link><p className="mt-8 text-xs font-black uppercase tracking-widest text-sky-700 dark:text-purple-300">Математика · сезон 2026/27</p><h1 className="mt-3 max-w-4xl text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">Календарь олимпиад по математике</h1><p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300">Перечневые олимпиады, сроки этапов и ссылки на организаторов. Выберите олимпиаду и проверьте условия участия и регистрацию на её официальном сайте.</p><p className="mt-4 text-sm font-semibold text-slate-600 dark:text-slate-300">Данные проверены: {checkedOn}. Расписание может измениться.</p></header>
      <form className="flex flex-wrap items-end gap-3 rounded-2xl border border-sky-100 bg-white p-5 dark:border-purple-500/20 dark:bg-[#140e24]" action="/olympiad-calendar" method="get">
        <label className="min-w-[200px] flex-1 text-sm font-bold">Поиск олимпиады<input name="q" defaultValue={query} placeholder="Например, Ломоносов" className="mt-2 block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal dark:border-purple-500/30 dark:bg-[#080412]" /></label>
        <label className="text-sm font-bold">Уровень<select name="level" defaultValue={level} className="mt-2 block rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal dark:border-purple-500/30 dark:bg-[#080412]"><option value="">Все уровни</option><option value="I">I уровень</option><option value="II">II уровень</option><option value="III">III уровень</option></select></label>
        <button className="rounded-xl bg-sky-600 px-5 py-3 text-sm font-bold text-white hover:bg-sky-700 dark:bg-purple-600">Найти</button><Link href="/olympiad-calendar" className="px-2 py-3 text-sm font-bold text-sky-700 dark:text-purple-300">Сбросить</Link>
      </form>
      <section aria-label="Олимпиады">
        <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {ordered.map((item) => <article key={item.id} className="min-w-0">
            <a href={item.registerUrl || item.url} target="_blank" rel="noopener noreferrer" className={cardClass}>
              <h2 className="break-words text-lg font-black leading-snug text-slate-900 group-hover:text-white dark:text-white">{item.name}</h2>
              <span className="mt-2 block text-xs font-black uppercase tracking-wide text-sky-700 group-hover:text-white dark:text-purple-300 dark:group-hover:text-white">{item.level} уровень</span>
              <dl className={`mt-5 space-y-3 text-sm leading-relaxed ${secondaryText}`}>
                {[
                  ['registration', 'Регистрация'],
                  ['qualifying', 'Отборочный этап'],
                  ['final', 'Заключительный этап'],
                ].map(([kind, label]) => {
                  const dates = item.dates.filter((event) => event.kinds.includes(kind)).sort((a, b) => a.start.localeCompare(b.start));
                  return <div key={kind}>
                    <dt className="font-bold text-slate-700 group-hover:text-white dark:text-slate-200 dark:group-hover:text-white">{label}</dt>
                    <dd>{dates.length ? dates.map((event) => <span key={event.id} className="block">{event.dateText}</span>) : 'Нет данных'}</dd>
                  </div>;
                })}
              </dl>
              <span className="sr-only">Откроется в новой вкладке</span>
            </a>
          </article>)}
        </div>
        {ordered.length === 0 && <p className="mt-4 text-slate-600 dark:text-slate-300">По вашему запросу ничего не найдено. Измените фильтры.</p>}
      </section>
    </div>
  </main>;
}

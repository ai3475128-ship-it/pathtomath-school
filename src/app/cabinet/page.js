import Link from 'next/link';
import { requireUser } from '@/lib/auth';
import { connectDB } from '@/lib/db';
import CabinetShell, { getCourses } from './CabinetShell';

const COURSE_LINKS = {
  'ege-math': { bank: '/math-profile/ege/main', videos: '/videos', overview: '/math-profile/ege', label: 'ЕГЭ · Математика' },
  physics: { bank: '/math-profile/physics/main', videos: '/videos/physics', overview: '/math-profile/physics', label: 'ЕГЭ · Физика' },
  'olympiad-math': { bank: '/math-profile/olympiads/main', videos: '/videos/olympiads', overview: '/olympiads', label: 'Олимпиадная математика' },
};
const panel = 'rounded-3xl border border-sky-100 bg-white p-6 shadow-sm dark:border-purple-500/20 dark:bg-[#140e24]';
const linkCard = 'group rounded-2xl border border-sky-100 bg-white p-5 transition hover:border-sky-500 hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:border-purple-500/20 dark:bg-[#140e24] dark:hover:bg-[#634ee4]';

function Feature({ href, eyebrow, title, children }) {
  return <Link href={href} className={linkCard}>
    <span className="text-xs font-bold uppercase tracking-wide text-sky-600 group-hover:text-white/80 dark:text-purple-300">{eyebrow}</span>
    <h3 className="mt-2 text-lg font-bold text-slate-900 group-hover:text-white dark:text-white">{title}</h3>
    {children && <p className="mt-2 text-sm leading-relaxed text-slate-500 group-hover:text-white/90 dark:text-slate-300">{children}</p>}
  </Link>;
}

export default async function CabinetPage({ searchParams }) {
  const user = await requireUser();
  const params = await searchParams;
  const staff = user.role === 'TEACHER' || user.role === 'ADMIN';
  const paid = user.role === 'PREMIUM_STUDENT';
  const { choices, chosen } = getCourses(user, params?.course);
  const links = chosen ? COURSE_LINKS[chosen.id] : null;
  const db = await connectDB();
  let solved = 0, homework = 0, pending = 0, students = 0, upcoming = [];
  if (chosen && (staff || paid)) {
    const today = new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Moscow' }).format(new Date());
    upcoming = await db.all(staff
      ? "SELECT title,time,dateText,type,courseId FROM Schedule WHERE (courseId=? OR courseId='legacy') AND dateText>=? ORDER BY dateText,time LIMIT 3"
      : "SELECT title,time,dateText,type,courseId FROM Schedule WHERE courseId=? AND dateText>=? ORDER BY dateText,time LIMIT 3", [chosen.id, today]);
  }
  if (!staff) {
    if (chosen?.id === 'ege-math') solved = (await db.get("SELECT COUNT(*) AS n FROM TaskProgress WHERE userId=? AND module NOT LIKE 'olympiad-%' AND module NOT LIKE '%-intro'", [user.id])).n;
    if (chosen?.id === 'olympiad-math') solved = (await db.get("SELECT COUNT(*) AS n FROM TaskProgress WHERE userId=? AND module LIKE 'olympiad-%'", [user.id])).n;
    homework = chosen ? (await db.get("SELECT COUNT(*) AS n FROM Homework WHERE userId=? AND (courseId=? OR courseId='legacy') AND status<>'Проверено'", [user.id, chosen.id])).n : 0;
  } else if (chosen) {
    students = (await db.get("SELECT COUNT(*) AS n FROM StudentCourse sc JOIN User u ON u.id=sc.userId WHERE sc.courseId=? AND u.role='PREMIUM_STUDENT' AND u.isBlocked=0", [chosen.id])).n;
    pending = (await db.get("SELECT COUNT(*) AS n FROM Homework h WHERE (h.courseId=? OR h.courseId='legacy') AND h.status='На проверке' AND EXISTS (SELECT 1 FROM StudentCourse sc WHERE sc.userId=h.userId AND sc.courseId=?)", [chosen.id, chosen.id])).n;
  }
  return <CabinetShell user={user} active="home" course={chosen?.id}>
        <header className={`${panel} flex flex-wrap items-center justify-between gap-4`}>
          <div><p className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-purple-300">Личный кабинет</p><h1 className="mt-2 text-2xl font-black text-slate-900 dark:text-white sm:text-3xl">Здравствуйте, {user.name || 'участник'}!</h1></div>
          <div className="rounded-2xl bg-sky-50 px-4 py-3 text-sm font-bold text-sky-700 dark:bg-purple-950/40 dark:text-purple-300">{user.role === 'ADMIN' ? 'Руководитель' : staff ? 'Преподаватель' : paid ? 'Ученик курса' : 'Ученик'}</div>
        </header>
        <section className={panel}>
          <div className="flex flex-wrap items-center justify-between gap-3"><h2 className="text-xl font-bold">{staff ? 'Мои направления' : paid ? 'Мои курсы' : 'Направления подготовки'}</h2>{!staff && !paid && <span className="text-xs font-semibold text-slate-500">Бесплатные материалы</span>}</div>
          {choices.length ? <nav aria-label="Выбор направления" className="mt-4 flex flex-wrap gap-2">{choices.map((course) => <Link key={course.id} href={`/cabinet?course=${course.id}`} aria-current={course.id === chosen?.id ? 'page' : undefined} className={`rounded-xl border px-4 py-2.5 text-sm font-bold transition ${course.id === chosen?.id ? 'border-sky-600 bg-sky-600 text-white' : 'border-sky-100 text-slate-700 hover:border-sky-400 dark:border-purple-500/30 dark:text-slate-200'}`}>{course.title}</Link>)}</nav> : <p className="mt-4 text-sm text-slate-500">Направление пока не назначено. Обратитесь к руководителю.</p>}
        </section>
        {links && <>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <Feature href={links.videos} eyebrow="Медиатека" title="Видеоуроки">Материалы по направлению «{chosen.title}».</Feature>
            <Feature href={links.bank} eyebrow="Практика" title="Задачи">Перейти к заданиям по выбранному направлению.</Feature>
            {staff ? <Feature href={`/cabinet/course-students?course=${chosen.id}`} eyebrow="Преподавание" title="Ученики направления">{students} учеников с доступом к курсу.</Feature> : chosen.id === 'physics' ? <Feature href={links.overview} eyebrow="Подготовка" title="Раздел курса">Материалы и задания по физике.</Feature> : <Feature href={`/cabinet/progress?course=${chosen.id}`} eyebrow="Практика" title="Решённые задачи">{solved} задач в выбранном направлении.</Feature>}
          </div>
          {(staff || paid) && <section className={panel}>
            <div className="flex items-center gap-3"><span className="rounded-xl bg-sky-50 p-2 text-sky-600 dark:bg-purple-950/40 dark:text-purple-300"><span aria-hidden="true">▦</span></span><h2 className="text-lg font-bold">Предстоящие занятия</h2></div>
            {upcoming.length ? <ul className="mt-4 divide-y divide-slate-100 dark:divide-purple-500/10">{upcoming.map((event, index) => <li key={`${event.dateText}-${event.time}-${index}`} className="flex flex-wrap items-center justify-between gap-2 py-3 text-sm"><span className="font-semibold">{event.title} {event.courseId === 'legacy' && <span className="font-normal text-slate-500">· общее</span>}</span><span className="font-medium text-slate-500 dark:text-slate-300">{event.dateText.split('-').reverse().join('.')} · {event.time}</span></li>)}</ul> : <p className="mt-4 text-sm text-slate-500 dark:text-slate-300">Запланированных занятий пока нет.</p>}
          </section>}
          <div className="grid gap-5 xl:grid-cols-2">
            <section className={panel}><h2 className="text-lg font-bold">{staff ? 'Преподавание' : 'Учёба'}</h2>
              {staff ? <><p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Учеников на направлении: <strong>{students}</strong>.</p><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Работ на проверке: <strong>{pending}</strong>.</p><Link href={`/cabinet/course-students?course=${chosen.id}`} className="mt-5 inline-flex rounded-xl bg-sky-600 px-4 py-2 text-sm font-bold text-white hover:bg-sky-700">Открыть инструменты</Link></> : paid ? <><p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Заданий без отметки «проверено»: <strong>{homework}</strong>.</p><Link href={`/cabinet/history?course=${chosen.id}`} className="mt-5 inline-flex rounded-xl bg-sky-600 px-4 py-2 text-sm font-bold text-white hover:bg-sky-700">Открыть домашние задания</Link></> : <><p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Выбирайте задачи и отслеживайте свой прогресс.</p><Link href={links.bank} className="mt-5 inline-flex rounded-xl bg-sky-600 px-4 py-2 text-sm font-bold text-white hover:bg-sky-700">Перейти к задачам</Link></>}
            </section>
            <section className={panel}><h2 className="text-lg font-bold">Полезное</h2><div className="mt-4 flex flex-col gap-3 text-sm font-bold text-sky-700 dark:text-purple-300"><Link href="/olympiad-calendar" className="hover:underline">Олимпиадный календарь →</Link>{staff ? <Link href={`/cabinet/schedule?course=${chosen.id}`} className="hover:underline">Общее расписание →</Link> : <Link href="/cabinet/plans" className="hover:underline">План подготовки и заметки →</Link>}{user.role === 'ADMIN' && <Link href="/cabinet/access" className="hover:underline">Управление учениками и курсами →</Link>}</div></section>
          </div>
        </>}
  </CabinetShell>;
}

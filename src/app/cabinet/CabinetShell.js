import Link from 'next/link';
import { SUBJECTS } from '@/lib/learning-catalog';
function Icon({ name }) {
  const shapes = {
    home: <><path d="M3 10.5 12 3l9 7.5V21h-6v-7H9v7H3z" /></>,
    course: <><path d="m3 7 9-4 9 4-9 4z M3 12l9 4 9-4 M3 17l9 4 9-4" /></>,
    video: <><rect x="3" y="4" width="18" height="16" rx="3" /><path d="m10 8 6 4-6 4z" /></>,
    book: <><path d="M3 5c4-2 7-1 9 1v14c-2-2-5-3-9-1z M21 5c-4-2-7-1-9 1v14c2-2 5-3 9-1z" /></>,
    check: <><rect x="4" y="4" width="16" height="16" rx="3" /><path d="m8 12 3 3 5-6" /></>,
    chart: <><path d="M4 20V9h4v11 M10 20V4h4v16 M16 20v-7h4v7" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M7 3v4 M17 3v4 M3 10h18 M7 14h3 M14 14h3" /></>,
    note: <><path d="M5 3h11l3 3v15H5z M9 11h7 M9 15h7" /></>,
    users: <><circle cx="9" cy="8" r="3" /><path d="M3 20v-2a6 6 0 0 1 12 0v2z M16 5a3 3 0 0 1 0 6 M17 14a5 5 0 0 1 4 5v1" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3 M12 19v3 M2 12h3 M19 12h3 M5 5l2 2 M17 17l2 2 M19 5l-2 2 M7 17l-2 2" /></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0">{shapes[name]}</svg>;
}
function NavLink({ href, icon, children, active }) {
  return <Link href={href} aria-current={active ? 'page' : undefined} className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${active ? 'bg-white/20 text-white' : 'text-blue-100 hover:bg-white/10 hover:text-white'}`}>
    <Icon name={icon} /><span>{children}</span>
  </Link>;
}

export function getCourses(user, selected) {
  const staff = ['TEACHER', 'ADMIN'].includes(user.role);
  const choices = user.role === 'ADMIN' || user.role === 'STUDENT' ? SUBJECTS : SUBJECTS.filter((course) => (staff ? user.subjects : user.courses).includes(course.id));
  return { choices, chosen: choices.find((course) => course.id === selected) || choices[0] };
}
export default function CabinetShell({ user, active, course, children }) {
  const staff = ['TEACHER', 'ADMIN'].includes(user.role);
  const suffix = course ? `?course=${encodeURIComponent(course)}` : '';
  const items = staff ? [
    ['course-students', 'Ученики курса', 'users'], ['materials', 'Публикация материалов', 'video'],
    ['review', 'Проверка работ', 'check'], ['analytics', 'Аналитика обучения', 'chart'],
    ['schedule', 'Управление занятиями', 'calendar'],
    ...(user.role === 'ADMIN' ? [['students', 'Ученики школы', 'users'], ['staff', 'Команда преподавателей', 'users'], ['access', 'Курсы и доступ', 'course'], ['reports', 'Обращения об ошибках', 'note']] : []),
  ] : [['progress', 'Мой прогресс', 'chart'], ['plans', 'Календарь планов', 'calendar'], ['goals', 'Мои цели', 'check'], ['history', 'История работ', 'note']];
  return <main className="min-h-screen bg-[#f2f7fc] px-4 py-6 text-slate-800 dark:bg-[#080512] dark:text-slate-100 sm:px-6"><div className="mx-auto flex max-w-[1500px] flex-col gap-5 lg:flex-row"><aside className="shrink-0 rounded-3xl bg-[#103d78] p-4 shadow-lg lg:min-h-[680px] lg:w-64"><div className="px-4 pb-5 pt-2"><div className="text-xl font-black tracking-wide text-white">АЗИМУТ</div><p className="mt-1 text-xs font-semibold text-blue-200">{user.role === 'ADMIN' ? 'Руководитель и преподаватель' : staff ? 'Кабинет преподавателя' : 'Кабинет ученика'}</p></div><nav aria-label="Личный кабинет" className="flex flex-wrap gap-1 lg:flex-col"><NavLink href={`/cabinet${suffix}`} icon="home" active={active === 'home'}>Обзор</NavLink>{items.map(([id, label, icon]) => <NavLink key={id} href={`/cabinet/${id}${suffix}`} icon={icon} active={active === id}>{label}</NavLink>)}<NavLink href={`/cabinet/settings${suffix}`} icon="settings" active={active === 'settings'}>Настройки профиля</NavLink></nav></aside><div className="min-w-0 flex-1 space-y-5">{children}</div></div></main>;
}

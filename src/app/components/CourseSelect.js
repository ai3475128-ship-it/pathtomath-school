import { SUBJECTS } from '@/lib/learning-catalog';

export default function CourseSelect({ user, selected }) {
  const available = user.role === 'ADMIN' ? SUBJECTS : SUBJECTS.filter((item) => user.subjects.includes(item.id));
  if (!available.length) return <p className="text-sm text-rose-600">Руководитель ещё не назначил вам направление.</p>;
  return <label className="block text-xs font-bold text-slate-600 dark:text-slate-300">Направление курса
    <select name="courseId" required defaultValue={available.some((course) => course.id === selected) ? selected : available[0].id} className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-800 dark:border-purple-500/20 dark:bg-[#0c0714] dark:text-white">
      {available.map((course) => <option key={course.id} value={course.id}>{course.title}</option>)}
    </select>
  </label>;
}

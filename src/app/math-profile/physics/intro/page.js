import { SectionFrame } from '../../../components/SectionHub';

export default function PhysicsIntroPage() {
  return <SectionFrame title="Подготовительные задачи по физике" breadcrumb={{ href: '/math-profile/physics', label: 'ЕГЭ Физика' }}>
    <p className="rounded-3xl border border-blue-100/60 bg-white/80 p-8 text-slate-600 dark:border-purple-500/20 dark:bg-purple-950/20 dark:text-slate-300">Задачи по физике пока не добавлены.</p>
  </SectionFrame>;
}

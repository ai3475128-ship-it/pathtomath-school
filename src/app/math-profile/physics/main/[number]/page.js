import { notFound } from 'next/navigation';
import { SectionFrame } from '@/app/components/SectionHub';
import { PHYSICS_SECTIONS } from '@/lib/learning-catalog';

export default async function PhysicsTaskPage({ params }) {
  const { number } = await params;
  const section = PHYSICS_SECTIONS.find((item) => String(item.number) === number);
  if (!section) notFound();
  return <SectionFrame title={`№${section.number} ${section.title}`} breadcrumb={{ href: '/math-profile/physics/main', label: 'Банк заданий по физике' }}>
    <p className="rounded-3xl border border-blue-100 bg-white/90 p-8 dark:border-purple-500/20 dark:bg-purple-950/20">Задачи по этой теме пока не добавлены.</p>
  </SectionFrame>;
}

import { requireUser } from '@/lib/auth';
import { PHYSICS_SECTIONS } from '@/lib/learning-catalog';
import { SectionFrame } from '@/app/components/SectionHub';
import CatalogGrid from '@/app/components/CatalogGrid';

export default async function PhysicsVideosPage() {
  await requireUser();
  return <SectionFrame title="Видеоуроки: физика ЕГЭ" breadcrumb={{ href: '/videos', label: 'Видеоуроки' }} wide>
    <CatalogGrid preview="physics" items={PHYSICS_SECTIONS.map((section) => ({ ...section, href: `/videos/physics/${section.number}` }))} />
  </SectionFrame>;
}

import { SectionFrame } from '../../../components/SectionHub';
import CatalogGrid from '../../../components/CatalogGrid';
import { PHYSICS_SECTIONS } from '@/lib/learning-catalog';

export default function PhysicsBankPage() {
  return <SectionFrame title="Банк заданий по физике" breadcrumb={{ href: '/math-profile/physics', label: 'ЕГЭ Физика' }} wide>
    <CatalogGrid preview="physics" items={PHYSICS_SECTIONS.map((section) => ({ ...section, href: `/math-profile/physics/main/${section.number}` }))} />
  </SectionFrame>;
}

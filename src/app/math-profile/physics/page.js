import EgeFormatTiles from '../../components/EgeFormatTiles';
import { SectionFrame } from '../../components/SectionHub';

export default function PhysicsHubPage() {
  return <SectionFrame title="ЕГЭ Физика" eyebrow="Направление: ЕГЭ" breadcrumb={{ href: '/math-profile', label: 'ЕГЭ' }}>
    <EgeFormatTiles subject="physics" introHref="/math-profile/physics/intro" bankHref="/math-profile/physics/main" />
  </SectionFrame>;
}

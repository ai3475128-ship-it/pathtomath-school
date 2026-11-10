import { HubTiles, SectionFrame } from '../../components/SectionHub';

export default function EgeMathPage() {
  return <SectionFrame title="ЕГЭ Математика" eyebrow="Направление: ЕГЭ" breadcrumb={{ href: '/math-profile', label: 'ЕГЭ' }}>
    <HubTiles items={[
      { href: '/math-profile/ege/intro', title: 'Подготовительные задачи' },
      { href: '/math-profile/ege/main', title: 'Банк заданий ЕГЭ' },
    ]} />
  </SectionFrame>;
}

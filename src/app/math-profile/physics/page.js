import { HubTiles, SectionFrame } from '../../components/SectionHub';

export default function PhysicsHubPage() {
  return <SectionFrame title="ЕГЭ Физика" breadcrumb={{ href: '/math-profile', label: 'ЕГЭ' }} description="Выберите формат подготовки по физике.">
    <HubTiles items={[
      { href: '/math-profile/physics/intro', title: 'Подготовительные задачи', description: 'Базовые задачи для подготовки к ЕГЭ по физике.' },
      { href: '/math-profile/physics/main', title: 'Банк заданий', description: 'Задания ЕГЭ по физике.' },
    ]} />
  </SectionFrame>;
}

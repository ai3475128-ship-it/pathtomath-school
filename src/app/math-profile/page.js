import { HubTiles, SectionFrame } from '../components/SectionHub';

export default function EgeHubPage() {
  return <SectionFrame title="ЕГЭ" description="Выберите предмет для подготовки к экзамену.">
    <HubTiles items={[
      { href: '/math-profile/ege', title: 'ЕГЭ Математика', description: 'Подготовительные задачи и банк заданий по математике.' },
      { href: '/math-profile/physics', title: 'ЕГЭ Физика', description: 'Подготовительные задачи и банк заданий по физике.' },
    ]} />
  </SectionFrame>;
}

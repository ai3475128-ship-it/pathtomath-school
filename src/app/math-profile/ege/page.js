import EgeFormatTiles from '../../components/EgeFormatTiles';
import { SectionFrame } from '../../components/SectionHub';

export default function EgeMathPage() {
  return <SectionFrame title="ЕГЭ Математика" eyebrow="Направление: ЕГЭ" breadcrumb={{ href: '/math-profile', label: 'ЕГЭ' }}>
    <EgeFormatTiles subject="math" introHref="/math-profile/ege/intro" bankHref="/math-profile/ege/main" bankTitle="Банк заданий ЕГЭ" />
  </SectionFrame>;
}

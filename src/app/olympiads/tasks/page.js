import { olympiads } from '@/lib/olympiad-calendar';
import { SectionFrame } from '../../components/SectionHub';
import CompetitionCard from '../../components/olympiad-cards/CompetitionCard';

export default function OlympiadTaskDirectory() {
  return <SectionFrame title="Задачи по олимпиадам" breadcrumb={{ href: '/olympiads', label: 'Олимпиады' }} description="Выберите олимпиаду, чтобы открыть её задачи и доступные материалы для подготовки.">
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {olympiads.map((olympiad) => <CompetitionCard key={olympiad.id} olympiad={olympiad} href={`/olympiads/tasks/${olympiad.id}`} />)}
    </div>
  </SectionFrame>;
}

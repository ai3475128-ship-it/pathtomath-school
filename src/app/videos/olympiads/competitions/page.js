import Link from 'next/link';
import { requireUser } from '@/lib/auth';
import { olympiads } from '@/lib/olympiad-calendar';
import { SectionFrame } from '@/app/components/SectionHub';
import CompetitionCard from '@/app/components/olympiad-cards/CompetitionCard';

export default async function OlympiadCompetitionVideosPage() {
  await requireUser();
  return <SectionFrame title="Видеоуроки по олимпиадам" breadcrumb={{ href: '/videos', label: 'Видеоуроки' }} wide>
    <nav aria-label="Разделы олимпиады" className="flex flex-wrap justify-center gap-3"><Link href="/videos/olympiads" className="rounded-full border border-sky-300 bg-white px-5 py-2 font-bold text-sky-700">По темам</Link><span aria-current="page" className="rounded-full bg-sky-600 px-5 py-2 font-bold text-white">По олимпиадам</span></nav>
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{olympiads.map((olympiad) => <CompetitionCard key={olympiad.id} olympiad={olympiad} href={`/videos/olympiads/competition/${olympiad.id}`} />)}</div>
  </SectionFrame>;
}

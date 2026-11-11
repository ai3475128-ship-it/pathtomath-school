import Link from 'next/link';
import { requireUser } from '@/lib/auth';
import { OLYMPIAD_TOPICS } from '@/lib/learning-catalog';
import { SectionFrame } from '@/app/components/SectionHub';
import CatalogGrid from '@/app/components/CatalogGrid';

export default async function OlympiadVideosPage() {
  await requireUser();
  return <SectionFrame title="Олимпиадная математика: видео" breadcrumb={{ href: '/videos', label: 'Видеоуроки' }} wide>
    <nav aria-label="Разделы олимпиады" className="flex flex-wrap justify-center gap-3"><span aria-current="page" className="rounded-full bg-sky-600 px-5 py-2 font-bold text-white">По темам</span><Link href="/videos/olympiads/competitions" className="rounded-full border border-sky-300 bg-white px-5 py-2 font-bold text-sky-700">По олимпиадам</Link></nav>
    <CatalogGrid preview="olympiad" items={OLYMPIAD_TOPICS.map((topic) => ({ ...topic, href: `/videos/olympiads/topic/${topic.id}` }))} />
  </SectionFrame>;
}

import { notFound } from 'next/navigation';
import { olympiads } from '@/lib/olympiad-calendar';
import VideoTopic from '@/app/components/VideoTopic';

export default async function OlympiadCompetitionVideoPage({ params }) {
  const { id } = await params;
  const olympiad = olympiads.find((item) => item.id === id);
  if (!olympiad) notFound();
  return <VideoTopic subject="olympiad-math" topicKey={`competition:${id}`} title={olympiad.name} parent={{ href: '/videos/olympiads/competitions', label: 'Видеоуроки по олимпиадам' }} />;
}

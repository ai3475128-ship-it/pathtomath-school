import { notFound } from 'next/navigation';
import { OLYMPIAD_TOPICS } from '@/lib/learning-catalog';
import VideoTopic from '@/app/components/VideoTopic';

export default async function OlympiadVideoTopicPage({ params }) {
  const { id } = await params;
  const topic = OLYMPIAD_TOPICS.find((item) => item.id === id);
  if (!topic) notFound();
  return <VideoTopic subject="olympiad-math" topicKey={`topic:${id}`} title={topic.title} parent={{ href: '/videos/olympiads', label: 'Видеоуроки по темам' }} />;
}

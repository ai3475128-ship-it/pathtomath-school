import { notFound } from 'next/navigation';
import { PHYSICS_SECTIONS } from '@/lib/learning-catalog';
import VideoTopic from '@/app/components/VideoTopic';

export default async function PhysicsVideoTopicPage({ params }) {
  const { number } = await params;
  const topic = PHYSICS_SECTIONS.find((item) => String(item.number) === number);
  if (!topic) notFound();
  return <VideoTopic subject="physics" topicKey={number} title={`№${number} ${topic.title}`} parent={{ href: '/videos/physics', label: 'Физика ЕГЭ' }} />;
}

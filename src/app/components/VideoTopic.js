import { requireUser, canAccessCourse } from '@/lib/auth';
import { connectDB } from '@/lib/db';
import { videoEmbedUrl } from '@/lib/videos';
import { SectionFrame } from './SectionHub';
import VideoEmbed from './VideoEmbed';

export default async function VideoTopic({ subject, topicKey, title, parent }) {
  const user = await requireUser();
  const db = await connectDB();
  const videos = await db.all('SELECT * FROM Video WHERE subject=? AND topicKey=? ORDER BY createdAt DESC', [subject, topicKey]);
  return <SectionFrame title={title} breadcrumb={parent}>
    <div className="space-y-5">{videos.length === 0 && <p className="rounded-3xl border border-blue-100 bg-white/90 p-8 dark:border-purple-500/20 dark:bg-purple-950/20">Видеоуроки для этого раздела пока не добавлены.</p>}
      {videos.map((video) => {
        const allowed = !video.isPremium || canAccessCourse(user, subject);
        let url = null;
        if (allowed) { try { url = videoEmbedUrl(video.url); } catch {} }
        return <section key={video.id} className="space-y-4 rounded-3xl border border-blue-100 bg-white/90 p-6 dark:border-purple-500/20 dark:bg-purple-950/20">
          <h2 className="text-xl font-black text-slate-800 dark:text-white">{video.title}</h2>
          {video.description && <p>{video.description}</p>}
          {!allowed ? <p>Урок доступен участникам платного курса.</p> : url ? <VideoEmbed url={url} title={video.title} /> : <p>Ссылка на урок временно недоступна.</p>}
        </section>;
      })}
    </div>
  </SectionFrame>;
}

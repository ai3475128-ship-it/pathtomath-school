import Link from "next/link";
import VideoEmbed from "../../components/VideoEmbed";
import { notFound } from "next/navigation";
import { requireUser, canAccessCourse } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import { videoEmbedUrl } from "@/lib/videos";
import { egeSection } from "@/lib/ege-sections";
export default async function VideoSectionPage({ params }) {
  const user = await requireUser(),
    { taskNumber } = await params,
    section = Number(taskNumber);
  const topic = egeSection(taskNumber);
  if (!topic) notFound();
  const db = await connectDB(),
    videos = await db.all(
      `SELECT * FROM Video WHERE subject='ege-math' AND sectionNum IN (${topic.videoSections.map(() => "?").join(",")}) ORDER BY createdAt DESC`,
      topic.videoSections,
    );
  return (
    <div className="min-h-screen bg-white dark:bg-[#03000a] p-8 text-slate-600 dark:text-slate-300 transition-colors duration-500">
      <div className="max-w-5xl mx-auto space-y-6">
        <Link
          href="/videos"
          className="text-xs font-bold text-sky-500 dark:text-purple-400"
        >
          ← Все видеоуроки
        </Link>
        <h1 className="text-3xl font-black text-sky-600 dark:text-purple-400">
          Видеоуроки: задание №{section}
        </h1>
        {videos.length === 0 && (
          <p className="p-8 bg-slate-50 dark:bg-[#140e24]/80 rounded-3xl border border-blue-100/60 dark:border-purple-500/20 text-sm">
            Видеоуроки для этого раздела пока не добавлены.
          </p>
        )}
        {videos.map((video) => {
          const allowed = !video.isPremium || canAccessCourse(user);
          let url = null;
          if (allowed) {
            try {
              url = videoEmbedUrl(video.url);
            } catch {}
          }
          return (
            <section
              key={video.id}
              className="p-6 bg-slate-50 dark:bg-[#140e24]/80 rounded-3xl border border-blue-100/60 dark:border-purple-500/20 space-y-4"
            >
              <h2 className="text-xl font-black text-slate-800 dark:text-white">
                {video.title}
              </h2>
              {video.description && (
                <p className="text-sm">{video.description}</p>
              )}
              {!allowed ? (
                <p className="text-sm font-bold text-sky-600 dark:text-purple-400">
                  Урок доступен участникам платного курса.
                </p>
              ) : url ? (
                <VideoEmbed url={url} title={video.title} />
              ) : (
                <p className="text-sm">
                  Ссылка на урок временно недоступна. Обратитесь к
                  преподавателю.
                </p>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}

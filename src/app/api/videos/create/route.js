import { NextResponse } from 'next/server';
import { getCurrentUser, isManagement, canAccessCourse } from '@/lib/auth';
import { connectDB, createId } from '@/lib/db';
import { text } from '@/lib/validation';
import { videoEmbedUrl } from '@/lib/videos';
import { egeSection } from '@/lib/ege-sections';
import { PHYSICS_SECTIONS, OLYMPIAD_TOPICS } from '@/lib/learning-catalog';
import { olympiads } from '@/lib/olympiad-calendar';
import { sameOrigin, limitedBody } from '@/lib/http';

export async function POST(request) {
  if (!sameOrigin(request)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: 'Требуется вход' }, { status: 401 });
  if (!isManagement(user)) return NextResponse.json({ error: 'Недостаточно прав' }, { status: 403 });
  let title, url, isPremium, subject, topicKey, sectionNum = 0, destination, returnToCabinet = false;
  try {
    const bytes = await limitedBody(request);
    const form = await new Request(request.url, { method: 'POST', headers: request.headers, body: bytes }).formData();
    title = text(form.get('title'), 300);
    url = videoEmbedUrl(form.get('url'));
    isPremium = form.get('isPremium') === 'on' ? 1 : 0;
    returnToCabinet = form.get('returnTo') === 'cabinet';
    const choice = form.get('destination');
    const parts = choice ? String(choice).split('|') : ['ege-math', String(form.get('sectionNum'))];
    if (parts.length !== 2) throw Error('Invalid destination');
    [subject, topicKey] = parts;
    if (subject === 'ege-math') {
      const section = egeSection(topicKey);
      if (!section) throw Error('Invalid section');
      sectionNum = section.videoSections[0];
      destination = `/videos/${section.number}`;
      topicKey = '';
    } else if (subject === 'physics') {
      if (!PHYSICS_SECTIONS.some((s) => String(s.number) === topicKey)) throw Error('Invalid section');
      destination = `/videos/physics/${topicKey}`;
    } else if (subject === 'olympiad-math' && topicKey.startsWith('topic:')) {
      const id = topicKey.slice(6);
      if (!OLYMPIAD_TOPICS.some((s) => s.id === id)) throw Error('Invalid topic');
      destination = `/videos/olympiads/topic/${id}`;
    } else if (subject === 'olympiad-math' && topicKey.startsWith('competition:')) {
      const id = topicKey.slice(12);
      if (!olympiads.some((s) => s.id === id)) throw Error('Invalid competition');
      destination = `/videos/olympiads/competition/${id}`;
    } else throw Error('Invalid subject');
  } catch {
    return NextResponse.json({ error: 'Проверьте название, раздел и ссылку встраивания VK Видео или Kinescope' }, { status: 400 });
  }
  if (!canAccessCourse(user, subject)) return NextResponse.json({ error: 'Направление недоступно' }, { status: 403 });
  const db = await connectDB();
  await db.run('INSERT INTO Video(id,title,url,sectionNum,isPremium,subject,topicKey,createdAt) VALUES(?,?,?,?,?,?,?,?)',
    [createId(), title, url, sectionNum, isPremium, subject, topicKey, new Date().toISOString()]);
  return NextResponse.redirect(new URL(returnToCabinet ? `/cabinet/materials?course=${encodeURIComponent(subject)}&published=1` : destination, request.url), 303);
}

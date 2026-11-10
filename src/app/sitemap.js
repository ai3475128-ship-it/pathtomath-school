import { olympiads } from '../lib/olympiad-calendar.js';

// Set APP_ORIGIN to the public HTTPS origin in production.
export default function sitemap() {
  try {
    const origin = new URL(process.env.APP_ORIGIN);
    if (origin.protocol !== 'https:' || ['localhost', 'school.example.com'].includes(origin.hostname)) return [];
    return ['/', '/teachers', '/math-profile', '/math-profile/ege', '/math-profile/ege/intro', '/math-profile/ege/main', '/math-profile/physics', '/math-profile/physics/intro', '/math-profile/physics/main', '/olympiads', '/olympiad-calendar', '/math-profile/olympiads/intro', '/math-profile/olympiads/main', '/olympiads/tasks', ...olympiads.map((item) => `/olympiads/tasks/${item.id}`)].map((path) => ({ url: new URL(path, origin).href }));
  } catch {
    return [];
  }
}

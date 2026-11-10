// Set APP_ORIGIN to the public HTTPS origin in production.
export default function sitemap() {
  try {
    const origin = new URL(process.env.APP_ORIGIN);
    if (origin.protocol !== 'https:' || ['localhost', 'school.example.com'].includes(origin.hostname)) return [];
    return ['/', '/teachers', '/math-profile', '/olympiad-calendar'].map((path) => ({ url: new URL(path, origin).href }));
  } catch {
    return [];
  }
}

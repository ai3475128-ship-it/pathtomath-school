export function videoEmbedUrl(value) {
  if (typeof value !== "string" || value.length > 2000)
    throw Error("Некорректная ссылка видео");
  const url = new URL(value);
  if (url.protocol !== "https:" || url.username || url.password || url.port)
    throw Error("Требуется HTTPS");
  const vk =
    ["vk.com", "vkvideo.ru", "vk.ru"].includes(url.hostname) &&
    url.pathname === "/video_ext.php";
  const kinescope =
    ["kinescope.io", "player.kinescope.io"].includes(url.hostname) &&
    /^\/embed\/[A-Za-z0-9_-]+\/?$/.test(url.pathname);
  if (!vk && !kinescope)
    throw Error("Нужна ссылка встраивания VK Видео или Kinescope");
  return url.href;
}

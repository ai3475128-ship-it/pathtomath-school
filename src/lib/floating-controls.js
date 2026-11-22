// The report button's lower edge stays 12px above the cookie surface.
export function observeCookieSurface(surface, browserWindow) {
  const rootStyle = browserWindow.document.documentElement.style;
  const update = () => {
    const occupied = Math.max(0, browserWindow.innerHeight - surface.getBoundingClientRect().top);
    rootStyle.setProperty('--cookie-surface-offset', `${Math.ceil(occupied + 12)}px`);
  };
  update();
  const observer = typeof browserWindow.ResizeObserver === 'function'
    ? new browserWindow.ResizeObserver(update)
    : null;
  observer?.observe(surface);
  browserWindow.addEventListener('resize', update);
  return () => {
    observer?.disconnect();
    browserWindow.removeEventListener('resize', update);
    rootStyle.removeProperty('--cookie-surface-offset');
  };
}

export function paginateTasks(tasks, page, size = 20) {
  const pageCount = Math.max(1, Math.ceil(tasks.length / size));
  const activePage = Math.max(1, Math.min(page, pageCount));
  return { pageCount, activePage, items: tasks.slice((activePage - 1) * size, activePage * size) };
}

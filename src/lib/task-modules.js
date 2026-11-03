import catalog from "./task-catalog.json" with { type: "json" };
export const getTaskModule = (slug) =>
  typeof slug === "string" && Object.hasOwn(catalog, slug) ? slug : null;
export const isTaskInModule = (slug, id) =>
  Boolean(
    getTaskModule(slug) &&
      Number.isSafeInteger(id) &&
      catalog[slug].includes(id),
  );
export function legacyCandidates(number) {
  const result = [];
  for (const [slug, ids] of Object.entries(catalog))
    for (const id of ids)
      if ((parseInt(slug, 10) || 0) * 100 + id === number)
        result.push({ module: slug, taskId: id });
  return result;
}
export async function getEgeProgress(db, userId) {
  return (
    await db.all("SELECT module, taskId FROM TaskProgress WHERE userId = ?", [
      userId,
    ])
  )
    .filter((x) => /^\d+$/.test(x.module) && isTaskInModule(x.module, x.taskId))
    .map((x) => ({ section: Number(x.module), taskId: x.taskId }));
}

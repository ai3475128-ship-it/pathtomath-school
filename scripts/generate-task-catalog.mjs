import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
const root = path.resolve(import.meta.dirname, ".."),
  catalog = {};
function add(slug, file) {
  const ids = [
    ...readFileSync(path.join(root, file), "utf8").matchAll(
      /^\s*id:\s*(\d+)\s*,/gm,
    ),
  ].map((m) => Number(m[1]));
  if (new Set(ids).size !== ids.length)
    throw Error(`Duplicate task IDs: ${slug}`);
  catalog[slug] = ids;
}
const planimetry = JSON.parse(readFileSync(path.join(root, "src/lib/planimetry-tasks.json"), "utf8"));
const planimetryIds = planimetry.map((task) => task.id);
if (planimetryIds.some((id) => !Number.isSafeInteger(id) || id < 1) || new Set(planimetryIds).size !== planimetryIds.length)
  throw Error("Invalid or duplicate task IDs: 1");
catalog["1"] = planimetryIds;
for (let n = 2; n <= 19; n++)
  add(
    String(n),
    `src/app/math-profile/[taskNumber]/${[13, 14, 15].includes(n) ? "section" : "sectoin"}${n}.js`,
  );
catalog["ege-random"] = [];
add("ege-optimization", "src/app/math-profile/[taskNumber]/ege-optimization.js");
for (const n of [14, 17, 18, 19])
  add(
    `${n}-intro`,
    `src/app/math-profile/sections-ege-intro/ege-intro-${n}.js`,
  );
for (const [type, count] of [
  ["intro", 7],
  ["main", 14],
])
  for (let n = 1; n <= count; n++)
    add(
      `olympiad-${n}-${type}`,
      `src/app/math-profile/sections-olympiad-${type}/olympiad-${type}-${String(n).padStart(2, "0")}.js`,
    );
writeFileSync(
  path.join(root, "src/lib/task-catalog.json"),
  JSON.stringify(catalog, null, 2) + "\n",
);

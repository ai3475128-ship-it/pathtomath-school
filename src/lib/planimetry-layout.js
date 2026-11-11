// Place diagram labels in SVG coordinates, keeping them away from other labels and strokes.
const WIDTH = 400;
const HEIGHT = 300;
const LABEL_HEIGHT = 20;

function overlaps(a, b, padding = 0) {
  return a.left < b.right + padding && a.right + padding > b.left &&
    a.top < b.bottom + padding && a.bottom + padding > b.top;
}
function lineIntersectsBox(a, b, box, padding = 2) {
  const bounds = { left: box.left - padding, right: box.right + padding, top: box.top - padding, bottom: box.bottom + padding };
  let lo = 0, hi = 1;
  for (const [start, end, min, max] of [[a[0], b[0], bounds.left, bounds.right], [a[1], b[1], bounds.top, bounds.bottom]]) {
    const d = end - start;
    if (Math.abs(d) < 1e-8) { if (start < min || start > max) return false; continue; }
    const first = (min - start) / d, last = (max - start) / d;
    lo = Math.max(lo, Math.min(first, last));
    hi = Math.min(hi, Math.max(first, last));
    if (lo > hi) return false;
  }
  return true;
}
function circleIntersectsBox({ center: [x, y], r }, box) {
  const closestX = Math.max(box.left - 2, Math.min(x, box.right + 2));
  const closestY = Math.max(box.top - 2, Math.min(y, box.bottom + 2));
  const nearest = Math.hypot(closestX - x, closestY - y);
  const farthest = Math.max(...[box.left - 2, box.right + 2].flatMap((px) => [box.top - 2, box.bottom + 2].map((py) => Math.hypot(px - x, py - y))));
  return nearest <= r && farthest >= r;
}
function labelBox(x, y, text) {
  // KaTeX scales its font slightly above the surrounding text size; allow room for wide letters.
  const width = Math.max(18, text.length * 11);
  return { left: x - width / 2, right: x + width / 2, top: y - LABEL_HEIGHT / 2, bottom: y + LABEL_HEIGHT / 2 };
}
function project(geometry) {
  const all = [...Object.values(geometry.points), ...geometry.circles.flatMap(({ center: [x, y], r }) => [[x-r,y-r], [x+r,y+r]])];
  const xs = all.map(([x]) => x), ys = all.map(([,y]) => y);
  const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
  const scale = Math.min(280 / (maxX-minX || 1), 190 / (maxY-minY || 1));
  const cx = (minX + maxX) / 2, cy = (minY + maxY) / 2;
  const at = ([x,y]) => [WIDTH/2 + (x-cx)*scale, HEIGHT/2 + (y-cy)*scale];
  return { at, scale };
}
function candidates(label) {
  const options = [];
  for (const distance of [16, 23, 31, 41, 54, 68]) {
    for (let i = 0; i < 16; i++) {
      const angle = i * Math.PI / 8;
      const x = label.point[0] + Math.cos(angle) * distance;
      const y = label.point[1] + Math.sin(angle) * distance;
      const box = labelBox(x, y, label.text);
      if (box.left >= 4 && box.right <= WIDTH - 4 && box.top >= 4 && box.bottom <= HEIGHT - 4) options.push({ x, y, box, distance });
    }
  }
  return options;
}
function cost(candidate, label, labels, lines, circles, points) {
  let score = candidate.distance * 0.3;
  for (const [a,b] of lines) if (lineIntersectsBox(a,b,candidate.box)) score += 500;
  for (const circle of circles) if (circleIntersectsBox(circle,candidate.box)) score += 500;
  for (const other of labels) if (other !== label && other.chosen && overlaps(candidate.box, other.chosen.box, 3)) score += 1500;
  for (const point of points) {
    if (point !== label.point && point[0] >= candidate.box.left - 4 && point[0] <= candidate.box.right + 4 && point[1] >= candidate.box.top - 4 && point[1] <= candidate.box.bottom + 4) score += 500;
  }
  // Outer placement is easier to read, but a clean inner placement wins over a crossing.
  const dx = label.point[0] - WIDTH/2, dy = label.point[1] - HEIGHT/2;
  if (Math.hypot(dx,dy) > 20) score -= ((candidate.x-label.point[0])*dx + (candidate.y-label.point[1])*dy) / Math.hypot(dx,dy) * 0.12;
  return score;
}
export function layoutPlanimetry(geometry) {
  const projection = project(geometry);
  const points = Object.fromEntries(Object.entries(geometry.points).map(([name, p]) => [name, projection.at(p)]));
  const circles = geometry.circles.map(({ center, r }) => ({ center: projection.at(center), r: r * projection.scale }));
  const lines = geometry.segments.map(([a,b]) => [points[a], points[b]]);
  const obstacles = [...lines];
  if (geometry.right) {
    const [at,a,b] = geometry.right.map((name) => points[name]);
    const unit = (point) => { const dx = point[0]-at[0], dy = point[1]-at[1], length = Math.hypot(dx,dy); return [dx/length*9, dy/length*9]; };
    const u = unit(a), v = unit(b);
    const first = [at[0]+u[0],at[1]+u[1]], corner = [at[0]+u[0]+v[0],at[1]+u[1]+v[1]], last = [at[0]+v[0],at[1]+v[1]];
    obstacles.push([first,corner], [corner,last]);
  }
  const labels = Object.entries(points).filter(([name]) => name !== 'X').map(([text, point]) => ({ text, point }));
  for (const [a,b,text] of geometry.measures) labels.push({ text, point: [(points[a][0]+points[b][0])/2, (points[a][1]+points[b][1])/2] });
  for (const label of labels) label.options = candidates(label);
  // A few passes let later labels move earlier choices out of cramped areas.
  for (let pass = 0; pass < 5; pass++) for (const label of labels) {
    let best = null, bestCost = Infinity;
    for (const option of label.options) {
      const value = cost(option, label, labels, obstacles, circles, Object.values(points));
      if (value < bestCost) { best = option; bestCost = value; }
    }
    label.chosen = best;
  }
  return { width: WIDTH, height: HEIGHT, points, lines, obstacles, circles, labels: labels.map(({text,point,chosen}) => ({ text, point, ...chosen })) };
}

export function planimetryLabelCollisions(layout) {
  const { labels, obstacles, circles } = layout;
  const collisions = [];
  for (let i = 0; i < labels.length; i++) {
    const label = labels[i];
    if (obstacles.some(([a,b]) => lineIntersectsBox(a,b,label.box)) || circles.some((circle) => circleIntersectsBox(circle,label.box))) collisions.push(`${label.text}: stroke`);
    for (let j = 0; j < i; j++) if (overlaps(label.box, labels[j].box, 2)) collisions.push(`${label.text}: ${labels[j].text}`);
  }
  return collisions;
}

const epsilon = 1e-8;

const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const subtract = (a, b) => a.map((value, i) => value - b[i]);
const cross = (a, b) => [
  a[1] * b[2] - a[2] * b[1],
  a[2] * b[0] - a[0] * b[2],
  a[0] * b[1] - a[1] * b[0],
];
const unit = vector => {
  const length = Math.hypot(...vector);
  return vector.map(value => value / length);
};
const midpoint = points => [0, 1, 2].map(i => points.reduce((sum, p) => sum + p[i], 0) / points.length);
const interpolate = (a, b, t) => a.map((value, i) => value + (b[i] - value) * t);

function model(name, labels, vertices, faceIndices, example) {
  const center = midpoint(vertices);
  const edges = {};
  const faces = faceIndices.map((indices, faceIndex) => {
    const points = indices.map(i => vertices[i]);
    const [a, b, c] = points;
    const normal = cross(subtract(b, a), subtract(c, a));
    const outward = dot(normal, subtract(midpoint(points), center)) > 0;

    indices.forEach((index, i) => {
      const [from, to] = [index, indices[(i + 1) % indices.length]].sort((first, second) => first - second);
      const key = `${from}-${to}`;
      edges[key] ??= { from, to, name: `${labels[from]}–${labels[to]}`, faces: [] };
      edges[key].faces.push(faceIndex);
    });

    return { indices, normal: outward ? normal : normal.map(value => -value) };
  });
  return { name, labels, vertices, faces, edges, example };
}

const square = [[-1, -1, -1], [1, -1, -1], [1, -1, 1], [-1, -1, 1]];
const triangle = [[-Math.sqrt(3) / 2, -1, 0.5], [Math.sqrt(3) / 2, -1, 0.5], [0, -1, -1]];

export const solids = {
  cube: model('Куб', ['A', 'B', 'C', 'D', 'A₁', 'B₁', 'C₁', 'D₁'],
    [...square, ...square.map(([x, , z]) => [x, 1, z])],
    [[0, 1, 2, 3], [4, 5, 6, 7], [0, 1, 5, 4], [1, 2, 6, 5], [2, 3, 7, 6], [3, 0, 4, 7]],
    ['1-2', '3-7', '4-5']),
  prism: model('Треугольная призма', ['A', 'B', 'C', 'A₁', 'B₁', 'C₁'],
    [...triangle, ...triangle.map(([x, , z]) => [x, 1, z])],
    [[0, 1, 2], [3, 4, 5], [0, 1, 4, 3], [1, 2, 5, 4], [2, 0, 3, 5]],
    ['0-3', '1-4', '2-5']),
  pyramid: model('Четырёхугольная пирамида', ['A', 'B', 'C', 'D', 'S'],
    [...square, [0, 1, 0]], [[0, 1, 2, 3], [0, 1, 4], [1, 2, 4], [2, 3, 4], [3, 0, 4]],
    ['0-4', '1-4', '2-4']),
  tetrahedron: model('Тетраэдр', ['A', 'B', 'C', 'D'],
    triangle.map(([x, , z]) => [x, -Math.SQRT2 / 4, z]).concat([[0, 3 * Math.SQRT2 / 4, 0]]),
    [[0, 1, 2], [0, 1, 3], [1, 2, 3], [2, 0, 3]], ['0-1', '0-2', '1-3']),
};

export function pointOnEdge(solid, { edge, percent }) {
  const { from, to } = solid.edges[edge];
  return interpolate(solid.vertices[from], solid.vertices[to], percent / 100);
}

export function sliceSolid(solid, points, shift) {
  if (points.some(point => point === null)) return null;
  const [a, b, c] = points;
  const perpendicular = cross(subtract(b, a), subtract(c, a));
  if (Math.hypot(...perpendicular) < epsilon) return null;

  const normal = unit(perpendicular);
  const start = dot(a, normal);
  const projections = solid.vertices.map(vertex => dot(vertex, normal));
  const extreme = shift < 0 ? Math.min(...projections) : Math.max(...projections);
  const plane = start + (extreme - start) * Math.abs(shift) / 100;
  const distances = projections.map(value => value - plane);
  const vertices = solid.vertices.filter((_, i) => Math.abs(distances[i]) <= epsilon);

  // Include endpoints once, then intersect the plane with edges that cross it.
  for (const { from, to } of Object.values(solid.edges)) {
    const left = distances[from];
    const right = distances[to];
    if ((left < -epsilon && right > epsilon) || (left > epsilon && right < -epsilon)) {
      vertices.push(interpolate(solid.vertices[from], solid.vertices[to], left / (left - right)));
    }
  }
  if (vertices.length > 2) {
    const center = midpoint(vertices);
    const horizontal = unit(subtract(vertices[0], center));
    const vertical = cross(normal, horizontal);
    const angle = point => {
      const relative = subtract(point, center);
      return Math.atan2(dot(relative, vertical), dot(relative, horizontal));
    };
    vertices.sort((first, second) => angle(first) - angle(second));
  }
  return { vertices, normal };
}

const distance = (a, b) => Math.hypot(...subtract(a, b));
const samePoint = (a, b) => distance(a, b) < epsilon;
const lineName = ([a, b]) => `${a.name}${b.name}`;
const subscript = i => String.fromCodePoint(0x2080 + i);

function extendToFace(line, trace, solid) {
  const [a, b] = line.points;
  const direction = subtract(b.position, a.position);
  const projection = dot(trace.normal, direction);
  if (Math.abs(projection) < epsilon) return null;
  const parameter = dot(trace.normal, subtract(trace.origin, a.position)) / projection;
  const position = interpolate(a.position, b.position, parameter);
  if (Math.hypot(...position) > 4) return null;

  const from = parameter < 0 ? b.position : a.position;
  const guides = [[from, position]];
  const shared = line.indices?.filter(i => trace.indices.includes(i));
  let target = `плоскостью грани ${trace.name}`;
  if (shared?.length === 2) {
    const [u, v] = shared.map(i => solid.vertices[i]);
    guides.push([distance(u, position) > distance(v, position) ? u : v, position]);
    target = `прямой ${shared.map(i => solid.labels[i]).join('')}`;
  }
  return { position, guides, target, source: lineName(line.points), cost: distance(from, position) };
}

export function buildSectionSteps(solid, positions, section) {
  if (!section || section.vertices.length < 3 || positions.some(point => !point)) return [];

  const given = positions.map((position, i) => ({ position, name: ['P', 'Q', 'R'][i] }));
  const known = [...given];
  let vertexNumber = 0;
  const boundary = section.vertices.map(position => given.find(point => samePoint(point.position, position)) ??
    { position, name: `T${subscript(++vertexNumber)}` });
  const faces = solid.faces.map(face => ({ ...face, origin: solid.vertices[face.indices[0]],
    name: face.indices.map(i => solid.labels[i]).join('') }));
  const contains = (face, { position }) => Math.abs(dot(face.normal, subtract(position, face.origin))) < epsilon;
  const coincidentFace = faces.find(face => boundary.every(point => contains(face, point)));
  if (coincidentFace) {
    return [{ face: coincidentFace.indices, segments: [], vertices: [], guides: [], auxiliary: [],
      message: `Точки P, Q и R лежат в плоскости грани ${coincidentFace.name}. Сечение совпадает с этой гранью.` }];
  }

  const remaining = boundary.map((point, i) => {
    const points = [point, boundary[(i + 1) % boundary.length]];
    const face = faces.find(candidate => points.every(vertex => contains(candidate, vertex)));
    return { ...face, points };
  });
  const sources = [[given[0], given[1]], [given[0], given[2]], [given[1], given[2]]].map(points => ({ points }));
  const built = [];
  const steps = [];

  function plan(trace) {
    const anchors = known.filter(point => contains(trace, point)).slice(0, 2);
    if (anchors.length === 2) return { trace, anchors, hits: [], score: 0 };
    const availableLines = [...built, ...sources];
    const parallel = anchors.length && availableLines.find(({ points: [a, b] }) =>
      Math.abs(dot(trace.normal, subtract(b.position, a.position))) < epsilon);
    if (parallel) return { trace, anchors, parallel, hits: [], score: 1 };

    const candidates = availableLines.map(line => extendToFace(line, trace, solid)).filter(Boolean)
      .sort((first, second) => first.cost - second.cost);
    const hits = [];
    for (const hit of candidates) {
      if (anchors.some(point => samePoint(point.position, hit.position))) continue;
      const endpoint = trace.points.find(point => samePoint(point.position, hit.position));
      const name = endpoint?.name ?? `X${subscript(hits.length + 1)}`;
      const nearer = trace.points.reduce((a, b) => distance(a.position, hit.position) < distance(b.position, hit.position) ? a : b);
      if (!endpoint) hit.guides.push([hit.position, nearer.position]);
      anchors.push({ position: hit.position, name });
      hits.push({ ...hit, name, auxiliary: !endpoint });
      if (anchors.length === 2) return { trace, anchors, hits, score: 2 + hits.reduce((sum, item) => sum + item.cost, 0) };
    }
    return { trace, anchors: [], hits: [], score: Infinity };
  }

  while (remaining.length) {
    const { trace, anchors, hits, parallel } = remaining.map(plan).sort((a, b) => a.score - b.score)[0];
    remaining.splice(remaining.indexOf(trace), 1);
    built.push(trace);
    const vertices = trace.points.filter(point => !known.some(item => samePoint(item.position, point.position)));
    known.push(...vertices);
    const setup = hits.map(hit => `Продлеваем ${hit.source} до пересечения с ${hit.target} в точке ${hit.name}.`).join(' ');
    let line = `Находим пересечение плоскости сечения с гранью ${trace.name}.`;
    if (parallel) line = `${lineName(parallel.points)} параллельна плоскости грани ${trace.name}. На этой грани проводим через ${anchors[0].name} прямую параллельно ${lineName(parallel.points)}.`;
    if (anchors.length === 2) line = `На грани ${trace.name} проводим прямую ${lineName(anchors)}.`;
    steps.push({ face: trace.indices, segments: [trace.points], vertices,
      guides: hits.flatMap(hit => hit.guides), auxiliary: hits.filter(hit => hit.auxiliary),
      message: [setup, line, `В пределах грани получаем отрезок ${lineName(trace.points)}.`].filter(Boolean).join(' ') });
  }
  return steps;
}

export const viewWidth = 420;
export const viewHeight = 370;

export function projectSolid(solid, { yaw, pitch }, zoom) {
  const eye = [Math.sin(yaw) * Math.cos(pitch), Math.sin(pitch), Math.cos(yaw) * Math.cos(pitch)];
  const horizontal = [Math.cos(yaw), 0, -Math.sin(yaw)];
  const vertical = cross(eye, horizontal);
  const scale = 83 * zoom / 100;
  // Keep server and browser SVG attributes identical despite floating-point differences.
  const round = value => Math.round(value * 100) / 100;
  const project = point => ({
    x: round(viewWidth / 2 + scale * dot(point, horizontal)),
    y: round(viewHeight / 2 - scale * dot(point, vertical)),
  });
  const faces = solid.faces.map(face => dot(face.normal, eye) > epsilon);
  const vertices = solid.vertices.map(project);
  const edges = Object.entries(solid.edges).map(([id, edge]) => ({
    id, visible: edge.faces.some(face => faces[face]), a: vertices[edge.from], b: vertices[edge.to],
  }));
  return { project, vertices, edges, faces };
}

export function projectToEdge({ a, b }, x, y) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const lengthSquared = dx * dx + dy * dy;
  if (lengthSquared < 1) return null;
  const t = Math.max(0, Math.min(1, ((x - a.x) * dx + (y - a.y) * dy) / lengthSquared));
  return { percent: Math.round(100 * t), distance: Math.hypot(x - a.x - dx * t, y - a.y - dy * t) };
}

export function pickEdge(edges, x, y) {
  let picked = null;
  let bestDistance = 14;
  for (const edge of edges) {
    const projection = projectToEdge(edge, x, y);
    if (!projection) continue;
    const distance = projection.distance + (edge.visible ? 0 : 2);
    if (distance < bestDistance) {
      bestDistance = distance;
      picked = { edge: edge.id, percent: projection.percent };
    }
  }
  return picked;
}

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

export function pickEdge(edges, x, y) {
  let picked = null;
  let bestDistance = 14;
  for (const { id, visible, a, b } of edges) {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const lengthSquared = dx * dx + dy * dy;
    if (lengthSquared < 1) continue;
    const t = Math.max(0, Math.min(1, ((x - a.x) * dx + (y - a.y) * dy) / lengthSquared));
    const distance = Math.hypot(x - a.x - dx * t, y - a.y - dy * t) + (visible ? 0 : 2);
    if (distance < bestDistance) {
      bestDistance = distance;
      picked = { edge: id, percent: Math.round(100 * t) };
    }
  }
  return picked;
}

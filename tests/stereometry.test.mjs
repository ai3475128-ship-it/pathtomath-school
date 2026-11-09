import assert from 'node:assert/strict';
import test from 'node:test';
import { pickEdge, pointOnEdge, projectSolid, sliceSolid, solids } from '../src/app/math-profile/stereometry/geometry.js';

const cube = solids.cube;
const example = cube.example.map(edge => pointOnEdge(cube, { edge, percent: 50 }));

test('three cube edge midpoints determine the central hexagon and parallel triangular cuts', () => {
  const { vertices } = sliceSolid(cube, example, 0);
  assert.deepEqual(vertices.map(point => point.join(',')).sort(), [
    '-1,0,1', '-1,1,0', '0,-1,1', '0,1,-1', '1,-1,0', '1,0,-1',
  ]);
  assert.equal(sliceSolid(cube, example, 75).vertices.length, 3);
  assert.equal(sliceSolid(cube, example, 100).vertices.length, 1);
});

test('a coplanar face contributes each vertex once and collinear points give no plane', () => {
  const { vertices } = sliceSolid(cube, cube.vertices.slice(0, 3), 0);
  assert.equal(vertices.length, 4);
  assert.deepEqual(new Set(vertices), new Set(cube.vertices.slice(0, 4)));
  assert.equal(sliceSolid(cube, [cube.vertices[0], cube.vertices[1], [0, -1, -1]], 0), null);
  assert.equal(sliceSolid(cube, [example[0], example[1], null], 0), null);
});

test('picking a projected edge maps back to the same three-dimensional point', () => {
  const scene = projectSolid(cube, { yaw: 0.64, pitch: 0.46 }, 100);
  const point = { edge: '2-6', percent: 25 };
  const { x, y } = scene.project(pointOnEdge(cube, point));
  assert.deepEqual(pickEdge(scene.edges, x, y), point);
});

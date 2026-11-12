import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { figureNames, makeFigure, placeLabels, intersectsRect, renderFigure } from '../scripts/generate-stereometry-figures.mjs';

const edge = (model, a, b) => model.segments.find(s => (s.from === a && s.to === b) || (s.from === b && s.to === a));
const distanceToLine = (p,a,b) => Math.abs((b[0]-a[0])*(a[1]-p[1])-(a[0]-p[0])*(b[1]-a[1]))/Math.hypot(b[0]-a[0],b[1]-a[1]);

test('all revised diagrams keep every vertex label away from every line and other labels', () => {
  for (const name of figureNames) {
    const model=makeFigure(name),labels=placeLabels(model);
    for (let i=0;i<labels.length;i++) {
      const r=labels[i],margin={x:r.x-5,y:r.y-5,w:r.w+10,h:r.h+10};
      assert.ok(model.segments.every(s => !intersectsRect(s.a,s.b,margin)), `${name}: ${r.name} touches a line`);
      for (const other of labels.slice(i+1)) assert.ok(r.x+r.w<other.x || other.x+other.w<r.x || r.y+r.h<other.y || other.y+other.h<r.y, `${name}: overlapping labels`);
    }
    assert.equal(readFileSync(new URL(`../public/stereometry-bank/${name}.svg`,import.meta.url),'utf8'),renderFigure(name));
  }
});

test('the specific projections keep hidden edges apart and show all section edges', () => {
  const cut=makeFigure('box-cut');
  assert.ok(Math.abs(cut.points.M[0]-cut.points.N[0])>=75);
  assert.ok(Math.abs(cut.points.M[0]-cut.points.D[0])>=100);
  assert.ok(edge(cut,'N','N1').hidden);
  assert.ok(!edge(cut,'M','M1').hidden);
  const prismCut=makeFigure('tri-cut');
  assert.ok(Math.abs(prismCut.points.B[0]-prismCut.points.N[0])>=80);
  const tri=makeFigure('tri-tetra');
  assert.ok(distanceToLine(tri.points.B,tri.points.A,tri.points.C1)>90);
  assert.ok(edge(tri,'C1','B').hidden);
  const pyramid=makeFigure('pyramid-cut');
  assert.ok(edge(pyramid,'S','M').hidden);
  assert.ok(edge(pyramid,'M','N').hidden);
  assert.ok(!edge(pyramid,'S','N').hidden);
  const box=makeFigure('box-pyrB');
  assert.ok(distanceToLine(box.points.D,box.points.B1,box.points.C)>100);
});

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// Shared, affine projections keep parallel edges parallel. Coordinates are in
// the final SVG viewBox, so label and line clearance can be checked in pixels.
const box = {
  A: [180, 560], B: [580, 660], C: [820, 560], D: [420, 460],
  A1: [180, 145], B1: [580, 245], C1: [820, 145], D1: [420, 45],
};
const prism = {
  A: [100, 600], B: [500, 512], C: [900, 600],
  A1: [100, 205], B1: [500, 117], C1: [900, 205],
};
const middle = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
const pt = p => p.map(n => Math.round(n * 100) / 100).join(',');

function baseBox(model) {
  for (const [a, b] of [['A','B'],['B','C'],['A','A1'],['B','B1'],['C','C1'],['A1','B1'],['B1','C1'],['C1','D1'],['D1','A1']]) model.add(a,b);
  for (const [a,b] of [['A','D'],['D','C'],['D','D1']]) model.add(a,b,true);
}

function basePrism(model) {
  for (const [a,b] of [['A','C'],['A','A1'],['C','C1'],['A1','B1'],['B1','C1'],['A1','C1']]) model.add(a,b);
  for (const [a,b] of [['A','B'],['B','C'],['B','B1']]) model.add(a,b,true);
}

export function makeFigure(name) {
  const isBox = name.startsWith('box-');
  const isTri = name.startsWith('tri-');
  const points = { ...(isBox ? box : isTri ? prism : { A:[100,600], B:[600,425], C:[900,600], S:[490,105] }) };
  // In the cut diagram the rear edge must not project onto the cutting edge.
  if (name === 'tri-cut') { points.B=[410,470]; points.B1=[410,75]; }
  const segments=[];
  const add=(from,to,hidden=false) => segments.push({from,to,hidden,a:points[from],b:points[to]});
  const model={points,segments,add};
  if (isBox) {
    baseBox(model);
    if (name === 'box-prism1') { add('A','C',true); add('A1','C1'); }
    if (name === 'box-prism2') { add('A1','D',true); add('B1','C'); }
    if (name === 'box-pyrA') { add('A1','C',true); add('A1','D',true); }
    if (name === 'box-pyrB') { add('B1','A'); add('B1','C'); add('B1','D',true); }
    if (name === 'box-tetra') { add('B1','A'); add('B1','C'); add('A','C',true); }
    if (name === 'box-tetraD') { add('A','C',true); add('D1','A',true); add('D1','B',true); add('D1','C',true); }
    if (name === 'box-cut') {
      points.M=middle(points.B,points.C); points.N=middle(points.C,points.D);
      points.M1=middle(points.B1,points.C1); points.N1=middle(points.C1,points.D1);
      add('M1','N1'); add('M','M1'); add('N','N1',true); add('M','N',true);
    }
  } else if (isTri) {
    basePrism(model);
    if (name === 'tri-cut') {
      points.M=middle(points.A,points.B); points.N=middle(points.A,points.C);
      points.M1=middle(points.A1,points.B1); points.N1=middle(points.A1,points.C1);
      add('M','N',true); add('M1','N1'); add('M','M1',true); add('N','N1');
    }
    if (name === 'tri-tetra') { add('C1','A'); add('C1','B',true); }
    if (name === 'tri-five') { add('A1','B',true); add('A1','C'); }
  } else if (name === 'pyramid-cut') {
    points.M=middle(points.A,points.B); points.N=middle(points.A,points.C);
    for (const [a,b] of [['A','C'],['S','A'],['S','C'],['S','N']]) add(a,b);
    for (const [a,b] of [['A','B'],['B','C'],['S','B'],['M','N'],['S','M']]) add(a,b,true);
  } else throw new Error(`Unknown figure: ${name}`);
  model.labels = (name==='box-cut' || name==='tri-cut' || name==='pyramid-cut') ? [] : Object.keys(points);
  return model;
}

// Liang–Barsky clipping checks whether a line enters a label's exclusion box.
export function intersectsRect(a,b,r) {
  let lo=0,hi=1;
  const dx=b[0]-a[0],dy=b[1]-a[1];
  for (const [p,q] of [[-dx,a[0]-r.x],[dx,r.x+r.w-a[0]],[-dy,a[1]-r.y],[dy,r.y+r.h-a[1]]]) {
    if (Math.abs(p)<1e-9) { if (q<0) return false; continue; }
    const t=q/p;
    if (p<0) lo=Math.max(lo,t); else hi=Math.min(hi,t);
    if (lo>hi) return false;
  }
  return true;
}

export function placeLabels(model) {
  const placed=[];
  for (const name of model.labels) {
    const [x,y]=model.points[name],w=name.length>1?37:29,h=31;
    const candidates=[];
    for (const radius of [33,40,48,58,70,85]) {
      for (let angle=0;angle<360;angle+=15) {
        const r=angle*Math.PI/180,cx=x+radius*Math.cos(r),cy=y+radius*Math.sin(r);
        const rect={x:cx-w/2,y:cy-h/2,w,h};
        if (rect.x<5 || rect.y<5 || rect.x+w>995 || rect.y+h>695) continue;
        const pad={x:rect.x-5,y:rect.y-5,w:w+10,h:h+10};
        if (model.segments.some(s=>intersectsRect(s.a,s.b,pad))) continue;
        if (placed.some(other=>pad.x<other.x+other.w+6 && pad.x+pad.w>other.x-6 && pad.y<other.y+other.h+6 && pad.y+pad.h>other.y-6)) continue;
        // Prefer a nearby label, and then the side pointing away from the figure centre.
        const outward=((cx-x)*(x-500)+(cy-y)*(y-350))/radius;
        candidates.push({...rect,name,score:radius-outward*.025});
      }
      if (candidates.length) break;
    }
    candidates.sort((a,b)=>a.score-b.score);
    if (!candidates.length) throw new Error(`No clear label position for ${name}`);
    placed.push(candidates[0]);
  }
  return placed;
}

export function renderFigure(name) {
  const model=makeFigure(name),labels=placeLabels(model);
  const lines=model.segments.map(s=>`<line x1="${s.a[0]}" y1="${s.a[1]}" x2="${s.b[0]}" y2="${s.b[1]}"${s.hidden?' stroke-dasharray="13 11"':''}/>`).join('\n    ');
  const dots=model.labels.map(name=>`<circle cx="${model.points[name][0]}" cy="${model.points[name][1]}" r="5"/>`).join('\n    ');
  const text=labels.map(r=>`<text x="${r.x}" y="${r.y+24}" font-family="Georgia, 'Times New Roman', serif" font-size="30" font-style="italic">${r.name[0]}${r.name.length>1?'<tspan font-size="19" baseline-shift="sub">1</tspan>':''}</text>`).join('\n    ');
  const annotations=[dots,text].filter(Boolean).map(part=>`    ${part}\n`).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" role="img">\n  <g fill="none" stroke="#252525" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">\n    ${lines}\n  </g>\n  <g fill="#171717">\n${annotations}  </g>\n</svg>\n`;
}

export const figureNames=['box-cut','box-prism1','box-prism2','box-pyrA','box-pyrB','box-tetra','box-tetraD','tri-cut','tri-tetra','tri-five','pyramid-cut'];
if (process.argv[1] && path.resolve(process.argv[1])===fileURLToPath(import.meta.url)) {
  for (const name of figureNames) writeFileSync(new URL(`../public/stereometry-bank/${name}.svg`,import.meta.url),renderFigure(name));
  console.log(`Generated ${figureNames.length} clear stereometry diagrams.`);
}

// Coordinates are constructed from the conditions, not copied from the generic PDF drawings.
const midpoint = (a, b) => [(a[0]+b[0])/2, (a[1]+b[1])/2];
const onCircle = (degrees) => { const r=degrees*Math.PI/180; return [Math.cos(r),Math.sin(r)]; };
const rotate = ([x,y], degrees) => { const r=degrees*Math.PI/180; return [x*Math.cos(r)-y*Math.sin(r),x*Math.sin(r)+y*Math.cos(r)]; };
const length = (p) => Math.hypot(p[0],p[1]);
function foot(p,a,b) { const dx=b[0]-a[0],dy=b[1]-a[1],t=((p[0]-a[0])*dx+(p[1]-a[1])*dy)/(dx*dx+dy*dy); return [a[0]+t*dx,a[1]+t*dy]; }
function tangentIntersection(a,b) { let d=(b-a+360)%360; const m=(a+d/2)*Math.PI/180, r=1/Math.cos(d*Math.PI/360); return [r*Math.cos(m),r*Math.sin(m)]; }
export function planimetryGeometry(type, values) {
  let points={}, segments=[], circles=[], right=null, measures=[];
  if ([1,2].includes(type)) {
    const A=[-1,0.8],B=[1,0.8],C=[0,-0.8]; points={A,B,C,D:midpoint(A,C),E:midpoint(B,C)}; segments=[['A','B'],['B','C'],['C','A'],['D','E']];
  } else if (type===3) {
    const gamma=values[0]*Math.PI/180, alpha=values[1]*2*Math.PI/180, beta=Math.PI-alpha-gamma, ac=Math.sin(beta)/Math.sin(gamma);
    const A=[0,0],B=[1,0],C=[ac*Math.cos(alpha),-ac*Math.sin(alpha)],D=[(ac*B[0]+C[0])/(ac+1),(ac*B[1]+C[1])/(ac+1)];
    points={A,B,C,D};segments=[['A','B'],['B','C'],['C','A'],['A','D']];
  } else if ([4,5,6].includes(type)) {
    const b=values[0]*Math.PI/180, C=[0,0], A=[0,-Math.tan(b)], B=[1,0], M=midpoint(A,B), H=foot(C,A,B), ca=length(A),D=[(A[0]+ca*B[0])/(1+ca),(A[1]+ca*B[1])/(1+ca)];
    const raw={A,B,C,...(type!==5?{H}:{}),...(type!==4?{D}:{}),...(type!==6?{M}:{})};
    points=Object.fromEntries(Object.entries(raw).map(([name,p])=>[name,rotate(p,-20)]));
    segments=[['A','B'],['B','C'],['C','A'],...(type!==5?[['C','H']]:[]),...(type!==4?[['C','D']]:[]),...(type!==6?[['C','M']]:[])]; right=['C','A','B'];
  } else if (type===7) {
    const [a,b]=values;points={A:[0,-a],B:[b,0],C:[0,0]};segments=[['A','B'],['B','C'],['C','A']];right=['C','A','B']; measures=[['A','C',String(a)],['C','B',String(b)]];
  } else if (type===8) {
    const base=(180-values[0])*Math.PI/180;points={A:[-.5,0],B:[.5,0],C:[0,-.5*Math.tan(base)],X:[.85,0]};segments=[['A','B'],['B','C'],['C','A'],['B','X']];
  } else if ([9,10].includes(type)) {
    points={A:[0,0],B:[.3,-.8],C:[1.3,-.8],D:[1,0],E:[.5,0]};segments=[['A','B'],['B','C'],['C','D'],['D','A'],['B','E']];
  } else if (type===11) {
    const [a,b]=values;points={A:[0,0],B:[0,-b],C:[a,-b],D:[a,0]};segments=[['A','B'],['B','C'],['C','D'],['D','A']];right=['A','B','D'];measures=[['A','D',String(a)],['A','B',String(b)]];
  } else if (type===12) {
    const short=Math.min(values[0],values[1]),long=Math.max(values[0],values[1]);const A=[0,0],D=[long,0],B=[(long-short)/2,-long*.5],C=[(long+short)/2,-long*.5];
    points={A,B,C,D,E:midpoint(A,B),F:midpoint(C,D),X:midpoint(A,C)};segments=[['A','B'],['B','C'],['C','D'],['D','A'],['A','C'],['E','F']];
  } else if ([13,14].includes(type)) {
    const half=values[0],A=onCircle(90-half),B=onCircle(90+half),C=onCircle(270);points={A,B,C,O:[0,0]};circles=[{center:[0,0],r:1}];segments=[['O','A'],['O','B'],['C','A'],['C','B']];
  } else if ([15,16].includes(type)) {
    const alpha=type===15?values[0]:(180-values[0])/2;const A=onCircle(180),C=onCircle(0),B=onCircle(180+2*alpha),D=onCircle(2*alpha);points={A,B,C,D,O:[0,0]};circles=[{center:[0,0],r:1}];segments=[['A','C'],['B','D'],['B','C']];
  } else if ([17,18,19].includes(type)) {
    let A,B,C,D;
    if(type===17){ const v=values[0];B=onCircle(0);C=onCircle(v);D=onCircle(2*v);A=onCircle((2*v+360)/2); }
    else {const cad=values[1],abc=type===18?values[0]:values[0]+cad;C=onCircle(0);D=onCircle(2*cad);A=onCircle(2*abc);B=onCircle((2*abc+360)/2);}
    points={A,B,C,D};circles=[{center:[0,0],r:1}];segments=[['A','B'],['B','C'],['C','D'],['D','A'],['A','C'],['B','D']];
  } else if ([20,21].includes(type)) {
    const delta=(type===20?values[0]:90-values[0])*Math.PI/180;
    points={O:[0,0],A:[-Math.cos(delta),-Math.sin(delta)],B:[-1,0],C:[-1/Math.cos(delta),0]};circles=[{center:[0,0],r:1}];segments=[['C','A'],['C','O'],['O','A']];right=['A','C','O'];
  } else if ([22,23,24].includes(type)) {
    points={A:tangentIntersection(125,200),B:tangentIntersection(200,295),C:tangentIntersection(295,30),D:tangentIntersection(30,125)};circles=[{center:[0,0],r:1}];segments=[['A','B'],['B','C'],['C','D'],['D','A']];
  } else if (type===25) {
    const A=[0,-1],B=[-1,0.8],C=[1,0.8];points={A,B,C,D:midpoint(A,B),E:midpoint(A,C)};segments=[['A','B'],['B','C'],['C','A'],['D','E']];
  }
  return {points,segments,circles,right,measures};
}

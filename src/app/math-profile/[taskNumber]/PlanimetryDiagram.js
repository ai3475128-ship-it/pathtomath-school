import React from 'react';
import { InlineMath } from 'react-katex';
import { planimetryGeometry } from '@/lib/planimetry-geometry';
import { layoutPlanimetry } from '@/lib/planimetry-layout';

function rightAngle(points, definition) {
  if (!definition) return null;
  const [at, a, b] = definition.map((key) => points[key]);
  const vector = (p) => {
    const dx = p[0] - at[0], dy = p[1] - at[1], length = Math.hypot(dx, dy);
    return [dx / length * 9, dy / length * 9];
  };
  const u = vector(a), v = vector(b);
  return `${at[0]+u[0]},${at[1]+u[1]} ${at[0]+u[0]+v[0]},${at[1]+u[1]+v[1]} ${at[0]+v[0]},${at[1]+v[1]}`;
}

export default function PlanimetryDiagram({ type, values, taskNumber }) {
  const geometry = planimetryGeometry(type, values);
  const layout = layoutPlanimetry(geometry);
  const marker = rightAngle(layout.points, geometry.right);
  return <figure className="my-4 flex w-full min-w-0 justify-center" aria-label={`Чертёж к задаче ${taskNumber}`}>
    <svg viewBox={`0 0 ${layout.width} ${layout.height}`} role="img" aria-label={`Чертёж к задаче ${taskNumber}`} className="block h-auto w-full max-w-[440px] text-slate-700 dark:text-slate-200">
      <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        {layout.circles.map(({center:[cx,cy], r}, i) => <circle key={i} cx={cx} cy={cy} r={r}/>)}
        {layout.lines.map(([[x1,y1],[x2,y2]], i) => <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}/>)}
        {marker && <polyline points={marker} strokeWidth="1.3"/>}
        {layout.labels.filter((label) => label.distance > 30).map(({text,point,x,y}) => {
          const dx = x-point[0], dy = y-point[1], length = Math.hypot(dx,dy);
          return <line key={text} x1={point[0]+dx/length*4} y1={point[1]+dy/length*4} x2={x-dx/length*10} y2={y-dy/length*10} strokeWidth="0.8" opacity="0.6"/>;
        })}
      </g>
      {layout.labels.map(({text,x,y}, i) => <foreignObject key={`${text}-${i}`} x={x-25} y={y-12} width="50" height="24" pointerEvents="none">
        <div xmlns="http://www.w3.org/1999/xhtml" style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', height:'100%', fontSize:'14px', lineHeight:1, color:'inherit'}}>
          <InlineMath math={text}/>
        </div>
      </foreignObject>)}
    </svg>
  </figure>;
}

import React from 'react';
import { planimetryGeometry } from '@/lib/planimetry-geometry';

function makeProjection(geometry) {
  const coordinates=[...Object.values(geometry.points), ...geometry.circles.flatMap(({center,r})=>[[center[0]-r,center[1]-r],[center[0]+r,center[1]+r]])];
  const xs=coordinates.map((p)=>p[0]), ys=coordinates.map((p)=>p[1]);
  const minX=Math.min(...xs),maxX=Math.max(...xs),minY=Math.min(...ys),maxY=Math.max(...ys);
  const scale=Math.min(210/(maxX-minX || 1),145/(maxY-minY || 1));
  const centerX=(minX+maxX)/2,centerY=(minY+maxY)/2;
  return {scale, at:([x,y])=>[140+(x-centerX)*scale,105+(y-centerY)*scale]};
}
function rightAngle(points, definition) {
  if (!definition) return null;
  const [at,a,b]=definition.map((key)=>points[key]), vector=(p)=>{const dx=p[0]-at[0],dy=p[1]-at[1],n=Math.hypot(dx,dy);return [dx/n*9,dy/n*9];};
  const u=vector(a),v=vector(b);
  return `${at[0]+u[0]},${at[1]+u[1]} ${at[0]+u[0]+v[0]},${at[1]+u[1]+v[1]} ${at[0]+v[0]},${at[1]+v[1]}`;
}
export default function PlanimetryDiagram({ type, values, taskNumber }) {
  const geometry=planimetryGeometry(type,values), projection=makeProjection(geometry);
  const points=Object.fromEntries(Object.entries(geometry.points).map(([key,point])=>[key,projection.at(point)]));
  const marker=rightAngle(points,geometry.right);
  return <figure className="my-3 flex justify-center" aria-label={`Чертёж к задаче ${taskNumber}`}>
    <svg viewBox="0 0 280 210" role="img" aria-label={`Чертёж к задаче ${taskNumber}`} className="h-auto w-full max-w-[340px] text-slate-700 dark:text-slate-200">
      <g fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        {geometry.circles.map((circle,i)=>{const [cx,cy]=projection.at(circle.center);return <circle key={i} cx={cx} cy={cy} r={circle.r*projection.scale}/>;})}
        {geometry.segments.map(([a,b],i)=><line key={`${a}-${b}-${i}`} x1={points[a][0]} y1={points[a][1]} x2={points[b][0]} y2={points[b][1]}/>)}
        {marker && <polyline points={marker} strokeWidth="1.3"/>}
      </g>
      <g fill="currentColor" fontFamily="Georgia, serif" fontSize="15">
        {Object.entries(points).filter(([name])=>name!=='X').map(([name,[x,y]])=>{
          let dx=x<140?-15:6,dy=y<105?-8:16;
          if(name==='O'){dx=6;dy=-7;}
          if(name==='H'){dx=3;dy=-10;}
          if(name==='D' && [5,6].includes(type)){dx=-2;dy=-10;}
          if(name==='M'){dx=5;dy=16;}
          return <text key={name} x={x+dx} y={y+dy}>{name}</text>;
        })}
        {geometry.measures.map(([a,b,value],i)=>{const [x1,y1]=points[a],[x2,y2]=points[b];return <text key={i} x={(x1+x2)/2+(Math.abs(x2-x1)<10?-22:0)} y={(y1+y2)/2+(Math.abs(y2-y1)<10?18:-6)}>{value}</text>;})}
      </g>
    </svg>
  </figure>;
}

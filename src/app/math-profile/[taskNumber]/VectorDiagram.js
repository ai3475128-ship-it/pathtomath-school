import React from 'react';
import { InlineMath } from 'react-katex';
import { layoutVectorGrid } from '@/lib/vector-layout';

function Grid({ diagram, taskNumber }) {
  const d=layoutVectorGrid(diagram);
  const axisId=`vector-axis-${taskNumber}`, arrowId=`vector-arrow-${taskNumber}`;
  return <svg viewBox={`0 0 ${d.width} ${d.height}`} role="img" aria-label={`Координатная плоскость и векторы к задаче ${taskNumber}`} className="block h-auto w-full max-w-[430px] max-h-[460px] text-slate-800 dark:text-slate-100">
    <defs>
      <marker id={axisId} markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0L8 4L0 8L2 4Z" fill="currentColor"/></marker>
      <marker id={arrowId} markerWidth="12" markerHeight="12" refX="12" refY="6" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0L12 6L0 12L3 6Z" fill="currentColor"/></marker>
    </defs>
    <g stroke="currentColor" strokeWidth="1" opacity=".4">
      {Array.from({length:d.maxX-d.minX+1},(_,i)=>{const [x,y1]=d.point([d.minX+i,d.minY]),[,y2]=d.point([d.minX+i,d.maxY]);return <line key={`x${i}`} x1={x} y1={y1} x2={x} y2={y2}/>;})}
      {Array.from({length:d.maxY-d.minY+1},(_,i)=>{const [x1,y]=d.point([d.minX,d.minY+i]),[x2]=d.point([d.maxX,d.minY+i]);return <line key={`y${i}`} x1={x1} y1={y} x2={x2} y2={y}/>;})}
    </g>
    <g stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round">
      <line x1={d.axisX[0][0]} y1={d.axisX[0][1]} x2={d.axisX[1][0]+9} y2={d.axisX[1][1]} markerEnd={`url(#${axisId})`}/>
      <line x1={d.axisY[0][0]} y1={d.axisY[0][1]} x2={d.axisY[1][0]} y2={d.axisY[1][1]-9} markerEnd={`url(#${axisId})`}/>
      {d.segments.map(([[x1,y1],[x2,y2]],i)=><line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="3" markerEnd={`url(#${arrowId})`}/>)}
    </g>
    {d.axisLabels.map((label,i)=><rect key={i} x={label.x} y={label.y} width={label.width} height={label.height} className="fill-white dark:fill-[#17102b]"/>)}
    <g fill="currentColor" fontFamily="KaTeX_Main, serif" fontSize={d.fontSize}>
      {d.axisLabels.map((label,i)=><text key={i} x={label.x+label.width/2} y={label.y+label.height/2} textAnchor="middle" dominantBaseline="central">{label.text}</text>)}
      <text x={d.axisX[1][0]+d.fontSize*.6} y={d.axisX[1][1]+d.fontSize*.5} fontFamily="KaTeX_Math, serif" fontStyle="italic">x</text>
      <text x={d.axisY[1][0]-d.fontSize*.6} y={d.axisY[1][1]-d.fontSize*.7} fontFamily="KaTeX_Math, serif" fontStyle="italic">y</text>
    </g>
    {d.labels.map(({letter,x,y,width,height})=><g key={letter}>
      <rect x={x} y={y} width={width} height={height} rx="3" className="fill-white dark:fill-[#17102b]"/>
      <foreignObject x={x} y={y} width={width} height={height} pointerEvents="none"><div xmlns="http://www.w3.org/1999/xhtml" style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:`${d.fontSize*.88}px`,lineHeight:1,color:'inherit'}}><InlineMath math={`\\vec ${letter}`} /></div></foreignObject>
    </g>)}
  </svg>;
}

function Quadrilateral({ diagram, taskNumber }) {
  const {width:w,height:h,skew,diagonals}=diagram, unit=40, margin=55;
  const viewWidth=(w+skew)*unit+2*margin,viewHeight=h*unit+2*margin;
  const at=([x,y])=>[margin+x*unit,viewHeight-margin-y*unit];
  const A=at([0,0]),B=at([w,0]),C=at([w+skew,h]),D=at([skew,h]);
  const points=[A,B,C,D], markerFont=Math.max(20,16/Math.min(1,400/viewWidth,350/viewHeight));
  return <svg viewBox={`0 0 ${viewWidth} ${viewHeight}`} role="img" aria-label={`Чертёж к задаче ${taskNumber}`} className="block h-auto w-full max-w-[400px] max-h-[350px] text-slate-800 dark:text-slate-100">
    <g fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round">
      <polygon points={points.map(p=>p.join(',')).join(' ')}/>
      {diagonals!=='none' && <line x1={A[0]} y1={A[1]} x2={C[0]} y2={C[1]}/>}
      {diagonals==='both' && <line x1={B[0]} y1={B[1]} x2={D[0]} y2={D[1]}/>}
    </g>
    <g fill="currentColor" fontFamily="KaTeX_Math, serif" fontStyle="italic" fontSize={markerFont} textAnchor="middle">
      {[['A',A,-markerFont*.8,markerFont*.35],['B',B,markerFont*.8,markerFont*.35],['C',C,markerFont*.8,-markerFont*.45],['D',D,-markerFont*.8,-markerFont*.45]].map(([name,[x,y],dx,dy])=><text key={name} x={x+dx} y={y+dy}>{name}</text>)}
    </g>
    {points.map(([x,y],i)=><circle key={i} cx={x} cy={y} r="3" fill="currentColor"/>)}
  </svg>;
}
export default function VectorDiagram({ diagram, taskNumber }) {
  return <figure className="my-5 flex w-full min-w-0 justify-center">{diagram.kind==='grid'?<Grid diagram={diagram} taskNumber={taskNumber}/>:<Quadrilateral diagram={diagram} taskNumber={taskNumber}/>}</figure>;
}

const CELL = 48;
const MARGIN = 58;

function lineIntersectsBox(a, b, box, padding = 2) {
  let lo = 0, hi = 1;
  for (const [start,end,min,max] of [[a[0],b[0],box.x-padding,box.x+box.width+padding],[a[1],b[1],box.y-padding,box.y+box.height+padding]]) {
    const delta = end-start;
    if (Math.abs(delta)<1e-8) { if (start<min || start>max) return false; continue; }
    const t1=(min-start)/delta,t2=(max-start)/delta;
    lo=Math.max(lo,Math.min(t1,t2)); hi=Math.min(hi,Math.max(t1,t2));
    if(lo>hi)return false;
  }
  return true;
}
function overlaps(a,b) {
  return a.x<b.x+b.width+3 && a.x+a.width+3>b.x && a.y<b.y+b.height+3 && a.y+a.height+3>b.y;
}
export function layoutVectorGrid(diagram) {
  const [minX,maxX,minY,maxY]=diagram.grid;
  const width=(maxX-minX)*CELL+2*MARGIN,height=(maxY-minY)*CELL+2*MARGIN;
  const point=([x,y])=>[MARGIN+(x-minX)*CELL,MARGIN+(maxY-y)*CELL];
  const origin=point([0,0]);
  const axisX=[point([minX,0]),point([maxX,0])],axisY=[point([0,minY]),point([0,maxY])];
  const segments=diagram.vectors.map(({from,to})=>[point(from),point(to)]);
  const viewScale=Math.min(1,430/width,460/height);
  const fontSize=Math.max(20,16/viewScale), labelWidth=fontSize*2,labelHeight=fontSize*1.65;
  const axisLabels=[];
  const axisSpecs=[
    {text:'0',anchor:origin,angles:[135,45,225,315]},
    {text:'1',anchor:point([1,0]),angles:[90,270,45,135,315,225]},
    {text:'1',anchor:point([0,1]),angles:[180,0,135,225,45,315]},
  ];
  for(const spec of axisSpecs){
    let best=null,bestScore=Infinity;
    for(const distance of [fontSize*.95,fontSize*1.4,fontSize*2,fontSize*2.8])for(const [rank,angle] of spec.angles.entries()){
      const radians=angle*Math.PI/180,cx=spec.anchor[0]+Math.cos(radians)*distance,cy=spec.anchor[1]+Math.sin(radians)*distance;
      const box={x:cx-fontSize*.4,y:cy-fontSize*.58,width:fontSize*.8,height:fontSize*1.16,text:spec.text};
      if(box.x<4||box.y<4||box.x+box.width>width-4||box.y+box.height>height-4)continue;
      let score=distance+rank;
      for(const line of [...segments,axisX,axisY])if(lineIntersectsBox(line[0],line[1],box,6))score+=1000;
      for(const other of axisLabels)if(overlaps(box,other))score+=1500;
      if(score<bestScore){best=box;bestScore=score;}
    }
    axisLabels.push(best);
  }
  const reserved=axisLabels;
  const placed=[];
  for(let index=0;index<segments.length;index++) {
    const [start,end]=segments[index],dx=end[0]-start[0],dy=end[1]-start[1],length=Math.hypot(dx,dy),normal=[-dy/length,dx/length];
    let best=null,bestScore=Infinity;
    for(const t of [.5,.32,.68,.2,.8,0,1]) for(const sign of [-1,1]) for(const offset of [fontSize*1.15,fontSize*1.7,fontSize*2.3,fontSize*3,fontSize*4]) {
      const cx=start[0]+t*dx+sign*normal[0]*offset,cy=start[1]+t*dy+sign*normal[1]*offset;
      const box={x:cx-labelWidth/2,y:cy-labelHeight/2,width:labelWidth,height:labelHeight};
      if(box.x<4||box.y<4||box.x+box.width>width-4||box.y+box.height>height-4)continue;
      let score=offset+Math.abs(t-.5)*10;
      for(const line of [...segments,axisX,axisY])if(lineIntersectsBox(line[0],line[1],box,6))score+=1000;
      for(const other of [...reserved,...placed])if(overlaps(box,other))score+=1500;
      if(score<bestScore){best=box;bestScore=score;}
    }
    placed.push({...best,letter:index?'b':'a'});
  }
  return {width,height,point,origin,axisX,axisY,segments,labels:placed,axisLabels,fontSize,minX,maxX,minY,maxY};
}
export function vectorLabelCollisions(layout) {
  const errors=[];
  const labels=[...layout.axisLabels,...layout.labels];
  labels.forEach((box,i)=>{
    for(const [a,b] of [...layout.segments,layout.axisX,layout.axisY])if(lineIntersectsBox(a,b,box,6))errors.push(`${box.letter}: line`);
    for(const other of labels.slice(0,i))if(overlaps(box,other))errors.push(`${box.letter}: ${other.letter}`);
  });
  return errors;
}

from pathlib import Path
import html
P=Path('public/diagrams/stereo-prep'); P.mkdir(parents=True, exist_ok=True)
class Draw:
 def __init__(self,w=520,h=440):
  self.w=w; self.h=h; self.p=[]
 def line(self,a,b,color='#242a35',dash=False,width=2.7):
  self.p.append(f'<line x1="{a[0]:.1f}" y1="{a[1]:.1f}" x2="{b[0]:.1f}" y2="{b[1]:.1f}" stroke="{color}" stroke-width="{width}" stroke-linecap="round"'+(' stroke-dasharray="8 7"' if dash else '')+'/>')
 def dot(self,p): self.p.append(f'<circle cx="{p[0]:.1f}" cy="{p[1]:.1f}" r="3" fill="#222936"/>')
 def text(self,p,t,anchor='middle',size=23,italic=True):
  self.p.append(f'<text x="{p[0]}" y="{p[1]}" text-anchor="{anchor}" font-family="Georgia,Times New Roman,serif" font-size="{size}"'+(' font-style="italic"' if italic else '')+' fill="#161d2a">'+html.escape(t)+'</text>')
 def point(self,p,name,dx=0,dy=0): self.dot(p); self.text((p[0]+dx,p[1]+dy),name)
 def save(self,name):
  (P/(name+'.svg')).write_text(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {self.w} {self.h}" role="img"><rect width="100%" height="100%" fill="white"/>'+''.join(self.p)+'</svg>')
def mid(a,b,t=.5):return (a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t)
blue='#126bba'; green='#11815f'
def square():
 base={'A':(75,315),'B':(260,355),'C':(340,265),'D':(155,225)}
 return base|{k+'₁':(x,y-180) for k,(x,y) in base.items()}
def square_draw(task,solution=False):
 v=square(); q=Draw(500,585 if task==6 and solution else 410)
 for a,b in [('A','D'),('D','C'),('D','D₁')]:q.line(v[a],v[b],dash=True)
 for a,b in [('A','B'),('B','C'),('A','A₁'),('B','B₁'),('C','C₁'),('A₁','B₁'),('B₁','C₁'),('C₁','D₁'),('D₁','A₁')]:q.line(v[a],v[b])
 if task==1:
  q.line(v['A'],v['A₁'],blue,width=3.6);q.line(v['B'],v['D₁'],blue,dash=True,width=3.6)
  if solution:q.line(v['B₁'],v['D₁'],green,width=3.3);q.line(v['B'],v['B₁'],green,width=3.3)
 if task==6:
  q.line(v['A'],v['C₁'],blue,dash=True,width=3.6);q.line(v['B₁'],v['C'],blue,width=3.6)
  if solution:
   for k in ['A','B','C']: v[k+'₂']=(v[k][0],v[k][1]+180)
   v['M']=(v['D'][0],v['D'][1]+180)
   for a,b in [('D','M'),('M','A₂'),('M','C₂')]:q.line(v[a],v[b],dash=True)
   for a,b in [('A','A₂'),('B','B₂'),('C','C₂'),('A₂','B₂'),('B₂','C₂')]:q.line(v[a],v[b])
   q.line(v['A'],v['M'],green,width=3.5);q.line(v['M'],v['C₁'],green,dash=True,width=3)
 if task==7:
  v['K']=mid(v['B'],v['B₁'],.75);q.line(v['A'],v['K'],blue,width=3.5);q.line(v['B'],v['D₁'],blue,dash=True,width=3.5)
  if solution:
   v['M']=mid(v['B₁'],v['D₁'],.25);q.line(v['B₁'],v['D₁'],dash=True);q.line(v['K'],v['M'],green,width=3.5);q.line(v['A'],v['M'],green,dash=True,width=3)
 offsets={'A':(-17,23),'B':(0,28),'C':(18,11),'D':(0,26),'A₁':(-20,-8),'B₁':(-3,-13),'C₁':(21,0),'D₁':(0,-13),'M':(-20,26),'K':(19,7)}
 if task==6 and solution:
  offsets.update({'B':(18,5),'B₁':(20,5),'D':(-18,3),'A₂':(-18,24),'B₂':(0,28),'C₂':(20,8),'M':(18,20)})
 if task==7 and solution: offsets['M']=(4,-14)
 for k,p in v.items():q.point(p,k,*offsets[k])
 q.save(f'{task}-'+('construction' if solution else 'condition'))
def triangle_prism(solution=False):
 v={'A':(100,315),'B':(260,355),'C':(390,255),'A₁':(100,125),'B₁':(260,165),'C₁':(390,65)};q=Draw(500,405)
 q.line(v['A'],v['C'],dash=True)
 for a,b in [('A','B'),('B','C'),('A','A₁'),('B','B₁'),('C','C₁'),('A₁','B₁'),('B₁','C₁'),('C₁','A₁')]:q.line(v[a],v[b])
 q.line(v['A₁'],v['B'],blue,width=3.4);q.line(v['A'],v['C'],blue,dash=True,width=3.3)
 if solution:q.line(v['A₁'],v['C₁'],green,width=3.5);q.line(v['B'],v['C₁'],green,width=3.2)
 for k,xy in v.items():q.point(xy,k,*{'A':(-17,24),'B':(0,27),'C':(20,10),'A₁':(-20,0),'B₁':(0,-13),'C₁':(13,-12)}[k])
 q.save('2-'+('construction' if solution else 'condition'))
def hexagon(shear=1.4):
 base={'A':(85,300),'B':(205,335),'C':(330,290),'D':(335,200),'E':(215,165),'F':(90,210)}
 return {k:(x+shear*(y-250),y) for k,(x,y) in base.items()}
def hex_prism(solution=False):
 v={k:(x,y+80) for k,(x,y) in hexagon(.8).items()};v=v|{k+'₁':(x,y-100) for k,(x,y) in v.items()};q=Draw(480,480)
 for a,b in [('D','E'),('E','F'),('D','D₁'),('E','E₁'),('F','F₁')]:q.line(v[a],v[b],dash=True)
 for a,b in [('A','B'),('B','C'),('C','D'),('F','A'),('A','A₁'),('B','B₁'),('C','C₁'),('A₁','B₁'),('B₁','C₁'),('C₁','D₁'),('D₁','E₁'),('E₁','F₁'),('F₁','A₁')]:q.line(v[a],v[b])
 q.line(v['A'],v['F₁'],blue,width=3.5);q.line(v['B₁'],v['C'],blue,width=3.5)
 if solution:q.line(v['F₁'],v['E'],green,dash=True,width=3.4);q.line(v['A'],v['E'],green,dash=True,width=3.4)
 off={'A':(-17,20),'B':(0,27),'C':(22,13),'D':(21,3),'E':(-18,-5),'F':(-20,4),'A₁':(-20,0),'B₁':(0,-13),'C₁':(20,2),'D₁':(20,0),'E₁':(0,-12),'F₁':(-20,0)}
 for k,p in v.items():q.point(p,k,*off[k])
 q.save('3-'+('construction' if solution else 'condition'))
def pyramid(task,solution=False):
 if task==4:
  v={'A':(70,335),'B':(275,375),'C':(370,285),'D':(165,245),'S':(220,45)}; q=Draw(500,415)
  for a,b in [('A','D'),('D','C'),('D','S')]:q.line(v[a],v[b],dash=True)
  for a,b in [('A','B'),('B','C'),('S','A'),('S','B'),('S','C')]:q.line(v[a],v[b])
  v['M']=mid(v['S'],v['C']);q.line(v['B'],v['M'],blue,width=3.5);q.line(v['A'],v['S'],blue,width=3.5)
  if solution:
   v['O']=mid(v['A'],v['C']);q.line(v['A'],v['C'],dash=True);q.line(v['B'],v['D'],dash=True);q.line(v['S'],v['O'],dash=True);q.line(v['O'],v['M'],green,dash=True,width=3.5)
  off={'A':(-18,25),'B':(3,29),'C':(20,12),'D':(-17,3),'S':(0,-14),'M':(20,-4),'O':(5,23)}
 else:
  v=hexagon();v['S']=(215,30);q=Draw(480,405)
  for a,b in [('D','E'),('E','F'),('S','E'),('S','D')]:q.line(v[a],v[b],dash=True)
  for a,b in [('A','B'),('B','C'),('C','D'),('F','A'),('S','A'),('S','B'),('S','C'),('S','F')]:q.line(v[a],v[b])
  v['M']=mid(v['S'],v['C']);q.line(v['A'],v['M'],blue,width=3.5);q.line(v['B'],v['F'],blue,dash=True,width=3.5)
  if solution:
   v['N']=mid(v['S'],v['E']);q.line(v['M'],v['N'],green,dash=True,width=3.5);q.line(v['A'],v['N'],green,dash=True,width=3);q.line(v['C'],v['E'],dash=True)
  off={'A':(-18,19),'B':(0,26),'C':(21,12),'D':(20,6),'E':(3,23),'F':(-20,2),'S':(0,-12),'M':(18,-3),'N':(-16,2)}
 for k,p in v.items():q.point(p,k,*off[k])
 q.save(f'{task}-'+('construction' if solution else 'condition'))
for n in [1,6,7]:
 for s in [False,True]:square_draw(n,s)
for s in [False,True]:triangle_prism(s);hex_prism(s);pyramid(4,s);pyramid(5,s)
# The flat diagrams place vertices individually; extra labels are positioned clear of sides.
def tri(name,vertices,labels,side_labels=(),right=None):
 q=Draw(440,330)
 for a,b in [(0,1),(1,2),(2,0)]:q.line(vertices[a],vertices[b])
 cx=sum(p[0] for p in vertices)/3; cy=sum(p[1] for p in vertices)/3
 for p,t in zip(vertices,labels):
  dx=-18 if p[0]<cx-30 else 18 if p[0]>cx+30 else 0
  dy=-12 if p[1]<cy else 26
  q.point(p,t,dx,dy)
 for p,t in side_labels:q.text(p,t,size=21,italic=False)
 if right:
  a,b,c=right;q.line(a,b,width=1.8);q.line(b,c,width=1.8)
 q.save(name)
tri('1-plane',[(50,80),(330,80),(330,180)],['D₁','B₁','B'],[((190,59),'2√2'),((355,135),'1')],[(310,80),(310,100),(330,100)])
tri('2-plane',[(147,55),(293,55),(220,285)],['A₁','C₁','B'],[((220,37),'3'),((150,180),'5'),((290,180),'5')])
tri('3-plane',[(220,55),(70,205),(370,205)],['F₁','A','E'],[((125,110),'√3'),((315,110),'√3'),((220,240),'√6')],[(210,65),(220,75),(230,65)])
tri('4-plane',[(90,95),(90,245),(350,245)],['M','O','B'],[((65,175),'1'),((220,278),'√3')],[(90,225),(110,225),(110,245)])
q=Draw(440,330); A=(75,273); C=(350,273); S=(212.5,35); M=mid(S,C)
for a,b in [(A,S),(S,C),(C,A),(A,M)]:q.line(a,b)
for p,t,dx,dy in [(A,'A',-18,25),(C,'C',18,25),(S,'S',0,-12),(M,'M',19,-5)]:q.point(p,t,dx,dy)
q.text((68,120),'√3',size=21,italic=False);q.text((360,120),'√3',size=21,italic=False);q.text((210,307),'√3',size=21,italic=False);q.save('5-face')
tri('5-plane',[(220,30),(140,295),(300,295)],['A','M','N'],[((135,165),'3/2'),((305,165),'3/2'),((220,325),'√3/2')])
tri('6-plane',[(203,28),(95,270),(245,270)],['C₁','M','A'],[((125,130),'6√2'),((250,130),'√61'),((170,298),'5')])
tri('7-small',[(75,65),(355,65),(355,245)],['M','B₁','K'],[((215,48),'x√2'),((382,160),'x'),((175,185),'x√3')],[(335,65),(335,85),(355,85)])
tri('7-plane',[(358,140),(60,250),(370,250)],['M','A','K'],[((175,170),'x√26'),((390,195),'x√3'),((220,278),'5x')])

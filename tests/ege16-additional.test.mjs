import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import katex from 'katex';
import { parseEconomicsCondition } from '../src/lib/economics-condition.js';
import { isTaskInModule, legacyCandidates } from '../src/lib/task-modules.js';
const data=JSON.parse(fs.readFileSync('src/lib/ege16-new-tasks.json','utf8'));
const source=fs.readFileSync('src/app/math-profile/[taskNumber]/sectoin16.js','utf8');
const old=[...source.matchAll(/^\s*mathA:\s*("(?:\\.|[^"\\])*")/gm)].map(m=>JSON.parse(m[1]));
const norm=s=>s.toLowerCase().replace(/[^а-яёa-z0-9]/gi,'');
const val=v=>{const [a,b]=String(v).split('/').map(Number);return b?a/b:a;};
const close=(a,b,msg)=>assert.ok(Number.isFinite(a)&&Number.isFinite(b)&&Math.abs(a-b)<1e-7*Math.max(1,Math.abs(a),Math.abs(b)),`${msg}: ${a} != ${b}`);

test('sixty harder problems preserve earlier problems, do not reuse progress, and contain detailed valid mathematics',()=>{
 assert.equal(data.length,60);assert.equal(old.length,41);assert.equal(new Set(data.map(t=>t.kind)).size,20);
 const oldText=old.map(v=>norm(parseEconomicsCondition(v).flatMap(b=>b.parts||b.rows?.flat(2)||[]).map(p=>p.value).join('')));
 assert.equal(new Set(data.map(t=>norm(t.wordProblemPrompt))).size,60);
 for(const [i,t] of data.entries()){
  assert.equal(t.id,3001+i);assert.equal(t.title,`Задача ${42+i}`);
  assert.ok(isTaskInModule('16',t.id));assert.ok(!isTaskInModule('16',2001+i));
  assert.ok(!legacyCandidates(1600+t.id).some(c=>c.module==='16'&&c.taskId===t.id));
  assert.ok(!oldText.includes(norm(t.wordProblemPrompt)),t.title);
  assert.ok(t.steps.length>=10,`${t.title}: ${t.steps.length} steps`);
  assert.ok(t.steps.filter(s=>/\$[^$]*=/.test(s)).length>=6,`${t.title}: detailed numerical calculations`);
  for(const text of [t.wordProblemPrompt,...t.steps,`$${t.solutionAnswer.replace(',','{,}')}$`]){
   assert.equal((text.match(/\$/g)||[]).length%2,0,t.title);
   for(const [,f] of text.matchAll(/\$([^$]+)\$/g))assert.doesNotThrow(()=>katex.renderToString(f,{throwOnError:true}),`${t.title}: ${f}`);
  }
 }
});

test('independent cash-flow replay and optimisation give every answer',()=>{
 for(const t of data){
  const m=t.model, S=val(m.S), p=val(m.p), x=val(m.x);let expected;
  switch(m.family){
   case 'two_phase_nine':{
    const a=val(m.a),b=val(m.b),r=val(m.r),u=val(m.u);let bal=S,sum=0;const pay=[];
    for(let i=0;i<9;i++){const rate=i<4?r:u, reduction=i<4?a:b,next=bal-reduction;pay.push(bal*(1+rate)-next);sum+=pay[i];bal=next;}
    close(bal,0,t.title);close(sum,val(m.total),t.title);
    expected=[Math.min(...pay),r*100,pay.slice(0,4).reduce((a,b)=>a+b,0),pay[0]-pay[8]][m.answer_mode];break;
   }
   case 'growing_repayment':{
    const a=val(m.a),b=val(m.b),r=val(m.r),u=val(m.u);let bal=S,total=0;const payments=[];
    for(const [i,d] of [a,2*a,3*a,4*a,b,b,b,b,b].entries()){const next=bal-d,pay=bal*(1+(i<4?r:u))-next;payments.push(pay);total+=pay;bal=next;}
    close(bal,0,t.title);close(total,val(m.total),t.title);expected=Math.min(...payments);break;
   }
   case 'unknown_term_rate':{
    const n=m.n,r=val(m.r);close(S*r*(1-1/n),val(m.delta),t.title);close(S+S*r*(n+1)/2,val(m.total),t.title);
    assert.ok(n>3&&Number.isInteger(n));expected=n;break;
   }
   case 'varying_rate':{
    let bal=S,total=0;const payments=[];const rr=val(m.r),red=m.reductions.map(val);
    for(let i=0;i<5;i++){const next=bal-S*red[i],pay=bal*(1+(rr+m.offsets[i])/100)-next;payments.push(pay);total+=pay;bal=next;}
    close(bal,0,t.title);close(total,val(m.total),t.title);expected=m.answer_mode<2?rr:Math.min(...payments);break;
   }
   case 'annuity_rate':close(p*(S*p-x),x,t.title);close(2*x-S,val(m.over),t.title);expected=100*(p-1);break;
   case 'annuity_equal':case 'deposit_equal':{
    let bal=S;for(let i=0;i<(m.n||3);i++)bal=bal*p-x;close(bal,0,t.title);close((m.n||3)*x-S,val(m.over),t.title);expected=S;break;
   }
   case 'annuity_arithmetic':{
    const d=val(m.d);let bal=S;for(let i=0;i<3;i++)bal=bal*p-x-i*d;close(bal,0,t.title);expected=3*x+3*d;close(expected,val(m.total),t.title);break;
   }
   case 'deposit_123':{let bal=S;for(let i=1;i<=3;i++)bal=bal*p-i*x;close(bal,0,t.title);expected=6*x;close(expected,val(m.total),t.title);break;}
   case 'deposit_variable':{
    const p1=val(m.p1),p2=val(m.p2),p3=val(m.p3),c=val(m.c),w=val(m.w);close(((S*p1+c)*p2-w)*p3,val(m.end),t.title);expected=S;break;
   }
   case 'deposit_split':{
    const z=val(m.z),c=val(m.c);close((x*p+c)*p*p+(S-x)*z**3,val(m.finish),t.title);assert.ok(x>=0&&x<=S);expected=x;break;
   }
   case 'factory_price':{
    const a=val(m.a),b=val(m.b),c=val(m.c),h=val(m.h),cost=val(m.cost),q=b+2*a*h;
    close(4*((q-b)**2/(4*a)-c),cost,t.title);assert.ok(4*(((q-0.01-b)**2)/(4*a)-c)<cost);expected=q;break;
   }
   case 'capacity_payback':{
    const A=val(m.A),b=val(m.b),c=val(m.c),cap=val(m.cap),cost=val(m.cost),T=m.T;
    assert.ok((A-b)/2>cap);const max=cap*(A-cap)-b*cap-c;assert.ok((T-1)*max<cost&&T*max>=cost);expected=T;break;
   }
   case 'piecewise_profit':{
    const A=val(m.A),M=val(m.M),c1=val(m.c1),c2=val(m.c2),K=val(m.K);let best=-Infinity;
    for(let n=0;n<=A;n++)best=Math.max(best,n*(A-n)-(n<M?c1*n+K:c2*n+K));
    close(best,val(m.best),t.title);expected=best;break;
   }
   case 'allocation':{
    const T=val(m.T),alpha=val(m.alpha),beta=val(m.beta),fixed=val(m.fixed),x0=(2*T+alpha-beta)/4;
    assert.ok(x0>=0&&x0<=T);close(x0,val(m.x0),t.title);
    expected=x0*(alpha-x0)+(T-x0)*(beta-(T-x0))-fixed;close(expected,val(m.value),t.title);break;
   }
   default:throw Error(`Unknown model ${m.family}`);
  }
  close(Number(t.solutionAnswer.replace(',','.')),expected,t.title);
 }
});

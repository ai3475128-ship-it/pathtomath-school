import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import katex from 'katex';
import { parseEconomicsCondition } from '../src/lib/economics-condition.js';
import { isTaskInModule, legacyCandidates } from '../src/lib/task-modules.js';
const data=JSON.parse(fs.readFileSync('src/lib/ege16-new-tasks.json','utf8'));
const original=fs.readFileSync('src/app/math-profile/[taskNumber]/sectoin16.js','utf8');
const old=[...original.matchAll(/^\s*mathA:\s*("(?:\\.|[^"\\])*")/gm)].map(m=>JSON.parse(m[1]));
const norm=s=>s.toLowerCase().replace(/[^а-яёa-z0-9]/gi,'');
const rat=v=>{const [a,b]=String(v).split('/').map(Number);return b?a/b:a;};
const close=(a,b,msg)=>assert.ok(Math.abs(a-b)<1e-7*Math.max(1,Math.abs(a),Math.abs(b)),`${msg}: ${a} != ${b}`);

test('sixty substantial exercises are unique, typeset and do not reuse previous progress',()=>{
  assert.equal(data.length,60); assert.equal(old.length,41);
  const oldText=old.map(v=>norm(parseEconomicsCondition(v).flatMap(b=>b.parts||b.rows?.flat(2)||[]).map(p=>p.value).join('')));
  assert.equal(new Set(data.map(t=>norm(t.wordProblemPrompt))).size,60);
  assert.equal(new Set(data.map(t=>t.kind)).size,20);
  for(const [i,t] of data.entries()){
    assert.equal(t.id,2001+i);assert.equal(t.title,`Задача ${42+i}`);
    assert.ok(isTaskInModule('16',t.id));assert.ok(!isTaskInModule('16',1001+i));
    assert.ok(!legacyCandidates(1600+t.id).some(c=>c.module==='16'&&c.taskId===t.id));
    assert.ok(!oldText.includes(norm(t.wordProblemPrompt))); assert.ok(t.steps.length>=5);
    for(const text of [t.wordProblemPrompt,...t.steps,`$${t.solutionAnswer.replace(',','{,}')}$`]){
      assert.equal((text.match(/\$/g)||[]).length%2,0,t.title);
      for(const [,formula] of text.matchAll(/\$([^$]+)\$/g))assert.doesNotThrow(()=>katex.renderToString(formula,{throwOnError:true}),`${t.title}: ${formula}`);
    }
  }
});

test('independent repayment, savings and optimisation calculations agree with all answers',()=>{
  for(const t of data){
    const m=t.model, S=rat(m.S), r=rat(m.r), p=rat(m.p), x=rat(m.x), answer=Number(t.solutionAnswer.replace(',','.'));
    let result;
    switch(m.family){
      case 'rate_step': {
        let total=S;for(let k=0;k<5;k++)total+=S*(5-k)/5*(r-.02*k);
        close(total,rat(m.total),t.title);result=100*r;break;
      }
      case 'two_phase': {
        const a=rat(m.a),b=rat(m.b);close(S,3*(a+b),t.title);
        let bal=S,total=0;for(let k=0;k<6;k++){let due=bal*(1+(k<3?r:.2));let next=bal-(k<3?a:b);total+=due-next;bal=next;}
        close(total,rat(m.total),t.title);close(bal,0,t.title);result=100*r;break;
      }
      case 'growing_principal': {
        const a=rat(m.a),b=rat(m.b);let bal=S,total=0;
        for(const d of [a,2*a,3*a,b,b,b]){total+=bal*(1+r)-(bal-d);bal-=d;}
        close(total,rat(m.total),t.title);close(bal,0,t.title);result=100*r;break;
      }
      case 'loan_123': {
        let bal=S;for(let k=1;k<=3;k++)bal=bal*p-k*x;
        close(bal,0,t.title);result=6*x;break;
      }
      case 'deposit_three_rates': close((S*rat(m.p1)+rat(m.c))*rat(m.p2)*rat(m.p3),rat(m.end),t.title);result=S;break;
      case 'deposit_split': {
        const z=rat(m.z);close(x*p*p+(S-x)*z*z,rat(m.total),t.title);result=x;break;
      }
      case 'geom_unknown_both': {
        const f=rat(m.f);close(S*(1+r*(1+f+f*f)),rat(m.total),t.title);
        close(S*(1-f)*(1+r-f),rat(m.delta),t.title);result=S;break;
      }
      case 'annuity_rate': close(p*(S*p-x),x,t.title);close(2*x-S,rat(m.over),t.title);result=100*(p-1);break;
      case 'annuity_principal': case 'deposit_equal': {
        let bal=S;for(let k=0;k<3;k++)bal=bal*p-x;
        close(bal,0,t.title);close(3*x-S,rat(m.over),t.title);result=S;break;
      }
      case 'geometric_debt': {
        const q=rat(m.q);close(S+r*S*(1+q+q*q),rat(m.total),t.title);result=100*r;break;
      }
      case 'grace_cap': {
        const rate=rat(m.rate),lim=rat(m.limit),cap=rat(m.cap),coef=1+rate*4.5;
        assert.ok(coef*cap<=lim&&coef*(cap+1)>lim,t.title);result=cap;break;
      }
      case 'rate_change_principal': {
        const r1=rat(m.r1),r2=rat(m.r2);let bal=S,total=0;
        for(let k=0;k<5;k++){const next=bal-S/5;total+=bal*(1+(k<3?r1:r2))-next;bal=next;}
        close(total,rat(m.total),t.title);result=S;break;
      }
      case 'deposit_top_withdraw': close(((S*p+rat(m.c))*p-rat(m.w))*p,rat(m.end),t.title);result=S;break;
      case 'deposit_rate': close((S*p+rat(m.c))*p,rat(m.end),t.title);result=100*(p-1);break;
      case 'deposit_123': {
        let bal=S;for(let k=1;k<=3;k++)bal=bal*p-k*x;close(bal,0,t.title);result=6*x;break;
      }
      case 'unknown_term_rate': {
        const n=m.n;close(S*r*(1-1/n),rat(m.delta),t.title);close(S*r*(n+1)/2,rat(m.over),t.title);result=n;break;
      }
      case 'factory_payback': {
        const a=rat(m.a),center=rat(m.center),base=rat(m.base),cost=rat(m.build),max=a*center**2-base;
        assert.ok(max*2<cost&&max*3>=cost,t.title);result=3;break;
      }
      case 'profit_target': {
        const lo=rat(m.lo),hi=rat(m.hi),fixed=rat(m.fixed),target=rat(m.target);
        close(lo*(lo+hi-lo)-fixed,target,t.title);assert.ok((lo-1)*(lo+hi-(lo-1))-fixed<target,t.title);result=lo;break;
      }
      case 'allocation': {
        const a=rat(m.a),b=rat(m.b),T=rat(m.T),c=rat(m.c);result=(2*b*T+c)/(2*(a+b));assert.ok(result>=0&&result<=T);break;
      }
      default:throw Error(`Unknown model ${m.family}`);
    }
    close(answer,result,t.title);
  }
});

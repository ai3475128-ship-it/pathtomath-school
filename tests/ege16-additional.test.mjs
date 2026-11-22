import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import katex from 'katex';
import { parseEconomicsCondition } from '../src/lib/economics-condition.js';
import { isTaskInModule, legacyCandidates } from '../src/lib/task-modules.js';

const data = JSON.parse(fs.readFileSync('src/lib/ege16-new-tasks.json', 'utf8'));
const original = fs.readFileSync('src/app/math-profile/[taskNumber]/sectoin16.js', 'utf8');
const old = [...original.matchAll(/^\s*mathA:\s*("(?:\\.|[^"\\])*")/gm)].map((m) => JSON.parse(m[1]));
const normalized = (s) => s.toLowerCase().replace(/[^а-яёa-z0-9]/gi, '');

test('all 60 new questions are unique, typeset, complete and appended after existing questions', () => {
  assert.equal(data.length, 60);
  assert.equal(old.length, 41);
  const oldText = old.map((v) => normalized(parseEconomicsCondition(v).flatMap((b) => b.parts || b.rows?.flat(2) || []).map((p) => p.value).join('')));
  assert.equal(new Set(data.map((t) => normalized(t.wordProblemPrompt))).size, 60);
  assert.ok(new Set(data.map((t) => t.kind)).size >= 30);
  for (const [i, t] of data.entries()) {
    assert.equal(t.id, 1001 + i);
    assert.equal(t.title, `Задача ${42 + i}`);
    assert.ok(isTaskInModule('16', t.id));
    assert.ok(!legacyCandidates(1600 + t.id).some((candidate) => candidate.module === '16' && candidate.taskId === t.id));
    assert.ok(!oldText.includes(normalized(t.wordProblemPrompt)), `duplicate ${t.title}`);
    assert.ok(t.steps.length >= 2 && t.solutionAnswer);
    for (const text of [t.wordProblemPrompt, ...t.steps, `$${t.solutionAnswer.replace(',', '{,}')}$`]) {
      assert.equal((text.match(/\$/g) || []).length % 2, 0, t.title);
      for (const [, formula] of text.matchAll(/\$([^$]+)\$/g))
        assert.doesNotThrow(() => katex.renderToString(formula, { throwOnError: true }), `${t.title}: ${formula}`);
    }
  }
});

const rat = (v) => { const [n,d] = String(v).split('/').map(Number); return d ? n/d : n; };
function expected(t) {
  const m=t.model, p=rat(m.p), r=rat(m.r), s=rat(m.s), x=rat(m.payment), a=rat(m.a), c=rat(m.c);
  switch (m.family) {
    case 'declining_total': return s + r * s * (m.n+1)/2;
    case 'declining_first': return s/m.n+r*s;
    case 'declining_last': return s/m.n*(1+r);
    case 'declining_rate': return 100*r;
    case 'annuity_payment': return s*p**3/(p*p+p+1);
    case 'annuity_principal': return x*(p*p+p+1)/p**3;
    case 'annuity_over': return 3*x-s;
    case 'annuity_balance': return x/p;
    case 'deposit_topup': return (a*p+c)*p;
    case 'deposit_withdraw': return (a*p-c)*p;
    case 'deposit_initial': return a;
    case 'deposit_variable': return a*p*rat(m.p2)-a;
    case 'profit_vertex': return (m.A-m.c)/(2*m.b);
    case 'profit_value': return (m.A-m.c)**2/(4*m.b)-m.f;
    case 'capacity': return rat(m.cap);
    case 'profit_threshold': return m.lo+1;
    case 'integer_vertex': return Math.floor(m.price/2);
    case 'average_cost': return m.h;
    case 'bespoke': return null;
    default: throw Error(`Unknown model: ${m.family}`);
  }
}
test('credit balances, payments, interest and optima agree with independent calculations', () => {
  for (const t of data) {
    const value = expected(t);
    if (value !== null) assert.ok(Math.abs(value - Number(t.solutionAnswer.replace(',', '.'))) < 1e-7, `${t.title}: expected ${value}, got ${t.solutionAnswer}`);
  }
  // Independently replay key nonstandard schedules and constraints.
  const answer = (kind) => Number(data.find((t) => t.kind === kind).solutionAnswer.replace(',', '.'));
  assert.equal(answer('переменный платёж'), 1200/2);
  assert.equal(answer('платежи в заданном отношении'), 1440/3.2);
  assert.equal(answer('срок кредита по переплате'), 420/60-1);
  assert.equal(answer('ограничение на первый платёж'), Math.ceil(1800/270));
  assert.ok(Math.abs(answer('сравнение кредитных программ') - ((0.09-0.1)*2500+30)) < 1e-9);
  assert.equal(answer('ежегодный взнос'), (500*1.2+100)*1.2+100);
  assert.equal(answer('закупка и хранение'), Math.sqrt(960000/6));
  assert.equal(answer('скидка и выручка'), 200);
  assert.ok(Math.abs(answer('распределение инвестиций') - 19.9/0.2) < 1e-9);
});

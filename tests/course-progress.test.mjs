import test from 'node:test';
import assert from 'node:assert/strict';
import { practiceGroups, trialInsights, getCourseProgress } from '../src/lib/course-progress.js';
import { openDatabase } from '../src/lib/db.js';
import { mkdtempSync, rmSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';

test('practice separates preparatory tasks, bank and olympiad courses', () => {
  const progress = [{module:'14-intro',taskId:1},{module:'ege-optimization',taskId:1},{module:'olympiad-1-intro',taskId:1},{module:'ege-optimization',taskId:999}];
  const math = practiceGroups('ege-math', progress);
  assert.equal(math[0].rows.find((r) => r.label.startsWith('№15')).done, 1);
  assert.equal(math[1].rows.find((r) => r.label.startsWith('№17')).done, 1);
  assert.equal(math[1].rows.find((r) => r.label.startsWith('№17')).total, 14);
  const olymp = practiceGroups('olympiad-math', progress);
  assert.equal(olymp[0].rows[0].done, 1);
  assert.equal(olymp[1].rows.reduce((n, r) => n + r.done, 0), 0);
  assert.equal(practiceGroups('physics', progress)[1].rows.length, 26);
});

test('trial weaknesses use only explicitly graded tasks and the selected course', () => {
  const trials = [{id:'t1',date:'2026-11-01',courseId:'ege-math',status:'Проверено',score:40,maxScore:100}, {id:'t2',date:'2026-11-02',courseId:'ege-math',status:'Проверено',score:80,maxScore:100}, {id:'physics',date:'2026-11-03',courseId:'physics',status:'Проверено',score:50,maxScore:100}, {id:'pending',date:'2026-11-04',courseId:'ege-math',status:'На проверке',score:0,maxScore:100}];
  const results = [{trialId:'t1',taskNumber:5,solved:0},{trialId:'t2',taskNumber:5,solved:0},{trialId:'t2',taskNumber:6,solved:1},{trialId:'physics',taskNumber:5,solved:1},{trialId:'pending',taskNumber:5,solved:1}];
  const insight = trialInsights(trials.filter((t)=>t.courseId==='ege-math'), results, 'ege-math');
  assert.deepEqual(insight.checked.map((t)=>t.id), ['t1','t2']);
  assert.deepEqual(insight.byTask, [{number:5,solved:0,checked:2,percent:0},{number:6,solved:1,checked:1,percent:100}]);
  assert.equal(insight.weak[0].number, 5);
});

test('numbers from different olympiad papers remain separate', () => {
  const trials = ['one','two'].map((id) => ({ id, title:id, date:'2026-11-01', courseId:'olympiad-math', status:'Проверено', score:50, maxScore:100 }));
  const result = trialInsights(trials, [{trialId:'one',taskNumber:5,solved:0},{trialId:'two',taskNumber:5,solved:1}], 'olympiad-math');
  assert.equal(result.byTask.length, 0);
  assert.deepEqual(result.byTrial.map((r) => [r.trial.id,r.rows[0].solved]), [['one',0],['two',1]]);
});

test('course report isolates users, tracks currently marked tasks and preserves old work', async (t) => {
  const dir=mkdtempSync(path.join(os.tmpdir(),'course-progress-')), db=openDatabase(path.join(dir,'db.sqlite'));
  t.after(()=>{db.dispose();rmSync(dir,{recursive:true,force:true});});
  await db.run("INSERT INTO User(id,email,name,password,role) VALUES('a','a@example.test','A','x','PREMIUM_STUDENT'),('b','b@example.test','B','x','PREMIUM_STUDENT')");
  await db.run("INSERT INTO TaskProgress(userId,module,taskId,completedAt) VALUES('a','ege-optimization',1,'2026-11-01T09:00:00Z'),('a','14-intro',1,'2026-11-02T09:00:00Z'),('b','ege-optimization',2,'2026-11-02T09:00:00Z')");
  await db.run("INSERT INTO Trial(id,userId,title,date,courseId,status,score,maxScore) VALUES('t','a','Math','2026-11-02','ege-math','Проверено',75,100)");
  await db.run("INSERT INTO TrialTaskResult(trialId,taskNumber,solved) VALUES('t',5,0)");
  const report=await getCourseProgress(db,'a','ege-math',true);
  assert.deepEqual(report.practiceTimeline.map((p)=>p.value), [1,2]);
  assert.equal(report.byTask[0].number, 5);
  assert.equal(report.byTask[0].solved, 0);
  assert.equal((await getCourseProgress(db,'b','ege-math',true)).checked.length, 0);
  await db.run("DELETE FROM Trial WHERE id='t'");
  assert.equal((await db.get("SELECT COUNT(*) AS n FROM TrialTaskResult WHERE trialId='t'")).n,0);
});

test('migration adds task results without changing existing trial grades', async (t) => {
  const dir=mkdtempSync(path.join(os.tmpdir(),'trial-migration-')), file=path.join(dir,'db.sqlite');
  const old=new DatabaseSync(file);
  old.exec("CREATE TABLE User(id TEXT PRIMARY KEY,email TEXT UNIQUE,name TEXT,password TEXT,createdAt TEXT,role TEXT); INSERT INTO User VALUES('a','a@test','A','x','2026','STUDENT'); CREATE TABLE Trial(id TEXT PRIMARY KEY,userId TEXT,title TEXT,date TEXT,score INTEGER); INSERT INTO Trial VALUES('old','a','Old exam','2026-01-01',67)");
  old.close();
  const db=openDatabase(file);
  t.after(()=>{db.dispose();rmSync(dir,{recursive:true,force:true});});
  assert.equal((await db.get("SELECT score FROM Trial WHERE id='old'")).score,67);
  assert.equal((await db.get("SELECT COUNT(*) AS n FROM TrialTaskResult")).n,0);
});

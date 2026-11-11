import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { DatabaseSync } from 'node:sqlite';
import { openDatabase } from '../src/lib/db.js';
import { PHYSICS_SECTIONS, OLYMPIAD_TOPICS, SUBJECTS } from '../src/lib/learning-catalog.js';

test('catalogs use distinct identifiers and cover the supplied physics topics', () => {
  assert.equal(PHYSICS_SECTIONS.length, 26);
  assert.deepEqual(PHYSICS_SECTIONS.map((s) => s.title), [
    'Кинематика', 'Динамика', 'Импульс. Законы сохранения в механике',
    'Статика. Гидростатика. Механические колебания и волны', 'Механика', 'Механика',
    'Молекулярная физика', 'Термодинамика', 'МКТ и Термодинамика', 'МКТ и Термодинамика',
    'Электрическое поле. Законы постоянного тока', 'Магнитное поле. Электромагнитная индукция',
    'Оптика. Электромагнитные колебания и волны', 'Электродинамика', 'Электродинамика',
    'Квантовая физика', 'Квантовая физика',
    'Выбор верных утверждений. Физический смысл физических величин, законов и закономерностей',
    'Определение показаний измерительных приборов', 'Планирование эксперимента', 'Качественная задача',
    'Механика', 'МКТ и Термодинамика', 'МКТ. Термодинамика', 'Электродинамика', 'Механика',
  ]);
  assert.ok(PHYSICS_SECTIONS.every((section) => !/[()]/.test(section.title)));
  assert.deepEqual(PHYSICS_SECTIONS.map((s) => s.number), Array.from({ length: 26 }, (_, i) => i + 1));
  assert.equal(new Set(OLYMPIAD_TOPICS.map((s) => s.id)).size, OLYMPIAD_TOPICS.length);
  assert.equal(SUBJECTS.length, 3);
});

test('migration preserves existing videos and assigns existing staff to maths once', (t) => {
  const dir = mkdtempSync(path.join(os.tmpdir(), 'school-catalog-'));
  const file = path.join(dir, 'database.db');
  const old = new DatabaseSync(file);
  old.exec(`CREATE TABLE User(id TEXT PRIMARY KEY,email TEXT UNIQUE,name TEXT,password TEXT,createdAt TEXT,role TEXT);
    INSERT INTO User VALUES('a','a@test','A','x','2026','ADMIN'),('t','t@test','T','x','2026','TEACHER'),('s','s@test','S','x','2026','STUDENT');
    CREATE TABLE Video(id TEXT PRIMARY KEY,title TEXT,description TEXT,url TEXT,isPremium INTEGER,sectionNum INTEGER,createdAt TEXT);
    INSERT INTO Video VALUES('v','Old',NULL,'https://kinescope.io/embed/a',1,1,'2026');`);
  old.close();
  const db = openDatabase(file);
  t.after(() => { db.dispose(); rmSync(dir, { recursive: true, force: true }); });
  assert.deepEqual(db.transaction((raw) => raw.prepare('SELECT userId,subject FROM TeacherSubject ORDER BY userId').all().map((x) => ({ ...x }))), [
    { userId: 'a', subject: 'ege-math' }, { userId: 't', subject: 'ege-math' },
  ]);
  assert.equal(db.transaction((raw) => raw.prepare('SELECT subject FROM Video WHERE id=?').get('v').subject), 'ege-math');
});

test('each physics card renders its own illustration for the complete list', async () => {
  const { readFileSync } = await import('node:fs');
  const Module = (await import('node:module')).default;
  const React = (await import('react')).default;
  const { renderToStaticMarkup } = await import('react-dom/server');
  const { transformSync } = await import('next/dist/build/swc/index.js');
  const filename = path.resolve('src/app/components/physics-cards/PhysicsPreview.js');
  const source = readFileSync(filename, 'utf8').replace(
    "import styles from '../olympiad-cards/OlympiadPreview.module.css';",
    "import React from 'react'; const styles = new Proxy({}, {get: (_, key) => key});",
  );
  const code = transformSync(source, { filename, jsc: { parser: { syntax: 'ecmascript', jsx: true }, transform: { react: { runtime: 'classic' } } }, module: { type: 'commonjs' } }).code;
  const compiled = new Module(filename);
  compiled.filename = filename;
  compiled.paths = Module._nodeModulePaths(path.dirname(filename));
  compiled._compile(code, filename);
  const illustrations = PHYSICS_SECTIONS.map(({ number }) => renderToStaticMarkup(React.createElement(compiled.exports.default, { number })));
  assert.ok(illustrations.every((markup) => markup.includes('<svg') && markup.includes('<path')));
  assert.equal(new Set(illustrations).size, 26);
});

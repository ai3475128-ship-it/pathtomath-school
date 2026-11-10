import { spawn } from "node:child_process";
import { EventEmitter, once } from "node:events";
import { mkdtemp, rm, mkdir, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import http from "node:http";
import net from "node:net";
import assert from "node:assert/strict";
import bcrypt from "bcryptjs";
import { openDatabase } from "../src/lib/db.js";
import { createSession } from "../src/lib/session.js";
import { olympiads } from "../src/lib/olympiad-calendar.js";
const directory = await mkdtemp(path.join(os.tmpdir(), "school-http-")),
  filename = path.join(directory, "dev.db"),
  db = openDatabase(filename),
  password = "Http-test-password-2026",
  hash = await bcrypt.hash(password, 10),
  sessions = {};
for (const [id, role] of Object.entries({
  admin: "ADMIN",
  teacher: "TEACHER",
  a: "PREMIUM_STUDENT",
  b: "PREMIUM_STUDENT",
  free: "STUDENT",
})) {
  await db.run(
    "INSERT INTO User(id,email,name,password,role,createdAt) VALUES(?,?,?,?,?,?)",
    [
      id,
      `${id}@example.invalid`,
      `Test ${id}`,
      hash,
      role,
      new Date().toISOString(),
    ],
  );
  sessions[id] = "userSession=" + (await createSession(db, id));
}
await db.run(
  "INSERT INTO Homework(id,userId,title,createdAt,batchId) VALUES('hw-a','a','HTTP test',?,'batch-a'),('hw-b','b','HTTP test',?,'batch-b')",
  [new Date().toISOString(), new Date().toISOString()],
);
await db.run(
  "INSERT INTO Trial(id,userId,title,date,batchId) VALUES('trial-a','a','HTTP trial','2026-11-03','trial-batch')",
);
await mkdir(path.join(directory, "legacy"));
await writeFile(
  path.join(directory, "legacy", "fixture.pdf"),
  "%PDF-1.7\nLegacy test",
);
await db.run(
  "UPDATE Homework SET description='/uploads/fixture.pdf' WHERE id='hw-a'",
);
const messages = [],
  mailEvents = new EventEmitter();
async function mailCode(index, digits) {
  if (!messages[index])
    await once(mailEvents, "message", { signal: AbortSignal.timeout(5000) });
  const message = messages[index];
  assert.ok(message);
  let body = message.slice(message.indexOf("\r\n\r\n") + 4);
  if (/Content-Transfer-Encoding: base64/i.test(message))
    body = Buffer.from(body.replace(/\s/g, ""), "base64").toString();
  else body = body.replace(/=\r\n/g, "");
  const code = body.match(/\b[0-9]+\b/g)?.find(value => value.length === digits);
  assert.ok(code);
  return code;
}
const smtp = net.createServer((socket) => {
  socket.setEncoding("utf8");
  socket.on("error", () => {});
  socket.write("220 audit.local ESMTP\r\n");
  let buffer = "",
    collecting = false,
    message = "";
  socket.on("data", (data) => {
    buffer += data;
    while (buffer.includes("\r\n")) {
      const end = buffer.indexOf("\r\n"),
        line = buffer.slice(0, end);
      buffer = buffer.slice(end + 2);
      if (collecting) {
        if (line === ".") {
          messages.push(message);
          mailEvents.emit("message");
          message = "";
          collecting = false;
          socket.write("250 Accepted\r\n");
        } else message += line + "\r\n";
      } else if (/^EHLO|^HELO/.test(line))
        socket.write("250-audit.local\r\n250 AUTH PLAIN\r\n");
      else if (line.startsWith("AUTH ")) socket.write("235 Authenticated\r\n");
      else if (line === "DATA") {
        collecting = true;
        socket.write("354 Send message\r\n");
      } else if (line === "QUIT") socket.end("221 Bye\r\n");
      else socket.write("250 OK\r\n");
    }
  });
});
await new Promise((resolve) => smtp.listen(0, "127.0.0.1", resolve));
let ready,
  logs = "";
const child = spawn(
  process.execPath,
  [
    "node_modules/next/dist/bin/next",
    "start",
    "--hostname",
    "127.0.0.1",
    "--port",
    "3131",
  ],
  {
    cwd: path.resolve(import.meta.dirname, ".."),
    stdio: ["ignore", "pipe", "pipe"],
    env: {
      ...process.env,
      NEXT_TELEMETRY_DISABLED: "1",
      DATABASE_PATH: filename,
      UPLOAD_DIR: path.join(directory, "uploads"),
      LEGACY_UPLOAD_DIR: path.join(directory, "legacy"),
      APP_ORIGIN: "http://127.0.0.1:3131",
      SMTP_HOST: "127.0.0.1",
      SMTP_PORT: String(smtp.address().port),
      SMTP_USER: "test@example.invalid",
      SMTP_PASSWORD: "local-fixture",
      SMTP_FROM: "test@example.invalid",
    },
  },
);
const started = new Promise((resolve, reject) => {
  ready = resolve;
  child.once("exit", (code) =>
    reject(Error(`Server exited ${code}: ${logs.slice(-1000)}`)),
  );
});
child.stdout.on("data", (bytes) => {
  logs += String(bytes);
  if (/Ready|started server/i.test(String(bytes))) ready();
});
child.stderr.on("data", (bytes) => (logs += String(bytes)));
const timer = setTimeout(() => {
  console.error("HTTP test time limit");
  child.kill("SIGTERM");
  process.exitCode = 1;
}, 150000);
function request(url, { method = "GET", cookie, headers = {}, body } = {}) {
  return new Promise((resolve, reject) => {
    const req = http.request(
      {
        hostname: "127.0.0.1",
        port: 3131,
        path: url,
        method,
        headers: { ...(cookie ? { Cookie: cookie } : {}), ...headers },
      },
      (res) => {
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () =>
          resolve({
            status: res.statusCode,
            headers: res.headers,
            text: Buffer.concat(chunks).toString(),
          }),
        );
      },
    );
    req.on("error", reject);
    req.setTimeout(45000, () => req.destroy(Error(`Timeout: ${url}`)));
    req.end(body);
  });
}
async function formRequest(url, form, cookie) {
  const encoded = new Request("http://127.0.0.1:3131" + url, {
      method: "POST",
      body: form,
    }),
    body = Buffer.from(await encoded.arrayBuffer());
  return request(url, {
    method: "POST",
    cookie,
    headers: {
      Origin: "http://127.0.0.1:3131",
      "Content-Type": encoded.headers.get("Content-Type"),
      "Content-Length": body.length,
    },
    body,
  });
}
function action(html, field) {
  const forms = [...html.matchAll(/<form\b[^>]*>[\s\S]*?<\/form>/g)].map(
      (m) => m[0],
    ),
    selected = forms.find((f) => f.includes(`name="${field}"`)),
    id = selected?.match(/name="\$ACTION_ID_([^"]+)"/)?.[1];
  assert.ok(id, `Missing action form: ${field}`);
  return id;
}
async function invoke(url, id, fields, cookie) {
  const form = new FormData();
  form.set("$ACTION_ID_" + id, "");
  for (const [k, v] of Object.entries(fields)) form.set(k, v);
  return formRequest(url, form, cookie);
}
async function progress(cookie, data, origin = "http://127.0.0.1:3131") {
  const body = JSON.stringify(data);
  return request("/api/user-task-progress", {
    method: "POST",
    cookie,
    headers: {
      Origin: origin,
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(body),
    },
    body,
  });
}
let passed = 0;
function check(label) {
  passed++;
  console.log(`PASS ${label}`);
}
try {
  await started;
  for (const url of [
    "/",
    "/login",
    "/register",
    "/teachers",
    "/math-profile",
    "/math-profile/15",
    "/math-profile/olympiad-1-intro",
  ])
    assert.equal((await request(url)).status, 200, url);
  check("public pages and task banks");
  const olympiadCalendar = await request("/olympiad-calendar");
  assert.equal(olympiadCalendar.status, 200);
  assert.match(olympiadCalendar.text, /Календарь олимпиад по математике/);
  assert.match(olympiadCalendar.text, /Ломоносов/);
  assert.match(olympiadCalendar.text, /<title>Календарь олимпиад/);
  assert.match(olympiadCalendar.text, /href="https:\/\/olymp.msu.ru\/rus\/event\/request\/11014/);
  const filteredCalendar = await request(`/olympiad-calendar?q=${encodeURIComponent("Росатом")}&level=II`);
  assert.match(filteredCalendar.text, /Росатом/);
  assert.doesNotMatch(filteredCalendar.text, /Санкт-Петербургская олимпиада школьников/);
  const verchenko = await request(`/olympiad-calendar?q=${encodeURIComponent("Верченко")}&level=II`);
  assert.match(verchenko.text, /Верченко по математике и криптографии/);
  assert.match(verchenko.text, /1–23 ноября 2026/);
  assert.match(verchenko.text, /29 ноября 2026/);
  assert.equal((verchenko.text.match(/<a href="https:\/\/v-olymp.ru\/olymp\/cryptography"/g) || []).length, 1, "One card should contain both stages and link to the organizer");
  assert.doesNotMatch(olympiadCalendar.text, /Ближайшие даты|Прошедшие даты|Перечневые олимпиады по математике и криптографии/);
  assert.doesNotMatch(olympiadCalendar.text, /↗/);
  const todayMoscow = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Moscow', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
  const verchenkoPosition = olympiadCalendar.text.indexOf('Верченко');
  const fiztehPosition = olympiadCalendar.text.indexOf('Физтех');
  assert.ok(todayMoscow <= '2026-11-29' ? verchenkoPosition < fiztehPosition : verchenkoPosition > fiztehPosition, 'Confirmed completed olympiads should appear after those without dates');
  assert.match(olympiadCalendar.text, /max-w-\[1800px\]/);
  assert.match(olympiadCalendar.text, /2xl:grid-cols-4/);
  assert.match(olympiadCalendar.text, /auto-rows-fr/);
  assert.match(verchenko.text, /<dt[^>]*>Регистрация<\/dt>/);
  assert.match(verchenko.text, /<dt[^>]*>Отборочный этап<\/dt>/);
  assert.match(verchenko.text, /<dt[^>]*>Заключительный этап<\/dt>/);
  assert.doesNotMatch(verchenko.text, /Задания доступны на сайте олимпиады/);
  assert.doesNotMatch(verchenko.text, /Источник даты ↗|Регистрация ↗|Сайт олимпиады ↗/);
  assert.match(verchenko.text, /hover:bg-sky-500/);
  assert.match(verchenko.text, /dark:hover:bg-\[#634EE4\]/);

  const home = await request("/");
  assert.match(home.text, /href="\/olympiads"/);
  assert.match(home.text, /href="\/math-profile"/);
  const egeHub = await request('/math-profile');
  assert.match(egeHub.text, /ЕГЭ Математика/);
  assert.match(egeHub.text, /ЕГЭ Физика/);
  const mathHub = await request('/math-profile/ege');
  assert.match(mathHub.text, /href="\/math-profile\/ege\/intro"/);
  assert.match(mathHub.text, /href="\/math-profile\/ege\/main"/);
  const physicsHub = await request('/math-profile/physics');
  assert.match(physicsHub.text, /href="\/math-profile\/physics\/intro"/);
  assert.match(physicsHub.text, /href="\/math-profile\/physics\/main"/);
  for (const path of ['/math-profile/physics/intro', '/math-profile/physics/main']) {
    const physicsPage = await request(path);
    assert.equal(physicsPage.status, 200, path);
    assert.match(physicsPage.text, /пока не добавлены/);
  }
  const olympiadHub = await request('/olympiads');
  for (const href of ['/olympiad-calendar', '/math-profile/olympiads/intro', '/math-profile/olympiads/main', '/olympiads/tasks']) {
    assert.ok(olympiadHub.text.includes(`href="${href}"`), href);
  }
  const directory = await request('/olympiads/tasks');
  assert.equal(directory.status, 200);
  for (const olympiad of olympiads) {
    assert.ok(directory.text.includes(`href="/olympiads/tasks/${olympiad.id}"`), olympiad.id);
    const page = await request(`/olympiads/tasks/${olympiad.id}`);
    assert.equal(page.status, 200, olympiad.id);
    assert.match(page.text.replaceAll('<!-- -->', ''), /Задачи для 8 класса пока не добавлены/);
    for (const grade of ['8', '9', '10', '11']) assert.ok(page.text.includes(`?grade=${grade}`), `${olympiad.id}: ${grade} класс`);
  }
  assert.equal((await request('/olympiads/tasks/unknown-olympiad')).status, 404);
  for (const grade of ['8', '9', '10', '11']) {
    const page = await request(`/olympiads/tasks/hse?grade=${grade}`);
    assert.match(page.text.replaceAll('<!-- -->', ''), new RegExp(`Задачи для ${grade} класса пока не добавлены`));
    assert.doesNotMatch(page.text, /Алгоритм Евклида/);
  }
  assert.match((await request('/olympiads/tasks/hse?grade=12')).text.replaceAll('<!-- -->', ''), /Задачи для 8 класса пока не добавлены/);
  check('ЕГЭ and olympiad sections link to all competition pages');
  for (const [path, user] of [["/dashboard", "free"], ["/profile", "a"], ["/teacher-dashboard", "teacher"], ["/admin-panel", "admin"]]) {
    const cabinet = await request(path, {cookie: sessions[user]});
    assert.equal(cabinet.status, 200, path);
    assert.match(cabinet.text, /Даты и регистрация на олимпиады по математике/, path);
    assert.ok(cabinet.text.includes('href="/math-profile"'), path);
    assert.ok(cabinet.text.includes('href="/olympiads"'), path);
  }
  check("public olympiad calendar, filters, search metadata and role cabinet links");
  const forged =
      "userSession=" +
      Buffer.from(
        JSON.stringify({
          id: "admin",
          email: "admin@example.invalid",
          role: "ADMIN",
        }),
      ).toString("base64"),
    denied = await request("/admin-panel", { cookie: forged });
  assert.ok(denied.status >= 300 && denied.status < 400);
  check("forged administrator cookie rejected");
  const admin = await request("/admin-panel", { cookie: sessions.admin });
  assert.equal(admin.status, 200);
  const createTeacher = action(admin.text, "password"),
    fields = {
      name: "Unauthorized teacher",
      email: "injected@example.invalid",
      password,
    };
  await invoke("/admin-panel", createTeacher, fields);
  await invoke("/admin-panel", createTeacher, fields, sessions.a);
  assert.equal(
    await db.get("SELECT id FROM User WHERE email='injected@example.invalid'"),
    undefined,
  );
  check("anonymous and student teacher creation blocked");
  await invoke(
    "/admin-panel",
    createTeacher,
    { ...fields, email: "new-teacher@example.invalid" },
    sessions.admin,
  );
  assert.equal(
    (
      await db.get(
        "SELECT role FROM User WHERE email='new-teacher@example.invalid'",
      )
    ).role,
    "TEACHER",
  );
  check("authorized teacher creation");
  const homeworks = await request("/homeworks", { cookie: sessions.a });
  assert.equal(homeworks.status, 200);
  const submit = action(homeworks.text, "solutionFile");
  await invoke(
    "/homeworks",
    submit,
    {
      hwId: "hw-b",
      solutionFile: new File(["%PDF-1.7\nfixture"], "solution.pdf"),
    },
    sessions.a,
  );
  assert.equal(
    (await db.get("SELECT solutionUrl FROM Homework WHERE id='hw-b'"))
      .solutionUrl,
    "",
  );
  check("foreign homework modification blocked");
  await invoke(
    "/homeworks",
    submit,
    {
      hwId: "hw-a",
      solutionFile: new File(["<html>inert</html>"], "solution.html"),
    },
    sessions.a,
  );
  assert.equal(
    (await db.get("SELECT solutionUrl FROM Homework WHERE id='hw-a'"))
      .solutionUrl,
    "",
  );
  check("HTML upload rejected");
  await invoke(
    "/homeworks",
    submit,
    {
      hwId: "hw-a",
      solutionFile: new File(["%PDF-1.7\nfixture"], "solution.pdf"),
    },
    sessions.a,
  );
  const work = await db.get(
    "SELECT solutionUrl,status FROM Homework WHERE id='hw-a'",
  );
  assert.equal(work.status, "На проверке");
  assert.match(work.solutionUrl, /^\/api\/files\//);
  assert.equal((await request(work.solutionUrl)).status, 401);
  assert.equal(
    (await request(work.solutionUrl, { cookie: sessions.b })).status,
    404,
  );
  assert.equal(
    (await request(work.solutionUrl, { cookie: sessions.a })).status,
    200,
  );
  assert.equal((await request("/uploads/fixture.pdf")).status, 401);
  assert.equal(
    (await request("/uploads/fixture.pdf", { cookie: sessions.b })).status,
    404,
  );
  assert.equal(
    (await request("/uploads/fixture.pdf", { cookie: sessions.a })).status,
    200,
  );
  check("private and legacy file authorization");
  const supervisor = await request("/supervisor/students/a", {
    cookie: sessions.admin,
  });
  assert.equal(supervisor.status, 200);
  await invoke(
    "/supervisor/students/a",
    action(supervisor.text, "mark"),
    { hwId: "hw-a", studentId: "a", mark: "100", comment: "Unauthorized" },
    sessions.a,
  );
  assert.equal(
    (await db.get("SELECT mark FROM Homework WHERE id='hw-a'")).mark,
    "—",
  );
  await invoke(
    "/supervisor/students/a",
    action(supervisor.text, "mark"),
    { hwId: "hw-a", studentId: "b", mark: "5", comment: "Checked" },
    sessions.teacher,
  );
  assert.equal(
    (await db.get("SELECT mark FROM Homework WHERE id='hw-a'")).mark,
    "5",
  );
  check("grade changes require teacher permission");
  await invoke(
    "/supervisor/students/a",
    action(supervisor.text, "currentStatus"),
    { studentId: "a", currentStatus: "true" },
    sessions.teacher,
  );
  assert.equal(
    (await db.get("SELECT role FROM User WHERE id='a'")).role,
    "PREMIUM_STUDENT",
  );
  check("teacher cannot change subscription");
  const blockForm = action(supervisor.text, "blocked");
  await invoke("/supervisor/students/a", blockForm, { studentId: "b", blocked: "1" }, sessions.teacher);
  assert.equal((await db.get("SELECT isBlocked FROM User WHERE id='b'")).isBlocked, 0);
  await invoke("/supervisor/students/a", blockForm, { studentId: "b", blocked: "1" }, sessions.admin);
  assert.equal((await db.get("SELECT isBlocked FROM User WHERE id='b'")).isBlocked, 1);
  assert.equal((await request('/profile', { cookie: sessions.b })).status, 307);
  await invoke("/supervisor/students/a", blockForm, { studentId: "b", blocked: "0" }, sessions.admin);
  assert.equal((await db.get("SELECT isBlocked FROM User WHERE id='b'")).isBlocked, 0);
  assert.equal((await request('/profile', { cookie: sessions.b })).status, 307);
  sessions.b = "userSession=" + (await createSession(db, "b"));
  check("only administrators can block and restore a student; revoked sessions stay invalid");
  for (const data of [
    { module: "15", taskId: 101, solved: true },
    { module: "16", taskId: 1, solved: true },
    { module: "15", taskId: 101, solved: true },
    { module: "olympiad-1-intro", taskId: 1, solved: true },
    { module: "olympiad-2-intro", taskId: 1, solved: true },
  ])
    assert.equal((await progress(sessions.a, data)).status, 200);
  assert.equal(
    (
      await db.get(
        "SELECT COUNT(*) AS count FROM TaskProgress WHERE userId='a'",
      )
    ).count,
    4,
  );
  assert.deepEqual(
    JSON.parse(
      (
        await request("/api/user-task-progress?module=15", {
          cookie: sessions.b,
        })
      ).text,
    ).solvedSubTasks,
    [],
  );
  assert.equal(
    (
      await progress(
        sessions.a,
        { module: "15", taskId: 101, solved: false },
        "https://evil.invalid",
      )
    ).status,
    403,
  );
  assert.equal(
    (await progress(forged, { module: "15", taskId: 101, solved: false }))
      .status,
    401,
  );
  check("progress isolation, idempotency and CSRF");
  assert.equal((await progress(sessions.a, { module: "ege-optimization", taskId: 1, solved: true })).status, 200);
  assert.deepEqual(JSON.parse((await request("/api/user-task-progress?module=ege-optimization", {cookie: sessions.a})).text).solvedSubTasks, [1]);
  assert.deepEqual(JSON.parse((await request("/api/user-task-progress?module=ege-optimization", {cookie: sessions.b})).text).solvedSubTasks, []);
  check("optimization task progress belongs to the correct student");
  const optimizationPage = await request("/math-profile/17");
  assert.equal(optimizationPage.status, 200);
  assert.ok(optimizationPage.text.includes("Таблица производных и правила дифференцирования"));
  const equationsPage = await request("/math-profile/14");
  assert.ok(!equationsPage.text.includes("Таблица производных и правила дифференцирования"));
  check("derivative reference is shown on the optimization task page");
  const profile = await request("/profile", { cookie: sessions.a });
  assert.equal(profile.status, 200);
  const optimizationLink = profile.text.match(/<a\b[^>]*href="\/math-profile\/17"[^>]*>([\s\S]*?)<\/a>/)?.[1];
  assert.ok(optimizationLink, "Optimization section should be visible in the student profile");
  const optimizationText = optimizationLink.replace(/<[^>]+>/g, "").replace(/\s+/g, " ");
  assert.match(optimizationText, /Задание №17\s*1\/14/);
  const updatedSupervisor = await request("/supervisor/students/a", {cookie: sessions.teacher});
  const teacherText = updatedSupervisor.text.replace(/<[^>]+>/g, "").replace(/\s+/g, " ");
  assert.match(teacherText, /№17\s*1\/14/);
  check("optimization totals appear in student and teacher profiles");
  await invoke(
    "/profile",
    action(profile.text, "noteContent"),
    { userId: "b", selectedDate: "2026-11-03", noteContent: "Study math" },
    sessions.a,
  );
  assert.equal(
    (await db.get("SELECT content FROM Notes WHERE userId='a'")).content,
    "Study math",
  );
  assert.equal(
    await db.get("SELECT id FROM Notes WHERE userId='b'"),
    undefined,
  );
  check("calendar notes use authenticated user");
  const trials = await request("/trials", { cookie: sessions.a });
  assert.equal(trials.status, 200);
  await invoke(
    "/trials",
    action(trials.text, "solutionFile"),
    {
      trialId: "trial-a",
      solutionFile: new File(["%PDF-1.7\ntrial"], "trial.pdf"),
    },
    sessions.a,
  );
  await invoke(
    "/supervisor/students/a",
    action(supervisor.text, "score"),
    { trialId: "trial-a", studentId: "a", score: "0" },
    sessions.teacher,
  );
  const trial = await db.get(
    "SELECT status,score,solutionUrl FROM Trial WHERE id='trial-a'",
  );
  assert.equal(trial.status, "Проверено");
  assert.equal(trial.score, 0);
  assert.ok(trial.solutionUrl);
  check("trial submission and zero-score grading");
  const form = new FormData();
  form.set("title", "Protected lecture");
  form.set("url", "https://kinescope.io/embed/abc123");
  form.set("sectionNum", "1");
  form.set("isPremium", "on");
  assert.equal((await formRequest("/api/videos/create", form)).status, 401);
  assert.equal(
    (await formRequest("/api/videos/create", form, sessions.a)).status,
    403,
  );
  assert.equal(
    (await formRequest("/api/videos/create", form, sessions.teacher)).status,
    303,
  );
  const video = await request("/videos/1", { cookie: sessions.a });
  assert.equal(video.status, 200);
  assert.ok(video.text.includes("https://kinescope.io/embed/abc123"));
  assert.match(video.text, /Разрешить и показать видео/);
  assert.doesNotMatch(video.text, /<iframe\b/);
  const freeVideo = await request("/videos/1", { cookie: sessions.free });
  assert.equal(freeVideo.status, 200);
  assert.ok(!freeVideo.text.includes("https://kinescope.io/embed/abc123"));
  check("video publishing and premium access");
  // Existing video section numbers belong to topics, not the new exam numbering.
  for (const [id, number, title] of [
    ["legacy-equations", 13, "Legacy equations lecture"],
    ["legacy-finance", 16, "Legacy finance lecture"],
    ["legacy-extrema", 12, "Legacy extrema lecture"],
  ]) await db.run("INSERT INTO Video(id,title,url,sectionNum,isPremium,createdAt) VALUES(?,?,?,?,?,?)",
    [id, title, "https://kinescope.io/embed/abc123", number, 0, new Date().toISOString()]);
  for (const [number, title] of [[14,"Legacy equations lecture"],[13,"Legacy finance lecture"],[9,"Legacy extrema lecture"]]) {
    const page = await request(`/videos/${number}`, { cookie: sessions.a });
    assert.equal(page.status, 200);
    assert.ok(page.text.includes(title));
  }
  for (const number of [6,17,20]) {
    const newForm = new FormData();
    newForm.set("title", `New lecture ${number}`);
    newForm.set("url", "https://kinescope.io/embed/abc123");
    newForm.set("sectionNum", String(number));
    assert.equal((await formRequest("/api/videos/create", newForm, sessions.teacher)).status, 303);
    assert.ok((await request(`/videos/${number}`, { cookie: sessions.a })).text.includes(`New lecture ${number}`));
  }
  for (const [route, title] of [["6","Случайные величины"],["13","Экономические задачи"],["14","Уравнения"],["17","Прикладные задачи на оптимизацию"],["20","Задачи на теорию чисел"],["15-intro","Стереометрия"],["18-intro","Планиметрия"],["19-intro","Параметры"],["20-intro","Теория чисел"]]) {
    const page = await request(`/math-profile/${route}`, { cookie: sessions.a });
    assert.equal(page.status, 200);
    assert.ok(page.text.includes(title), `${route}: ${title}`);
  }
  check("new exam numbering preserves legacy videos and opens the correct topics");
  const unknown = await request("/supervisor/students/missing", {
    cookie: sessions.admin,
  });
  assert.ok(
    unknown.status === 404 || unknown.text.includes("Страница не найдена"),
  );
  check("unknown student does not show another account");
  const login = await request("/login"),
    loggedIn = await invoke("/login", action(login.text, "password"), {
      email: "a@example.invalid",
      password,
      selectedTab: "student",
    });
  assert.ok(
    loggedIn.headers["set-cookie"]?.some(
      (c) => /userSession=[A-Za-z0-9_-]{43};/.test(c) && /HttpOnly/i.test(c),
    ),
  );
  check("password login issues opaque HttpOnly session");
  const register = await request("/register"),
    registered = await invoke("/register", action(register.text, "password"), {
      name: "Registered student",
      email: "registered@example.invalid",
      password,
    });
  assert.ok(registered.status >= 300 && registered.status < 400);
  assert.equal(messages.length, 1);
  const code = await mailCode(0, 6);
  assert.notEqual(
    (
      await db.get(
        "SELECT code FROM PendingUsers WHERE email='registered@example.invalid'",
      )
    ).code,
    code,
  );
  const verify = await request(
    "/verify-email?email=registered%40example.invalid",
  );
  await invoke(
    "/verify-email?email=registered%40example.invalid",
    action(verify.text, "code"),
    { email: "registered@example.invalid", code },
  );
  const account = await db.get(
    "SELECT id,role,password FROM User WHERE email='registered@example.invalid'",
  );
  assert.equal(account.role, "STUDENT");
  assert.ok(await bcrypt.compare(password, account.password));
  check("registration and verification through local SMTP");
  assert.ok(login.text.includes('href="/forgot-password"'));
  const resetRequestPath = "/forgot-password",
    resetStep = "/forgot-password?step=code",
    resetRequestPage = await request(resetRequestPath),
    resetRequestAction = action(resetRequestPage.text, "email"),
    unknownReset = await invoke(resetRequestPath, resetRequestAction, {
      email: "unknown@example.invalid",
    }),
    knownReset = await invoke(resetRequestPath, resetRequestAction, {
      email: "REGISTERED@example.invalid",
    });
  assert.equal(knownReset.status, 303);
  assert.equal(unknownReset.status, knownReset.status);
  assert.equal(unknownReset.headers.location, resetStep);
  assert.equal(knownReset.headers.location, resetStep);
  const resetCode = await mailCode(1, 8);
  assert.equal(messages.length, 2);
  assert.match(messages[1], /To: registered@example\.invalid/i);
  const browserCookie = (response) => {
    const value = response.headers["set-cookie"]?.find((cookie) => cookie.startsWith("passwordReset="));
    assert.match(value, /^passwordReset=[A-Za-z0-9_-]{43};/);
    assert.match(value, /HttpOnly/i);
    assert.match(value, /Path=\/forgot-password/i);
    return value.split(";")[0];
  };
  const recoveryCookie = browserCookie(knownReset),
    unknownCookie = browserCookie(unknownReset),
    recoveryPage = await request(resetStep, { cookie: recoveryCookie }),
    unknownRecoveryPage = await request(resetStep, { cookie: unknownCookie }),
    recoveryAction = action(recoveryPage.text, "code"),
    newPassword = "new-http-test-password",
    fieldsForReset = { code: resetCode, password: newPassword, confirmPassword: newPassword },
    oldSession = await createSession(db, account.id);
  assert.equal(action(unknownRecoveryPage.text, "code"), recoveryAction);
  assert.ok(!recoveryPage.text.includes(resetCode));
  assert.equal(
    (await invoke(resetStep, recoveryAction, fieldsForReset, unknownCookie)).headers.location,
    resetStep + "&error=code",
  );
  assert.equal(
    (await invoke(resetStep, recoveryAction, fieldsForReset)).headers.location,
    resetRequestPath + "?error=expired",
  );
  assert.equal(
    (await invoke(resetStep, recoveryAction, { ...fieldsForReset, confirmPassword: password }, recoveryCookie)).headers.location,
    resetStep + "&error=confirmation",
  );
  const passwordChanged = await invoke(resetStep, recoveryAction, fieldsForReset, recoveryCookie);
  assert.equal(passwordChanged.headers.location, "/login?success=password-reset");
  assert.ok(passwordChanged.headers["set-cookie"].every((cookie) => !cookie.startsWith("userSession=")));
  assert.equal((await request("/profile", { cookie: "userSession=" + oldSession })).headers.location, "/login");
  assert.equal(
    (await invoke(resetStep, recoveryAction, fieldsForReset, recoveryCookie)).headers.location,
    resetStep + "&error=code",
  );
  const loginAction = action(login.text, "password");
  assert.equal((await invoke("/login", loginAction, {
    email: "registered@example.invalid", password, selectedTab: "student",
  })).headers.location, "/login?error=wrong");
  assert.equal((await invoke("/login", loginAction, {
    email: "registered@example.invalid", password: newPassword, selectedTab: "student",
  })).headers.location, "/profile");
  check("password recovery through local SMTP, session revocation and new-password login");
  const dashboard = await request("/dashboard", { cookie: sessions.free });
  assert.equal(dashboard.status, 200);
  await invoke(
    "/dashboard",
    action(dashboard.text, "content"),
    { dateText: "2026-11-04", content: "Free dashboard note" },
    sessions.free,
  );
  assert.equal(
    (await db.get("SELECT content FROM Notes WHERE userId='free'")).content,
    "Free dashboard note",
  );
  check("free dashboard calendar");
  const teacher = await request("/teacher-dashboard", {
    cookie: sessions.teacher,
  });
  await invoke(
    "/teacher-dashboard",
    action(teacher.text, "lessonDate"),
    {
      title: "Test lesson",
      time: "18:30",
      type: "Вебинар",
      lessonDate: "2026-11-10",
    },
    sessions.teacher,
  );
  assert.equal(
    (await db.get("SELECT dateText FROM Schedule WHERE title='Test lesson'"))
      .dateText,
    "2026-11-10",
  );
  check("schedule event saves ISO date");
  const bulkPage = await request("/homeworks", { cookie: sessions.admin }),
    publish = action(bulkPage.text, "pdfFile");
  await invoke(
    "/homeworks",
    publish,
    { title: "Repeated title" },
    sessions.admin,
  );
  await invoke(
    "/homeworks",
    publish,
    { title: "Repeated title" },
    sessions.admin,
  );
  const batches = await db.all(
    "SELECT DISTINCT batchId FROM Homework WHERE title='Repeated title'",
  );
  assert.equal(batches.length, 2);
  const deletePage = await request("/homeworks", { cookie: sessions.admin });
  await invoke(
    "/homeworks",
    action(deletePage.text, "batchId"),
    { batchId: batches[0].batchId },
    sessions.admin,
  );
  assert.equal(
    (
      await db.get(
        "SELECT COUNT(*) AS count FROM Homework WHERE title='Repeated title'",
      )
    ).count,
    2,
  );
  check("bulk batches remain distinct with identical titles");
  const logoutForm = [
      ...profile.text.matchAll(/<form\b[^>]*>[\s\S]*?<\/form>/g),
    ]
      .map((m) => m[0])
      .find((f) => f.includes("Выйти")),
    logoutId = logoutForm?.match(/name="\$ACTION_ID_([^"]+)"/)?.[1];
  assert.ok(logoutId);
  await invoke("/profile", logoutId, {}, sessions.a);
  assert.equal(
    JSON.parse(
      (
        await request("/api/user-task-progress?module=15", {
          cookie: sessions.a,
        })
      ).text,
    ).isAuth,
    false,
  );
  check("logout revokes server session");
  console.log(`HTTP smoke checks passed: ${passed}`);
} catch (error) {
  console.error(error);
  console.error(logs.slice(-5000));
  process.exitCode = 1;
} finally {
  clearTimeout(timer);
  child.kill("SIGTERM");
  smtp.close();
  db.dispose();
  await rm(directory, { recursive: true, force: true });
}

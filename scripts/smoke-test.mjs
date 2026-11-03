import { spawn } from "node:child_process";
import { mkdtemp, rm, mkdir, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import http from "node:http";
import net from "node:net";
import assert from "node:assert/strict";
import bcrypt from "bcryptjs";
import { openDatabase } from "../src/lib/db.js";
import { createSession } from "../src/lib/session.js";
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
const messages = [];
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
  const profile = await request("/profile", { cookie: sessions.a });
  assert.equal(profile.status, 200);
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
  const freeVideo = await request("/videos/1", { cookie: sessions.free });
  assert.equal(freeVideo.status, 200);
  assert.ok(!freeVideo.text.includes("https://kinescope.io/embed/abc123"));
  check("video publishing and premium access");
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
  let body = messages[0].slice(messages[0].indexOf("\r\n\r\n") + 4);
  if (/Content-Transfer-Encoding: base64/i.test(messages[0]))
    body = Buffer.from(body.replace(/\s/g, ""), "base64").toString();
  else body = body.replace(/=\r\n/g, "");
  const code = body.match(/(?<!\d)\d{6}(?!\d)/)?.[0];
  assert.ok(code);
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
    "SELECT role,password FROM User WHERE email='registered@example.invalid'",
  );
  assert.equal(account.role, "STUDENT");
  assert.ok(await bcrypt.compare(password, account.password));
  check("registration and verification through local SMTP");
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

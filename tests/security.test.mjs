import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, rm, readdir } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import bcrypt from "bcryptjs";
import { openDatabase } from "../src/lib/db.js";
import {
  createSession,
  readSession,
  revokeSession,
} from "../src/lib/session.js";
import { setStudentBlocked } from "../src/lib/student-access.js";
import { setTaskProgress } from "../src/lib/progress.js";
import { getEgeProgress, legacyCandidates } from "../src/lib/task-modules.js";
import {
  activatePendingUser,
  verificationChallenge,
} from "../src/lib/verification.js";
import { consumeRateLimit } from "../src/lib/rate-limit.js";
import {
  completePasswordReset, issuePasswordReset, newPasswordResetToken, PASSWORD_RESET_LIFETIME,
} from "../src/lib/password-reset.js";
import {
  saveUpload,
  canReadFile,
  detectFileType,
  MAX_UPLOAD_SIZE,
} from "../src/lib/uploads.js";
import { videoEmbedUrl } from "../src/lib/videos.js";
import { sameOrigin } from "../src/lib/http.js";
async function fixture(t) {
  const directory = await mkdtemp(path.join(os.tmpdir(), "school-test-")),
    db = openDatabase(path.join(directory, "dev.db"));
  t.after(async () => {
    db.dispose();
    await rm(directory, { recursive: true, force: true });
  });
  for (const [id, role] of [
    ["admin", "ADMIN"],
    ["a", "PREMIUM_STUDENT"],
    ["b", "PREMIUM_STUDENT"],
  ])
    await db.run(
      "INSERT INTO User(id,email,name,password,role,createdAt) VALUES(?,?,?,?,?,?)",
      [
        id,
        `${id}@example.invalid`,
        id,
        "test-only",
        role,
        new Date().toISOString(),
      ],
    );
  return { db, directory };
}
test("sessions reject forged cookies, expire, revoke and read current roles", async (t) => {
  const { db } = await fixture(t);
  assert.equal(
    await readSession(
      db,
      Buffer.from(JSON.stringify({ id: "admin", role: "ADMIN" })).toString(
        "base64",
      ),
    ),
    null,
  );
  assert.equal(await readSession(db, "a".repeat(43)), null);
  const token = await createSession(db, "admin", 1000);
  assert.equal((await readSession(db, token, 1001)).role, "ADMIN");
  await db.run("UPDATE User SET role='STUDENT' WHERE id='admin'");
  assert.equal((await readSession(db, token, 1002)).role, "STUDENT");
  assert.equal(await readSession(db, token, 1000 + 8 * 86400000), null);
  await revokeSession(db, token);
  assert.equal(await readSession(db, token, 1003), null);
});
test("blocking a student revokes sessions, preserves data and is restricted to administrators", async (t) => {
  const { db } = await fixture(t);
  const admin = { id: 'admin', email: 'admin@example.invalid', role: 'ADMIN' };
  const first = await createSession(db, 'a', 1000);
  const second = await createSession(db, 'a', 1000);
  assert.equal(setStudentBlocked(db, { ...admin, role: 'TEACHER' }, 'a', true), false);
  assert.equal(setStudentBlocked(db, admin, 'admin', true), false);
  assert.equal((await readSession(db, first, 1001)).id, 'a');
  assert.equal(setStudentBlocked(db, admin, 'a', true), true);
  assert.equal(await readSession(db, first, 1001), null);
  assert.equal(await readSession(db, second, 1001), null);
  assert.equal(await createSession(db, 'a', 1001), null);
  assert.equal((await db.get("SELECT role FROM User WHERE id='a'")).role, 'PREMIUM_STUDENT');
  assert.equal(setStudentBlocked(db, admin, 'a', false), true);
  assert.equal(await readSession(db, first, 1002), null);
  assert.ok(await createSession(db, 'a', 1002));
  assert.equal((await db.get("SELECT COUNT(*) AS n FROM ActivityLog WHERE actionType LIKE '%_STUDENT:a'")).n, 2);
});
test("password recovery is bound to its browser, expires and limits code guesses", async (t) => {
  const { db } = await fixture(t);
  const token = newPasswordResetToken();
  const { email, code } = issuePasswordReset(db, "a@example.invalid", token, 1000);
  assert.equal(email, "a@example.invalid");
  assert.match(code, /^[0-9]{8}$/);
  const stored = await db.get("SELECT tokenHash,codeDigest FROM PasswordReset");
  assert.notEqual(stored.tokenHash, token);
  assert.notEqual(stored.codeDigest, code);
  const unknown = newPasswordResetToken();
  assert.equal(issuePasswordReset(db, "missing@example.invalid", unknown, 1000), null);
  const reset = (browser, pin, now = 1001) =>
    completePasswordReset(db, browser, pin, "new-test-password", () => now);
  assert.equal(await reset(unknown, code), false);
  assert.equal(await reset(token, code, 1000 + PASSWORD_RESET_LIFETIME), false);
  for (let attempt = 0; attempt < 5; attempt++)
    assert.equal(await reset(token, "00000000"), false);
  assert.equal(await reset(token, code), false);
  assert.equal((await db.get("SELECT password FROM User WHERE id='a'")).password, "test-only");
});
test("only one concurrent password recovery succeeds and stale credentials cannot open a session", async (t) => {
  const { db } = await fixture(t);
  const a = await createSession(db, "a", 1000);
  const b = await createSession(db, "b", 1000);
  const token = newPasswordResetToken();
  const { code } = issuePasswordReset(db, "a@example.invalid", token, 1000);
  const secondToken = newPasswordResetToken();
  const otherCode = issuePasswordReset(db, "a@example.invalid", secondToken, 1000).code;
  assert.ok(consumeRateLimit(db, "login", "a@example.invalid", 1, 60000, 1000));
  const password = "new-test-password";
  const results = await Promise.all([
    completePasswordReset(db, token, code, password, () => 1001),
    completePasswordReset(db, secondToken, otherCode, password, () => 1001),
  ]);
  assert.deepEqual(results.sort(), [false, true]);
  assert.equal(await completePasswordReset(db, token, code, password, () => 1002), false);
  assert.equal(await readSession(db, a, 1002), null);
  assert.equal((await readSession(db, b, 1002)).id, "b");
  assert.equal(await createSession(db, "a", 1002, {
    expectedHash: "test-only", upgradedHash: "stale-upgrade",
  }), null);
  assert.ok(consumeRateLimit(db, "login", "a@example.invalid", 1, 60000, 1002));
  const user = await db.get("SELECT role,password FROM User WHERE id='a'");
  assert.equal(user.role, "PREMIUM_STUDENT");
  assert.ok(await bcrypt.compare(password, user.password));
});
test("task progress isolates previously colliding IDs, modules and users; retries are idempotent", async (t) => {
  const { db } = await fixture(t);
  for (const [slug, id] of [
    ["15", 101],
    ["16", 1],
    ["olympiad-1-intro", 1],
    ["olympiad-2-intro", 1],
    ["15", 101],
  ])
    await setTaskProgress(db, "a", slug, id, true);
  assert.equal((await db.all("SELECT * FROM TaskProgress")).length, 4);
  assert.equal((await getEgeProgress(db, "a")).length, 2);
  assert.deepEqual(await getEgeProgress(db, "b"), []);
  await setTaskProgress(db, "a", "15", 101, false);
  assert.ok(await db.get("SELECT taskId FROM TaskProgress WHERE module='16'"));
  await assert.rejects(setTaskProgress(db, "a", "16", 9999, true));
  assert.ok(legacyCandidates(1601).length > 1);
});
test("new optimization task keeps its own progress and is never assigned legacy progress", async (t) => {
  const { db } = await fixture(t);
  assert.ok(!legacyCandidates(1).some(({ module }) => module === "ege-optimization"));
  await setTaskProgress(db, "a", "ege-optimization", 1, true);
  assert.deepEqual(await getEgeProgress(db, "a"), [{ section: 17, taskId: 1 }]);
  assert.deepEqual(await getEgeProgress(db, "b"), []);
  await setTaskProgress(db, "a", "ege-optimization", 1, false);
  assert.deepEqual(await getEgeProgress(db, "a"), []);
  await setTaskProgress(db, "a", "ege-optimization", 14, true);
  assert.deepEqual(await getEgeProgress(db, "a"), [{ section: 17, taskId: 14 }]);
  await assert.rejects(setTaskProgress(db, "a", "ege-optimization", 15, true));
});
test("legacy database migration is non-destructive and preserves ambiguous progress", async (t) => {
  const dir = await mkdtemp(path.join(os.tmpdir(), "legacy-test-")),
    file = path.join(dir, "dev.db"),
    raw = new DatabaseSync(file);
  raw.exec(
    "CREATE TABLE User(id TEXT PRIMARY KEY,email TEXT UNIQUE,name TEXT,password TEXT,createdAt TEXT);INSERT INTO User VALUES('legacy','legacy@example.invalid','Legacy','hash','2026-01-01');CREATE TABLE Trial(id TEXT PRIMARY KEY,userId TEXT,title TEXT,score INTEGER,date TEXT);INSERT INTO Trial VALUES('trial','legacy','Trial',0,'2026-01-01');CREATE TABLE Progress(id TEXT PRIMARY KEY,userId TEXT,taskNumber INTEGER,completedAt TEXT);INSERT INTO Progress VALUES('safe','legacy',1301,'2026-01-01');INSERT INTO Progress VALUES('ambiguous','legacy',1601,'2026-01-01');",
  );
  raw.close();
  const db = openDatabase(file);
  t.after(async () => {
    db.dispose();
    await rm(dir, { recursive: true, force: true });
  });
  await db.run(
    "UPDATE Trial SET description='file',solutionUrl='solution',comment='checked',status='Проверено' WHERE id='trial'",
  );
  assert.equal(
    (await db.get("SELECT role FROM User WHERE id='legacy'")).role,
    "STUDENT",
  );
  assert.equal(
    (await db.get("SELECT COUNT(*) AS count FROM Progress")).count,
    2,
  );
  assert.equal(
    (await db.get("SELECT COUNT(*) AS count FROM TaskProgress")).count,
    1,
  );
  assert.equal(
    (await db.get("SELECT COUNT(*) AS count FROM ProgressMigrationIssue"))
      .count,
    1,
  );
  assert.equal(openDatabase(file), db);
});
test("email verification expires, limits guesses, prevents replay and only creates students", async (t) => {
  const { db } = await fixture(t);
  async function pending(email) {
    const c = verificationChallenge(1000);
    await db.run(
      "INSERT INTO PendingUsers(id,email,name,password,code,createdAt,expiresAt) VALUES(?,?,?,?,?,?,?)",
      [c.id, email, "Pending", "hash", c.digest, "2026-01-01", c.expiresAt],
    );
    assert.notEqual(c.code, c.digest);
    return c;
  }
  const valid = await pending("valid@example.invalid");
  assert.equal(
    activatePendingUser(db, "valid@example.invalid", valid.code, 1001),
    true,
  );
  assert.equal(
    (await db.get("SELECT role FROM User WHERE email='valid@example.invalid'"))
      .role,
    "STUDENT",
  );
  assert.equal(
    activatePendingUser(db, "valid@example.invalid", valid.code, 1002),
    false,
  );
  const locked = await pending("locked@example.invalid");
  for (let i = 0; i < 5; i++)
    assert.equal(
      activatePendingUser(db, "locked@example.invalid", "000000", 1001),
      false,
    );
  assert.equal(
    activatePendingUser(db, "locked@example.invalid", locked.code, 1002),
    false,
  );
  const expired = await pending("expired@example.invalid");
  assert.equal(
    activatePendingUser(
      db,
      "expired@example.invalid",
      expired.code,
      expired.expiresAt,
    ),
    false,
  );
});
test("rate limiting survives requests and resets at the correct deadline", async (t) => {
  const { db } = await fixture(t);
  assert.equal(consumeRateLimit(db, "login", "one", 2, 100, 1000), true);
  assert.equal(consumeRateLimit(db, "login", "one", 2, 100, 1001), true);
  assert.equal(consumeRateLimit(db, "login", "one", 2, 100, 1002), false);
  assert.equal(consumeRateLimit(db, "login", "two", 2, 100, 1002), true);
  assert.equal(consumeRateLimit(db, "login", "one", 2, 100, 1100), true);
});
test("private uploads reject HTML/SVG and oversize files; access requires ownership or assignment", async (t) => {
  const { db, directory } = await fixture(t);
  const oldDb = process.env.DATABASE_PATH,
    oldDir = process.env.UPLOAD_DIR;
  process.env.DATABASE_PATH = path.join(directory, "dev.db");
  process.env.UPLOAD_DIR = path.join(directory, "private");
  t.after(() => {
    if (oldDb === undefined) delete process.env.DATABASE_PATH;
    else process.env.DATABASE_PATH = oldDb;
    if (oldDir === undefined) delete process.env.UPLOAD_DIR;
    else process.env.UPLOAD_DIR = oldDir;
  });
  assert.equal(detectFileType(Buffer.from("<svg><script/></svg>")), null);
  await assert.rejects(
    saveUpload(new File(["<html>inert</html>"], "fake.pdf"), { id: "a" }),
  );
  await assert.rejects(
    saveUpload(
      {
        size: MAX_UPLOAD_SIZE + 1,
        arrayBuffer() {
          throw Error("Must not read");
        },
      },
      { id: "a" },
    ),
  );
  const url = await saveUpload(
    new File(["%PDF-1.7\nfixture"], "anything.html"),
    { id: "a" },
  );
  assert.match(url, /^\/api\/files\//);
  assert.ok((await readdir(process.env.UPLOAD_DIR))[0].endsWith(".pdf"));
  assert.equal(await canReadFile(db, null, url, "a"), false);
  assert.equal(
    await canReadFile(db, { id: "b", role: "PREMIUM_STUDENT" }, url, "a"),
    false,
  );
  assert.equal(
    await canReadFile(db, { id: "a", role: "PREMIUM_STUDENT" }, url, "a"),
    true,
  );
  assert.equal(
    await canReadFile(db, { id: "admin", role: "ADMIN" }, url, "a"),
    true,
  );
});
test("video embeds and mutation origins are constrained", () => {
  assert.throws(() => videoEmbedUrl("javascript:alert(1)"));
  assert.throws(() =>
    videoEmbedUrl("https://vk.com.evil.invalid/video_ext.php"),
  );
  assert.throws(() =>
    videoEmbedUrl("https://vk.com@evil.invalid/video_ext.php"),
  );
  assert.ok(videoEmbedUrl("https://vk.com/video_ext.php?oid=1&id=2"));
  assert.ok(videoEmbedUrl("https://kinescope.io/embed/abc123"));
  assert.equal(
    sameOrigin(
      new Request("https://school.example/api/test", {
        headers: { Origin: "https://evil.invalid" },
      }),
    ),
    false,
  );
  assert.equal(
    sameOrigin(
      new Request("https://school.example/api/test", {
        headers: { Origin: "https://school.example" },
      }),
    ),
    true,
  );
});

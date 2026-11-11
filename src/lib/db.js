import { DatabaseSync } from "node:sqlite";
import { mkdirSync } from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { legacyCandidates } from "./task-modules.js";
const connections = (globalThis.__schoolDatabases ??= new Map());
// Bump whenever a migration changes, so hot reload also upgrades cached connections.
const SCHEMA_REVISION = 'teacher-subjects-v1';
function column(db, table, name, definition) {
  if (
    !db
      .prepare(`PRAGMA table_info("${table}")`)
      .all()
      .some((c) => c.name === name)
  )
    db.exec(`ALTER TABLE "${table}" ADD COLUMN "${name}" ${definition}`);
}
function migrate(db, { insideTransaction = false } = {}) {
  if (!insideTransaction) db.exec(
    "PRAGMA busy_timeout=5000; PRAGMA journal_mode=WAL; PRAGMA foreign_keys=ON; BEGIN IMMEDIATE",
  );
  try {
    db.exec(`
 CREATE TABLE IF NOT EXISTS User(id TEXT PRIMARY KEY NOT NULL,email TEXT UNIQUE NOT NULL,name TEXT,password TEXT NOT NULL,createdAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,role TEXT NOT NULL DEFAULT 'STUDENT');
 CREATE TABLE IF NOT EXISTS TeacherSubject(userId TEXT NOT NULL REFERENCES User(id) ON DELETE CASCADE,subject TEXT NOT NULL,PRIMARY KEY(userId,subject));
 CREATE TABLE IF NOT EXISTS Notes(id TEXT PRIMARY KEY NOT NULL,userId TEXT NOT NULL,dateText TEXT NOT NULL,content TEXT NOT NULL,UNIQUE(userId,dateText));
 CREATE TABLE IF NOT EXISTS ErrorReports(id TEXT PRIMARY KEY NOT NULL,userId TEXT NOT NULL,sectionNumber INTEGER NOT NULL,taskId INTEGER NOT NULL,description TEXT NOT NULL,status TEXT DEFAULT 'OPEN',createdAt TEXT NOT NULL,module TEXT NOT NULL DEFAULT '');
 CREATE TABLE IF NOT EXISTS ActivityLog(id TEXT PRIMARY KEY NOT NULL,userId TEXT NOT NULL,email TEXT NOT NULL,actionType TEXT NOT NULL,timestamp TEXT NOT NULL);
 CREATE TABLE IF NOT EXISTS PendingUsers(id TEXT PRIMARY KEY NOT NULL,email TEXT UNIQUE NOT NULL,name TEXT NOT NULL,password TEXT NOT NULL,code TEXT NOT NULL,createdAt TEXT NOT NULL,attempts INTEGER NOT NULL DEFAULT 0,expiresAt INTEGER NOT NULL DEFAULT 0);
 CREATE TABLE IF NOT EXISTS Homework(id TEXT PRIMARY KEY NOT NULL,userId TEXT NOT NULL,title TEXT NOT NULL,description TEXT DEFAULT '',status TEXT NOT NULL DEFAULT 'Не сдано',mark TEXT DEFAULT '—',comment TEXT DEFAULT '',createdAt TEXT NOT NULL,solutionUrl TEXT DEFAULT '',batchId TEXT NOT NULL DEFAULT '');
 CREATE TABLE IF NOT EXISTS Trial(id TEXT PRIMARY KEY NOT NULL,userId TEXT NOT NULL,title TEXT NOT NULL,description TEXT DEFAULT '',solutionUrl TEXT DEFAULT '',comment TEXT DEFAULT '',status TEXT DEFAULT 'Не сдано',score INTEGER DEFAULT 0,maxScore INTEGER DEFAULT 100,date TEXT NOT NULL,batchId TEXT NOT NULL DEFAULT '');
 CREATE TABLE IF NOT EXISTS Schedule(id TEXT PRIMARY KEY NOT NULL,time TEXT NOT NULL,title TEXT NOT NULL,type TEXT NOT NULL,dateText TEXT NOT NULL,createdAt TEXT NOT NULL);
 CREATE TABLE IF NOT EXISTS Video(id TEXT PRIMARY KEY NOT NULL,title TEXT NOT NULL,description TEXT,url TEXT NOT NULL,isPremium INTEGER NOT NULL DEFAULT 1,sectionNum INTEGER NOT NULL,createdAt TEXT NOT NULL);
 CREATE TABLE IF NOT EXISTS Session(tokenHash TEXT PRIMARY KEY NOT NULL,userId TEXT NOT NULL REFERENCES User(id) ON DELETE CASCADE,expiresAt INTEGER NOT NULL);
 CREATE TABLE IF NOT EXISTS PasswordReset(tokenHash TEXT PRIMARY KEY NOT NULL,userId TEXT REFERENCES User(id) ON DELETE CASCADE,codeDigest TEXT NOT NULL,attempts INTEGER NOT NULL DEFAULT 0,expiresAt INTEGER NOT NULL);
 CREATE TABLE IF NOT EXISTS TaskProgress(userId TEXT NOT NULL REFERENCES User(id) ON DELETE CASCADE,module TEXT NOT NULL,taskId INTEGER NOT NULL,completedAt TEXT NOT NULL,PRIMARY KEY(userId,module,taskId));
 CREATE TABLE IF NOT EXISTS RateLimit(key TEXT PRIMARY KEY NOT NULL,count INTEGER NOT NULL,resetAt INTEGER NOT NULL);
 CREATE TABLE IF NOT EXISTS Upload(id TEXT PRIMARY KEY NOT NULL,storageName TEXT UNIQUE NOT NULL,mime TEXT NOT NULL,size INTEGER NOT NULL,ownerId TEXT REFERENCES User(id),createdAt TEXT NOT NULL);
 CREATE TABLE IF NOT EXISTS AppMigration(id TEXT PRIMARY KEY NOT NULL,appliedAt TEXT NOT NULL);
 CREATE TABLE IF NOT EXISTS ProgressMigrationIssue(userId TEXT NOT NULL,taskNumber INTEGER NOT NULL,candidates TEXT NOT NULL,PRIMARY KEY(userId,taskNumber));
 CREATE INDEX IF NOT EXISTS Session_user ON Session(userId);
 CREATE INDEX IF NOT EXISTS PasswordReset_user ON PasswordReset(userId);
 CREATE INDEX IF NOT EXISTS PasswordReset_expiry ON PasswordReset(expiresAt);
 CREATE INDEX IF NOT EXISTS Homework_user ON Homework(userId);
 CREATE INDEX IF NOT EXISTS Trial_user ON Trial(userId);
 `);
    column(db, "User", "role", "TEXT NOT NULL DEFAULT 'STUDENT'");
    column(db, "Video", "subject", "TEXT NOT NULL DEFAULT 'ege-math'");
    column(db, "Video", "topicKey", "TEXT NOT NULL DEFAULT ''");
    // Существующая медиатека и преподаватели относились к математике ЕГЭ.
    if (!db.prepare("SELECT id FROM AppMigration WHERE id=?").get("teacher-subjects-v1")) {
      db.exec("INSERT OR IGNORE INTO TeacherSubject(userId,subject) SELECT id,'ege-math' FROM User WHERE role IN ('ADMIN','TEACHER')");
      db.prepare("INSERT INTO AppMigration(id,appliedAt) VALUES(?,?)").run("teacher-subjects-v1", new Date().toISOString());
    }
    column(db, "User", "isBlocked", "INTEGER NOT NULL DEFAULT 0");
    column(db, "ErrorReports", "module", "TEXT NOT NULL DEFAULT ''");
    column(db, "PendingUsers", "attempts", "INTEGER NOT NULL DEFAULT 0");
    column(db, "PendingUsers", "expiresAt", "INTEGER NOT NULL DEFAULT 0");
    for (const [key, value] of Object.entries({
      description: "TEXT DEFAULT ''",
      solutionUrl: "TEXT DEFAULT ''",
      comment: "TEXT DEFAULT ''",
      status: "TEXT DEFAULT 'Не сдано'",
      maxScore: "INTEGER DEFAULT 100",
    }))
      column(db, "Trial", key, value);
    for (const [key, value] of Object.entries({
      description: "TEXT DEFAULT ''",
      solutionUrl: "TEXT DEFAULT ''",
    }))
      column(db, "Homework", key, value);
    for (const table of ["Homework", "Trial"]) {
      column(db, table, "batchId", "TEXT NOT NULL DEFAULT ''");
      for (const row of db
        .prepare(`SELECT DISTINCT title FROM ${table} WHERE batchId=''`)
        .all())
        db.prepare(
          `UPDATE ${table} SET batchId=? WHERE title=? AND batchId=''`,
        ).run(randomUUID(), row.title);
    }
    db.exec(
      "UPDATE Trial SET status='Проверено' WHERE score>0 AND status='Не сдано'",
    );
    if (
      !db
        .prepare("SELECT id FROM AppMigration WHERE id=?")
        .get("progress-modules-v1")
    ) {
      if (
        db
          .prepare(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='Progress'",
          )
          .get()
      )
        for (const row of db
          .prepare("SELECT userId,taskNumber,completedAt FROM Progress")
          .all()) {
          const candidates = legacyCandidates(row.taskNumber);
          if (
            candidates.length === 1 &&
            db.prepare("SELECT id FROM User WHERE id=?").get(row.userId)
          )
            db.prepare(
              "INSERT OR IGNORE INTO TaskProgress(userId,module,taskId,completedAt) VALUES(?,?,?,?)",
            ).run(
              row.userId,
              candidates[0].module,
              candidates[0].taskId,
              row.completedAt,
            );
          else
            db.prepare(
              "INSERT OR IGNORE INTO ProgressMigrationIssue(userId,taskNumber,candidates) VALUES(?,?,?)",
            ).run(row.userId, row.taskNumber, JSON.stringify(candidates));
        }
      db.prepare("INSERT INTO AppMigration(id,appliedAt) VALUES(?,?)").run(
        "progress-modules-v1",
        new Date().toISOString(),
      );
    }
    if (!insideTransaction) db.exec("COMMIT");
  } catch (error) {
    if (!insideTransaction) db.exec("ROLLBACK");
    throw error;
  }
}
export function openDatabase(
  filename = process.env.DATABASE_PATH ||
    path.join(process.cwd(), "prisma", "dev.db"),
) {
  filename = path.resolve(/* turbopackIgnore: true */ filename);
  const cached = connections.get(filename);
  if (cached) {
    // Development hot reload preserves this map even when migration code changes.
    // Reuse the live connection without closing it underneath existing requests.
    if (cached.schemaRevision !== SCHEMA_REVISION) {
      cached.transaction((raw) => migrate(raw, { insideTransaction: true }));
      cached.schemaRevision = SCHEMA_REVISION;
    }
    return cached;
  }
  mkdirSync(path.dirname(filename), { recursive: true });
  const raw = new DatabaseSync(filename);
  try { migrate(raw); } catch (error) { raw.close(); throw error; }
  const db = {
    schemaRevision: SCHEMA_REVISION,
    get: async (sql, args = []) => {
      const row = raw.prepare(sql).get(...args);
      return row ? { ...row } : undefined;
    },
    all: async (sql, args = []) =>
      raw
        .prepare(sql)
        .all(...args)
        .map((row) => ({ ...row })),
    run: async (sql, args = []) => raw.prepare(sql).run(...args),
    exec: async (sql) => raw.exec(sql),
    close: async () => {},
    transaction(work) {
      raw.exec("BEGIN IMMEDIATE");
      try {
        const result = work(raw);
        if (result && typeof result.then === "function")
          throw Error("Transaction must be synchronous");
        raw.exec("COMMIT");
        return result;
      } catch (error) {
        raw.exec("ROLLBACK");
        throw error;
      }
    },
    dispose() {
      raw.close();
      connections.delete(filename);
    },
  };
  connections.set(filename, db);
  return db;
}
export async function connectDB() {
  return openDatabase();
}
export const createId = () => randomUUID();

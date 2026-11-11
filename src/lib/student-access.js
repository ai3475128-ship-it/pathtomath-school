import { SUBJECTS } from './learning-catalog.js';
import { randomUUID } from 'node:crypto';

// The action checks authorization too; keep the data-layer boundary safe for future callers.
export function setStudentBlocked(db, actor, studentId, blocked) {
  if (actor?.role !== 'ADMIN' || typeof studentId !== 'string' || typeof blocked !== 'boolean') return false;
  return db.transaction((raw) => {
    const student = raw.prepare("SELECT id, isBlocked FROM User WHERE id=? AND role IN ('STUDENT','PREMIUM_STUDENT')").get(studentId);
    if (!student) return false;
    if (Boolean(student.isBlocked) === blocked) return true;
    raw.prepare('UPDATE User SET isBlocked=? WHERE id=?').run(blocked ? 1 : 0, studentId);
    if (blocked) raw.prepare('DELETE FROM Session WHERE userId=?').run(studentId);
    raw.prepare('INSERT INTO ActivityLog(id,userId,email,actionType,timestamp) VALUES(?,?,?,?,?)')
      .run(randomUUID(), actor.id, actor.email, `${blocked ? 'BLOCK_STUDENT' : 'UNBLOCK_STUDENT'}:${studentId}`, new Date().toISOString());
    return true;
  });
}

// Student enrollments are an administrator action, independent of teaching roles.
export function setStudentCourses(db, actor, studentId, courseIds) {
  if (actor?.role !== 'ADMIN' || typeof studentId !== 'string' || !Array.isArray(courseIds)) return false;
  const unique = [...new Set(courseIds)];
  if (unique.some((id) => !SUBJECTS.some((course) => course.id === id))) return false;
  return db.transaction((raw) => {
    const student = raw.prepare("SELECT id FROM User WHERE id=? AND role IN ('STUDENT','PREMIUM_STUDENT')").get(studentId);
    if (!student) return false;
    raw.prepare('DELETE FROM StudentCourse WHERE userId=?').run(studentId);
    for (const course of unique) raw.prepare('INSERT INTO StudentCourse(userId,courseId) VALUES(?,?)').run(studentId, course);
    raw.prepare('UPDATE User SET role=? WHERE id=?').run(unique.length ? 'PREMIUM_STUDENT' : 'STUDENT', studentId);
    raw.prepare('INSERT INTO ActivityLog(id,userId,email,actionType,timestamp) VALUES(?,?,?,?,?)')
      .run(randomUUID(), actor.id, actor.email, `COURSES:${studentId}:${unique.join(',')}`, new Date().toISOString());
    return true;
  });
}

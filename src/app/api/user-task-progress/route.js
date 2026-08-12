import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import { cookies } from 'next/headers';

// 🕵️‍♂️ ПРОВЕРКА ПРОГРЕССА
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const taskNumberInt = parseInt(searchParams.get('taskNumber') || '0');
  const cookieStore = await cookies();
  const allCookies = cookieStore.getAll();

  const authCookie = allCookies.find(c => 
    c.name.toLowerCase().includes('session') || c.name.toLowerCase().includes('token') || 
    c.name.toLowerCase().includes('auth') || c.name.toLowerCase().includes('user') || c.name.toLowerCase().includes('login')
  );

  if (!authCookie) return Response.json({ isAuth: false, solvedSubTasks: [] });

  const db = await open({ filename: path.join(process.cwd(), 'prisma', 'dev.db'), driver: sqlite3.Database });
  try {
    let user = await db.get('SELECT id FROM User LIMIT 1');
    
    // 👍 АВТО-СОЗДАНИЕ: Если пользователей в БД нет вообще, создаем дефолтного, чтобы прогресс не ломался!
    if (!user) {
      await db.run('INSERT INTO User (id, name, email) VALUES (?, ?, ?)', ['default-id', 'Ученик', 'user@example.com']);
      user = { id: 'default-id' };
    }

    const startRange = taskNumberInt * 100;
    const endRange = startRange + 99;
    const records = await db.all('SELECT taskNumber FROM Progress WHERE userId = ? AND taskNumber BETWEEN ? AND ?', [user.id, startRange, endRange]);
    await db.close();
    return Response.json({ isAuth: true, solvedSubTasks: records.map(r => r.taskNumber) });
  } catch (error) { if (db) await db.close(); return Response.json({ isAuth: false, solvedSubTasks: [] }, { status: 500 }); }
}

// 🔥 ЗАПИСЬ ПРОГРЕССА
export async function POST(request) {
  try {
    const { subTaskId } = await request.json();
    const cookieStore = await cookies();
    const allCookies = cookieStore.getAll();

    const authCookie = allCookies.find(c => 
      c.name.toLowerCase().includes('session') || c.name.toLowerCase().includes('token') || 
      c.name.toLowerCase().includes('auth') || c.name.toLowerCase().includes('user') || c.name.toLowerCase().includes('login')
    );

    if (!authCookie) return Response.json({ success: false, error: 'Unauthorized' }, { status: 401 });

    const db = await open({ filename: path.join(process.cwd(), 'prisma', 'dev.db'), driver: sqlite3.Database });
    
    let user = await db.get('SELECT id FROM User LIMIT 1');
    if (!user) {
      await db.run('INSERT INTO User (id, name, email) VALUES (?, ?, ?)', ['default-id', 'Ученик', 'user@example.com']);
      user = { id: 'default-id' };
    }

    const existing = await db.get('SELECT id FROM Progress WHERE userId = ? AND taskNumber = ?', [user.id, subTaskId]);

    if (existing) {
      await db.run('DELETE FROM Progress WHERE userId = ? AND taskNumber = ?', [user.id, subTaskId]);
    } else {
      // Подставляем текущую дату для прохождения NOT NULL ограничений prisma
      const now = new Date().toISOString();
      await db.run('INSERT INTO Progress (userId, taskNumber, completedAt) VALUES (?, ?, ?)', [user.id, subTaskId, now]);
    }

    await db.close();
    return Response.json({ success: true });
  } catch (error) { if (db) await db.close(); return Response.json({ success: false }, { status: 500 }); }
}

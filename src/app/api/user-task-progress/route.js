import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import { cookies } from 'next/headers';

async function connectDB() {
  return open({
    filename: path.join(process.cwd(), 'prisma', 'dev.db'),
    driver: sqlite3.Database
  });
}

function findAuthCookie(allCookies) {
  return allCookies.find(c => 
    c.name.toLowerCase().includes('session') || 
    c.name.toLowerCase().includes('token') || 
    c.name.toLowerCase().includes('auth') || 
    c.name.toLowerCase().includes('user') || 
    c.name.toLowerCase().includes('login')
  );
}

// 🔐 ПОЛУЧЕНИЕ ПРОГРЕССА
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const taskNumberInt = parseInt(searchParams.get('taskNumber')) || 0;
  
  const cookieStore = await cookies();
  const allCookies = cookieStore.getAll();
  const authCookie = findAuthCookie(allCookies);

  if (!authCookie) {
    return Response.json({ isAuth: false, solvedSubTasks: [] });
  }

  let db;
  try {
    db = await connectDB();
    
    let userId = 'default-id';
    try {
      const sessionData = JSON.parse(Buffer.from(authCookie.value, 'base64').toString('utf8'));
      userId = sessionData?.id || authCookie.value;
    } catch (e) {
      userId = authCookie.value;
    }

    const startRange = taskNumberInt * 100;
    const endRange = startRange + 99;

    const records = await db.all(
      'SELECT taskNumber FROM Progress WHERE userId = ? AND taskNumber BETWEEN ? AND ?', 
      [userId, startRange, endRange]
    );

    const solvedSubTasks = records.map(r => r.taskNumber);

    return Response.json({ isAuth: true, solvedSubTasks });
  } catch (error) {
    console.error('Ошибка бэкенда GET progress:', error);
    return Response.json({ isAuth: false, solvedSubTasks: [] }, { status: 500 });
  } finally {
    if (db) await db.close();
  }
}

// 💾 ЗАПИСЬ КЛИКА «РЕШЕНО»
export async function POST(request) {
  let db;
  try {
    const { subTaskId } = await request.json();
    
    const cookieStore = await cookies();
    const allCookies = cookieStore.getAll();
    const authCookie = findAuthCookie(allCookies);

    if (!authCookie) {
      return Response.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    let userId = 'default-id';
    try {
      const sessionData = JSON.parse(Buffer.from(authCookie.value, 'base64').toString('utf8'));
      userId = sessionData?.id || authCookie.value;
    } catch (e) {
      userId = authCookie.value;
    }

    db = await connectDB();

    const existing = await db.get(
      'SELECT id FROM Progress WHERE userId = ? AND taskNumber = ?', 
      [userId, subTaskId]
    );

    if (existing) {
      await db.run('DELETE FROM Progress WHERE userId = ? AND taskNumber = ?', [userId, subTaskId]);
    } else {
      const now = new Date().toISOString();
      await db.run(
        'INSERT INTO Progress (userId, taskNumber, completedAt) VALUES (?, ?, ?)', 
        [userId, subTaskId, now]
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error('Ошибка бэкенда POST progress:', error);
    return Response.json({ success: false }, { status: 500 });
  } finally {
    if (db) await db.close();
  }
}

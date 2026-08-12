'use server';

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export async function toggleSubTaskProgress(subTaskId, taskNumberInt) {
  const cookieStore = await cookies();
  const allCookies = cookieStore.getAll();
  
  // Универсальный сканер кук авторизации
  const authCookie = allCookies.find(c => 
    c.name.toLowerCase().includes('session') || 
    c.name.toLowerCase().includes('token') || 
    c.name.toLowerCase().includes('auth') ||
    c.name.toLowerCase().includes('user') ||
    c.name.toLowerCase().includes('login')
  );

  if (!authCookie) {
    throw new Error("Unauthorized: Пользователь не залогинен");
  }

  const db = await open({
    filename: path.join(process.cwd(), 'prisma', 'dev.db'),
    driver: sqlite3.Database
  });

  try {
    const user = await db.get('SELECT id FROM User LIMIT 1');
    if (!user) return { success: false };

    const existing = await db.get(
      'SELECT id FROM Progress WHERE userId = ? AND taskNumber = ?',
      [user.id, subTaskId]
    );

    if (existing) {
      await db.run('DELETE FROM Progress WHERE userId = ? AND taskNumber = ?', [user.id, subTaskId]);
    } else {
      await db.run(
        'INSERT INTO Progress (userId, taskNumber) VALUES (?, ?)',
        [user.id, subTaskId]
      );
    }

    // 🚀 Принудительно сбрасываем кэш Next.js на сервере
    revalidatePath('/profile');
    revalidatePath(`/math-profile/${taskNumberInt}`);
    
    return { success: true };
  } catch (error) {
    console.error('Ошибка изменения точечного прогресса подзадачи в БД:', error);
    return { success: false };
  } finally {
    if (db) await db.close();
  }
}

export async function getSolvedSubTasksFromDB(taskNumberInt, userId) {
  const db = await open({
    filename: path.join(process.cwd(), 'prisma', 'dev.db'),
    driver: sqlite3.Database
  });
  try {
    const user = await db.get('SELECT id FROM User LIMIT 1');
    if (!user) return [];
    const startRange = taskNumberInt * 100;
    const endRange = startRange + 99;
    const records = await db.all(
      'SELECT taskNumber FROM Progress WHERE userId = ? AND taskNumber BETWEEN ? AND ?',
      [user.id, startRange, endRange]
    );
    return records.map(r => r.taskNumber);
  } catch (e) {
    return [];
  } finally {
    if (db) await db.close();
  }
}

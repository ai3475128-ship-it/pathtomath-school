'use server';

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

// 1. Функция для добавления/удаления выполненного задания в SQLite
export async function toggleTaskProgress(taskNumber) {
  const cookieStore = await cookies();
  const userId = cookieStore.get('userId')?.value;
  if (!userId) return { success: false };

  const db = await open({
    filename: path.join(process.cwd(), 'prisma', 'dev.db'),
    driver: sqlite3.Database
  });

  try {
    const existing = await db.get(
      'SELECT id FROM Progress WHERE userId = ? AND taskNumber = ?',
      [userId, taskNumber]
    );

    if (existing) {
      await db.run('DELETE FROM Progress WHERE userId = ? AND taskNumber = ?', [userId, taskNumber]);
    } else {
      await db.run(
        'INSERT INTO Progress (userId, taskNumber) VALUES (?, ?)',
        [userId, taskNumber]
      );
    }
  } catch (error) {
    console.error('Ошибка изменения прогресса в БД:', error);
    return { success: false };
  } finally {
    if (db) await db.close();
  }

  redirect('/profile');
}

// 2. Функция сохранения заметок календаря планов
export async function saveDailyNote(dateText, content) {
  const cookieStore = await cookies();
  const userId = cookieStore.get('userId')?.value;
  if (!userId) return { success: false };

  const db = await open({
    filename: path.join(process.cwd(), 'prisma', 'dev.db'),
    driver: sqlite3.Database
  });

  try {
    const existing = await db.get(
      'SELECT id FROM Notes WHERE userId = ? AND dateText = ?',
      [userId, dateText]
    );

    if (existing) {
      await db.run(
        'UPDATE Notes SET content = ? WHERE userId = ? AND dateText = ?',
        [content, userId, dateText]
      );
    } else {
      await db.run(
        'INSERT INTO Notes (userId, dateText, content) VALUES (?, ?, ?)',
        [userId, dateText, content]
      );
    }
  } catch (error) {
    console.error('Ошибка сохранения заметки в БД:', error);
    return { success: false };
  } finally {
    if (db) await db.close();
  }

  redirect(`/profile?date=${dateText}`);
}

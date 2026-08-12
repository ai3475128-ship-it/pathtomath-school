'use server';

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import { revalidatePath } from 'next/cache';
import { getCurrentUser } from '../login/actions';

async function connectDB() {
  return open({
    filename: path.join(process.cwd(), 'prisma', 'dev.db'),
    driver: sqlite3.Database
  });
}

// 1. Существующая функция прогресса задач (сохраняем её структуру)
export async function toggleTaskProgress() {
  return null;
}

// 2. НАШ НОВЫЙ SERVER ACTION: Отправка и запись багрепорта в SQLite
export async function sendErrorReport(formData) {
  const sectionNumber = parseInt(formData.get('sectionNumber'), 10);
  const taskId = parseInt(formData.get('taskId'), 10);
  const description = formData.get('description');

  if (!sectionNumber || !taskId || !description) {
    return { success: false, error: 'Заполните описание ошибки' };
  }

  // Автоматически определяем, какой именно пользователь сообщает о баге
  const user = await getCurrentUser();
  const userId = user ? user.id : 'GUEST'; // Если гость — пишем GUEST

  let db;
  try {
    db = await connectDB();
    
    const reportId = 'report_' + Math.random().toString(36).substring(2, 11);
    const createdAt = new Date().toISOString();

    // Записываем тикет в базу данных SQLite
    await db.run(
      'INSERT INTO ErrorReports (id, userId, sectionNumber, taskId, description, status, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [reportId, userId, sectionNumber, taskId, description.trim(), 'OPEN', createdAt]
    );

    // Моментально обновляем кэш админки, чтобы руководитель сразу увидел уведомление
    revalidatePath('/admin-panel');
    return { success: true };
  } catch (err) {
    console.error('Ошибка сохранения багрепорта:', err);
    return { success: false, error: 'Ошибка сервера. Попробуйте позже.' };
  } finally {
    if (db) await db.close();
  }
}

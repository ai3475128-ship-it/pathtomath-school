import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

export async function initProgressTable() {
  const db = await open({
    filename: path.join(process.cwd(), 'prisma', 'dev.db'),
    driver: sqlite3.Database
  });

  // 1. Проверяем структуру таблицы пользователей и добавляем колонку role, если её нет
  const tableInfo = await db.all("PRAGMA table_info(User)"); 
  const hasRole = tableInfo.some(column => column.name === 'role');
  
  if (!hasRole && tableInfo.length > 0) {
    // Безопасно добавляем текстовое поле роли со значением по умолчанию 'STUDENT'
    await db.exec(`ALTER TABLE User ADD COLUMN role TEXT DEFAULT 'STUDENT'`);
  }

  // Таблица прогресса по номерам ЕГЭ
  await db.exec(`
    CREATE TABLE IF NOT EXISTS Progress (
      id TEXT PRIMARY KEY,
      userId TEXT NOT NULL,
      taskNumber INTEGER NOT NULL,
      completedAt TEXT NOT NULL,
      UNIQUE(userId, taskNumber)
    )
  `);

  // Заметки и планы в календаре
  await db.exec(`
    CREATE TABLE IF NOT EXISTS Notes (
      id TEXT PRIMARY KEY,
      userId TEXT NOT NULL,
      dateText TEXT NOT NULL, -- Формат даты, например: "2026-07-15"
      content TEXT NOT NULL,  -- Текст плана ученика
      UNIQUE(userId, dateText)
    )
  `);

  // 2. Обращения об ошибках в задачах
  await db.exec(`
    CREATE TABLE IF NOT EXISTS ErrorReports (
      id TEXT PRIMARY KEY,
      userId TEXT NOT NULL,       -- Кто сообщил об ошибке
      sectionNumber INTEGER NOT NULL, -- Номер раздела (например, 16)
      taskId INTEGER NOT NULL,    -- ID сломанной задачи (например, 17)
      description TEXT NOT NULL,  -- Текст описания опечатки от ученика
      status TEXT DEFAULT 'OPEN', -- Статус: 'OPEN' (открыт), 'FIXED' (исправлено)
      createdAt TEXT NOT NULL     -- Дата и время отправки тикета
    )
  `);

  // 3. ТАБЛИЦА: Логирование активности посещения сайта
  await db.exec(`
    CREATE TABLE IF NOT EXISTS ActivityLog (
      id TEXT PRIMARY KEY,
      userId TEXT NOT NULL,
      email TEXT NOT NULL,
      actionType TEXT NOT NULL, -- Например: 'LOGIN'
      timestamp TEXT NOT NULL   -- Время действия
    )
  `);

  // 🚀 ИСПРАВЛЕНО: Добавляем таблицу временных пользователей, ожидающих ввода 6-значного кода
  await db.exec(`
    CREATE TABLE IF NOT EXISTS PendingUsers (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      name TEXT NOT NULL,
      password TEXT NOT NULL,   -- Успешно зашифрованный bcrypt пароль
      code TEXT NOT NULL,       -- Проверочный код (например: 582914)
      createdAt TEXT NOT NULL
    )
  `);

  await db.close();
}

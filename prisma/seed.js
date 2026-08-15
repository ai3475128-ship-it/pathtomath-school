const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Запуск наполнения базы АЗИМУТ...');

  const users = [
    { name: 'Александр Иванов', email: 'ai3475128@gmail.com', password: 'Zenit1925', role: 'ADMIN' },
    { name: 'Георгий Куратор', email: 'teacher@azimut.ru', password: '12345678', role: 'TEACHER' },
    { name: 'Премиум Ученик', email: 'alexbvb235@gmail.com', password: 'bvb1909', role: 'PREMIUM_STUDENT' },
    { name: 'Василий Васильев', email: 'str123@gmail.com', password: '12345678', role: 'STUDENT' },
  ];

  for (const u of users) {
    await prisma.user.upsert({
      where: { email: u.email },
      update: {},
      create: u,
    });
    console.log(`✅ Создан аккаунт: ${u.email} (${u.role})`);
  }

  console.log('🎉 Все аккаунты успешно импортированы!');
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());

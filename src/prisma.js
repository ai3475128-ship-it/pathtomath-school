import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient(); // Чистый вызов, он сам прочитает конфиг!
};

const globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

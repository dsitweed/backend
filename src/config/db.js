import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

console.log(`Connecting to database`);
await prisma.$connect();
console.log(`Connected to database`);

export default prisma;

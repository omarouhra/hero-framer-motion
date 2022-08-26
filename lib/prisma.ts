import { PrismaClient } from "@prisma/client";

// declare global {
//   var prisma: PrismaClient | undefined;
// }

const prisma = new PrismaClient();

// if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;

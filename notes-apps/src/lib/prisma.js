import { PrismaClient } from "@prisma/client";

// const globalforprisma = global;

// const prisma = globalforprisma.prisma || new PrismaClient();
const prisma = new PrismaClient();

// if(process.env.NODE_ENV !== "production") globalforprisma.prisma = prisma;

export default prisma;
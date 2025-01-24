import { PrismaClient } from "@prisma/client";
import { env } from "process";

export const prisma = new PrismaClient({
  log: env.NODE__ENV === "dev" ? ['query'] : []
})
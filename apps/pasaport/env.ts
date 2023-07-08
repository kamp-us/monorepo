import { parseEnv } from "znv";
import { z } from "zod";

export const env = parseEnv(process.env, {
  NODE_ENV: z.enum(["development", "test", "production"]),
  NEXTAUTH_URL: z.string().url().default("http://sozluk.local.kamp.us:3000/auth"),
  DATABASE_URL: z
    .string()
    .url()
    .default("postgresql://prisma:password@localhost:5432/kampus?schema=public"),
});

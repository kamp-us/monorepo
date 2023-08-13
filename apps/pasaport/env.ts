import { parseEnv } from "znv";
import { z } from "zod";

export const env = parseEnv(
  {
    NODE_ENV: process.env.NODE_ENV,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    KAMPUS_ENV: process.env.KAMPUS_ENV,
  },
  {
    NODE_ENV: z.enum(["development", "test", "production"]),
    NEXTAUTH_URL: z.string().url(),
    DATABASE_URL: z
      .string()
      .url()
      .default("postgresql://prisma:password@localhost:5432/kampus?schema=public"),
    KAMPUS_ENV: z.enum(["development", "test", "production"]).default("development"),
  }
);

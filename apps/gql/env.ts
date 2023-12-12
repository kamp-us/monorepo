import { parseEnv } from "znv";
import { z } from "zod";

export const env = parseEnv(
  {
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    KAMPUS_ENV: process.env.KAMPUS_ENV,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    CLERK_WEBHOOK_SECRET: process.env.CLERK_WEBHOOK_SECRET,
  },
  {
    NODE_ENV: z.enum(["development", "test", "production"]),
    DATABASE_URL: z
      .string()
      .url()
      .default("mysql://kampus:kampus@localhost:3306/kampus?schema=public&connect_timeout=300"),
    KAMPUS_ENV: z.enum(["development", "test", "production"]).default("development"),
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().default("clerk-pub-key"),
    CLERK_WEBHOOK_SECRET: z.string().default("clerk-webhook-secret"),
  }
);

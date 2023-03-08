import { parseEnv } from "znv";
import { z } from "zod";

export const env = parseEnv(process.env, {
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  DATABASE_URL: z
    .string()
    .url()
    .default(
      "postgresql://pgtest:pgtest@postgres:5432/pgtest?schema=public&connect_timeout=300"
    ),
  SESSION_SECRET: z.string().default("sessionsecret"),
  SEND_IN_BLUE_API_KEY: z.string().optional(),
  GA_TRACKING_ID: z.string().optional(),
  BASE_URL: z.string().url(),
});

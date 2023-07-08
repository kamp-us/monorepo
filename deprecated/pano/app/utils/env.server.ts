import { parseEnv } from "znv";
import { z } from "zod";

export const env = parseEnv(process.env, {
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  DATABASE_URL: z
    .string()
    .url()
    .default("mysql://kampus:kampus@localhost:5432/kampus?schema=public&connect_timeout=300"),
  SESSION_SECRET: z.string().default("sessionsecret"),
  SEND_IN_BLUE_API_KEY: z.string().optional(),
  GA_TRACKING_ID: z.string().optional(),
  BASE_URL: z.string().url(),
  DISCORD_CLIENT_ID: z.string().optional(),
  DISCORD_CLIENT_SECRET: z.string().optional(),
  GITHUB_CLIENT_ID: z.string().optional(),
  GITHUB_CLIENT_SECRET: z.string().optional(),
});

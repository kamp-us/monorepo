import { parseEnv, port } from "znv";
import { z } from "zod";

export const env = parseEnv(process.env, {
  NODE_ENV: z.enum(["development", "test", "production"]),
  DATABASE_URL: z.string().url(),
  PORT: port(),
});

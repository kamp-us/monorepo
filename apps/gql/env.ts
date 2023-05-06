import dotenv from "dotenv";
import { parseEnv, port } from "znv";
import { z } from "zod";

dotenv.config();

export const env = parseEnv(process.env, {
  NODE_ENV: z.enum(["development", "test", "production"]),
  PORT: port(),
  USERS_TWIRP_HOST: z.string().url(),
});

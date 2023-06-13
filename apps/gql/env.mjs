import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /** Server-side env variables should be specified under "server" */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    DATABASE_URL: z
      .string()
      .url()
      .default("postgresql://pgtest:pgtest@localhost:5555/pgtest?schema=public"),
  },
  /** Client-side env variables should be specified under "client" */
  /*
   * client: {
   *  NEXT_PUBLIC_EXAMPLE_KEY: z.string(),
   * },
   *
   */
  /** Make sure you have destructured all variables here. */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
  },
});

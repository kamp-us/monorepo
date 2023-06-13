// import { parseEnv, z } from "znv";
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /** Server-side env variables should be specified under "server" */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    GQL_URL: z.string().url().default("http://localhost:3001/graphql"),
  },
  /** Client-side env variables should be specified under "client" */
  /*
   * client: {
   *  NEXT_PUBLIC_EXAMPLE_KEY: z.string(),
   * },
   *
   */
  /** Make sure you have manually destructured all variables here. */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    GQL_URL: process.env.GQL_URL,
  },
});

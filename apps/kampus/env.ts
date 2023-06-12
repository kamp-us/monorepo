import { parseEnv, z } from "znv";

export const env = parseEnv(
  {
    NODE_ENV: process.env.NODE_ENV,
    GQL_URL: process.env.GQL_URL,
  },
  {
    NODE_ENV: z.enum(["development", "test", "production"]),
    GQL_URL: z.string().url().default("http://localhost:3001/graphql"),
  }
);

import { parseEnv, z } from "znv";

export const env = parseEnv(
  {
    NODE_ENV: process.env.NODE_ENV,
    GQL_URL: process.env.GQL_URL,
    DISCORD_ID: process.env.DISCORD_ID,
    DISCORD_SECRET: process.env.DISCORD_SECRET,
    SECRET: process.env.SECRET,
  },
  {
    NODE_ENV: z.enum(["development", "test", "production"]),
    GQL_URL: z.string().url().default("http://localhost:3001/graphql"),
    DISCORD_ID: z.string().default(""),
    DISCORD_SECRET: z.string().default(""),
    SECRET: z.string().default(""),
  }
);

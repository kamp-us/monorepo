import { parseEnv, z } from "znv";

export const env = parseEnv(process.env, {
  // Provider Secrets
  // EMAIL_SERVER: z.string().default(""),
  // EMAIL_FROM: z.string(),

  GITHUB_ID: z.string(),
  GITHUB_SECRET: z.string(),

  DISCORD_ID: z.string(),
  DISCORD_SECRET: z.string(),

  TWITCH_ID: z.string(),
  TWITCH_SECRET: z.string(),

  SECRET: z
    .string()
    .default("something")
    .describe("A secret for signing the tokens and everything on next auth"),
});

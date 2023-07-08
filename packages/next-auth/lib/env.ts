import { parseEnv, z } from "znv";

export const env = parseEnv(
  {
    AUTH_COOKIE_DOMAIN: process.env.AUTH_COOKIE_DOMAIN,
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    DISCORD_ID: process.env.DISCORD_ID,
    DISCORD_SECRET: process.env.DISCORD_SECRET,
    TWITCH_ID: process.env.TWITCH_ID,
    TWITCH_SECRET: process.env.TWITCH_SECRET,
  },
  {
    // Provider Secrets
    // EMAIL_SERVER: z.string().default(""),
    // EMAIL_FROM: z.string(),

    AUTH_COOKIE_DOMAIN: z.string(),

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
  }
);

import { parseEnv } from "znv";
import { z } from "zod";

import "dotenv/config";

export const env = parseEnv(
  {
    DISCORD_TOKEN: process.env.DISCORD_TOKEN,
    DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
    DISCORD_GUILD_ID: process.env.DISCORD_GUILD_ID,
  },
  {
    DISCORD_TOKEN: z.string().default("discord_token"),
    DISCORD_CLIENT_ID: z.string().default("discord_token"),
    DISCORD_GUILD_ID: z.string().default("discord_token"),
  }
);

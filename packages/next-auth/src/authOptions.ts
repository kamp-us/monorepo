import { PrismaAdapter } from "@auth/prisma-adapter";
import { type AuthOptions } from "next-auth";
import { type Adapter } from "next-auth/adapters";
import DiscordProvider from "next-auth/providers/discord";
import GithubProvider from "next-auth/providers/github";
import TwitchProvider from "next-auth/providers/twitch";

import { prisma } from "@kampus-db/pano-prisma";

import { env } from "../lib/env";
import { PostaciProvider } from "./providers/postaci";

const prismaAdapter = PrismaAdapter(prisma) as Adapter;

export const authOptions: AuthOptions = {
  adapter: prismaAdapter,
  secret: env.SECRET,
  providers: [
    PostaciProvider(),
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
    DiscordProvider({
      clientId: env.DISCORD_ID,
      clientSecret: env.DISCORD_SECRET,
    }),
    TwitchProvider({
      clientId: env.TWITCH_ID,
      clientSecret: env.TWITCH_SECRET,
    }),
  ],
};

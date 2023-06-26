import { type AuthOptions } from "next-auth";
import GithubProvider from 'next-auth/providers/github';
import DiscordProvider from 'next-auth/providers/discord';
import TwitchProvider from 'next-auth/providers/twitch';
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@kampus-db/pano-prisma";

import { env } from "../lib/env";

const prismaAdapter = PrismaAdapter(prisma);


export const authOptions: AuthOptions = (
  {
    adapter: prismaAdapter,
    secret: env.SECRET,
    providers: [
      {
        id: 'vercel-email',
        name: 'No-Reply Kampus',
        type: 'email',
        server: '',
        options: {},
        async sendVerificationRequest({ identifier: _email, url: _url }) {
          // Umut look over here for the email :) 
        }
      },
      GithubProvider({
        clientId: env.GITHUB_ID,
        clientSecret: env.GITHUB_SECRET,
      }),
      // DiscordProvider({
      //   clientId: env.DISCORD_ID,
      //   clientSecret: env.DISCORD_SECRET,
      // }),
      // TwitchProvider({
      //   clientId: env.TWITCH_ID,
      //   clientSecret: env.TWITCH_SECRET,
      // })
    ]
  }
)
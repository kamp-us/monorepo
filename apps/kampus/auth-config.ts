import DiscordProvider from "next-auth/providers/discord";
import type { NextAuthOptions } from "next-auth";
import { env } from "~/env";
export const authOptions: NextAuthOptions = {
  secret: env.SECRET,

  providers: [
    DiscordProvider({
      clientId: env.DISCORD_ID,
      clientSecret: env.DISCORD_SECRET,
    }),
  ],
  pages: {
    signIn: "/passport",
  },
};

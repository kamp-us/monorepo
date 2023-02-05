import { REST as DiscordClient } from "@discordjs/rest";
import { createElement } from "react";
// import { Routes } from "discord-api-types/v10";
import { Authenticator, AuthorizationError } from "remix-auth";
import { DiscordStrategy } from "remix-auth-discord";
import { FormStrategy } from "remix-auth-form";
import { GitHubStrategy } from "remix-auth-github";
import { OTPStrategy } from "remix-auth-otp";
import { TwitchStrategy } from "remix-auth-twitch";
import { prisma } from "~/db.server";
import type { User } from "~/models/user.server";
import { verifyLogin } from "~/models/user.server";
import { sessionStorage } from "~/session.server";
import { Registration } from "../email/components/Registration";
import { sendEmail } from "../email/send.sendinblue.server";

export const authenticator = new Authenticator<User>(sessionStorage);

authenticator.use(
  new FormStrategy(async ({ form }) => {
    const username = form.get("username");
    const password = form.get("password");
    // const redirectTo = safeRedirect(form.get("redirectTo"), "/");
    //
    if (typeof username !== "string" || username.length < 3) {
      throw new AuthorizationError("Kullanıcı adı en az 3 karakter olmalıdır.");
    }

    if (typeof password !== "string" || password.length < 6) {
      throw new AuthorizationError("Şifre en az 6 karakter olmalıdır.");
    }

    const user = await verifyLogin(username, password);
    if (!user) {
      throw new AuthorizationError("Kullanıcı adı veya şifre hatalı.");
    }

    return user;
  }),
  "user-pass"
);

authenticator.use(
  new OTPStrategy(
    {
      secret: process.env.SESSION_SECRET,
      storeCode: async (code) => {
        await prisma.otp.create({
          data: {
            code,
            active: true,
            attempts: 0,
          },
        });
      },
      sendCode: async ({ email, code, magicLink }) => {
        await sendEmail(
          { email, subject: "kamp.us giriş linki" },
          createElement(Registration, { code, magicLink })
        );
      },
      validateCode: async (code) => {
        const otp = await prisma.otp.findUnique({
          where: {
            code: code,
          },
        });
        if (!otp) throw new Error("OTP code not found.");

        return {
          code: otp.code,
          active: otp.active,
          attempts: otp.attempts,
        };
      },

      invalidateCode: async (code, active, attempts) => {
        await prisma.otp.update({
          where: {
            code: code,
          },
          data: {
            active: active,
            attempts: attempts,
          },
        });
      },
    },
    async ({ email }) => {
      // Gets user from database.
      // This is the right place to create a new user (if not exists).
      let user = await prisma.user.findFirst({
        where: {
          email: email,
        },
      });

      if (!user) {
        user = await prisma.user.create({
          data: { email, username: email },
        });
      }

      if (!user) throw new AuthorizationError("kullanici bulunamadi");

      // Returns the user.
      return user;
    }
  )
);

if (process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET) {
  authenticator.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/api/auth/github/callback",
      },
      async ({ profile }) => {
        let identity = await prisma.socialIdentity.findFirst({
          where: {
            provider: "GITHUB",
            providerID: profile.id,
          },
          include: {
            user: true,
          },
        });

        if (!identity) {
          throw new AuthorizationError("Giris yapilamadi");
        }

        return identity.user;
      }
    )
  );
}

if (process.env.DISCORD_CLIENT_ID && process.env.DISCORD_CLIENT_SECRET) {
  const KAMPUS_DISCORD_GUILD_ID = "839425986817818654";
  authenticator.use(
    new DiscordStrategy(
      {
        clientID: process.env.DISCORD_CLIENT_ID,
        clientSecret: process.env.DISCORD_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/api/auth/discord/callback",
        scope: ["identify", "email", "guilds.members.read"],
      },
      async ({ profile, accessToken }) => {
        const client = new DiscordClient({
          version: "10",
          authPrefix: "Bearer",
        }).setToken(accessToken);

        try {
          const member = await client.get(
            `/users/@me/guilds/${KAMPUS_DISCORD_GUILD_ID}/member`
          );

          console.log("kampus discord member", member);
        } catch (error) {
          throw new AuthorizationError("discord user is not kampus member");
        }

        let identity = await prisma.socialIdentity.findFirst({
          where: {
            provider: "DISCORD",
            providerID: profile.id,
          },
          include: {
            user: true,
          },
        });

        if (!identity) {
          throw new AuthorizationError("Giris yapilamadi");
        }

        return identity.user;
      }
    )
  );
}

if (process.env.TWITCH_CLIENT_ID && process.env.TWITCH_CLIENT_SECRET) {
  authenticator.use(
    new TwitchStrategy(
      {
        clientId: process.env.TWITCH_CLIENT_ID,
        clientSecret: process.env.TWITCH_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/api/auth/twitch/callback",
        includeEmail: true,
      },
      async ({ profile }) => {
        let identity = await prisma.socialIdentity.findFirst({
          where: {
            provider: "TWITCH",
            providerID: profile.id,
          },
          include: {
            user: true,
          },
        });

        if (!identity) {
          throw new AuthorizationError("Giris yapilamadi");
        }

        return identity.user;
      }
    )
  );
}

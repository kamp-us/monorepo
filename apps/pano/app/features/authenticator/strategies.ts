import { createElement } from "react";
import { AuthorizationError } from "remix-auth";
import type { DiscordProfile, PartialDiscordGuild } from "remix-auth-discord";
import { DiscordStrategy } from "remix-auth-discord";
import { FormStrategy } from "remix-auth-form";
import { GitHubStrategy } from "remix-auth-github";
import { OTPStrategy } from "remix-auth-otp";
import { prisma } from "~/db.server";
import { Registration } from "~/features/email/components/Registration";
import { sendEmail } from "~/features/email/send.sendinblue.server";
import { verifyLogin } from "~/models/user.server";
import { env } from "~/utils/env.server";

export const strategies = {
  "user-pass": new FormStrategy(async ({ form }) => {
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
  otp: new OTPStrategy(
    {
      secret: env.SESSION_SECRET,
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
        let generatedUsername = email.split("@")[0];
        const userNameConflict = await prisma.user.findFirst({
          where: {
            username: generatedUsername,
          },
        });
        if (userNameConflict) generatedUsername += Math.random() * 10000;
        user = await prisma.user.create({
          data: { email, username: generatedUsername },
        });
      }

      if (!user) throw new AuthorizationError("kullanıcı bulunamadı.");

      // Returns the user.
      return user;
    }
  ),
  discord: new DiscordStrategy(
    {
      clientID: env.DISCORD_CLIENT_ID ?? "",
      clientSecret: env.DISCORD_CLIENT_SECRET ?? "",
      callbackURL: `${env.BASE_URL}/api/auth/discord/callback`,
      scope: ["identify", "email"],
    },
    async ({ accessToken, refreshToken, extraParams, profile }) => {
      let identity = await prisma.socialIdentity.findFirst({
        where: {
          provider: "DISCORD",
          providerID: profile.id,
        },
        include: {
          user: true,
        },
      });

      // Create identity if user exists but identity do not.
      if (!identity) {
        let user = await prisma.user.findFirst({
          where: {
            email: profile.__json.email!,
          },
        });

        if (!user) throw new AuthorizationError("kullanıcı bulunamadı.");
        await prisma.socialIdentity.create({
          data: {
            provider: "DISCORD",
            providerID: profile.id,
            userID: user.id,
          },
        });
        return user;
      }
      return identity.user;
    }
  ),
  github: new GitHubStrategy(
    {
      clientID: env.GITHUB_CLIENT_ID ?? "",
      clientSecret: env.GITHUB_CLIENT_SECRET ?? "",
      callbackURL: `${env.BASE_URL}/api/auth/github/callback`,
    },
    async ({ accessToken, extraParams, profile }) => {
      // Get the user data from your DB or API using the tokens and profile
      let identity = await prisma.socialIdentity.findFirst({
        where: {
          provider: "GITHUB",
          providerID: profile.id,
        },
        include: {
          user: true,
        },
      });

      // Create identity if user exists but identity do not.
      if (!identity) {
        let user = await prisma.user.findFirst({
          where: {
            email: profile.emails[0].value,
          },
        });

        if (!user) throw new AuthorizationError("kullanıcı bulunamadı.");
        await prisma.socialIdentity.create({
          data: {
            provider: "GITHUB",
            providerID: profile.id,
            userID: user.id,
          },
        });
        return user;
      }
      return identity.user;
    }
  ),
};

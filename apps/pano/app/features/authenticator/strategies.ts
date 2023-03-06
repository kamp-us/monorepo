import { createElement } from "react";
import { AuthorizationError } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
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
        user = await prisma.user.create({
          data: { email, username: email },
        });
      }

      if (!user) throw new AuthorizationError("kullanici bulunamadi");

      // Returns the user.
      return user;
    }
  ),
};

import { AuthorizationError } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import { verifyLogin } from "~/models/user.server";

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
};

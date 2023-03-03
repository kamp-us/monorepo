import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { verifyLogin } from "~/models/user.server";
import { createUserSession } from "~/session.server";
import { safeRedirect } from "~/utils";

export interface ActionData {
  errors?: {
    username?: string;
    password?: string;
  };
}

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");
  const redirectTo = safeRedirect(formData.get("redirectTo"), "/");

  if (typeof username !== "string" || username.length < 3) {
    return json<ActionData>({
      errors: {
        username: "Kullanıcı adı en az 3 karakter olmalıdır.",
      },
    });
  }

  if (typeof password !== "string" || password.length < 6) {
    return json<ActionData>({
      errors: {
        password: "Şifre en az 6 karakter olmalıdır.",
      },
    });
  }

  const user = await verifyLogin(username, password);
  if (!user) {
    return json<ActionData>({
      errors: {
        username: "Kullanıcı adı veya şifre hatalı.",
      },
    });
  }

  return createUserSession({
    request,
    userID: user.id,
    redirectTo,
    remember: true,
  });
};

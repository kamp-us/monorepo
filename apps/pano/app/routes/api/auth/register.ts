import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { createUser, getUserByEmail } from "~/models/user.server";
import {
  // safeRedirect,
  validateEmail,
  validatePassword,
  validateUsername,
} from "~/utils";

export interface ActionData {
  data?: any;
  errors?: {
    email?: string;
    username?: string;
    password?: string;
  };
}

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  // const redirectTo = safeRedirect(formData.get("redirectTo"), "/");
  const username = formData.get("username");
  const password = formData.get("password");
  const email = formData.get("email");

  if (!validateUsername(username)) {
    return json<ActionData>(
      { errors: { username: "Username is invalid" } },
      { status: 400 }
    );
  }

  if (!validateEmail(email)) {
    return json<ActionData>(
      { errors: { email: "Email is invalid" } },
      { status: 400 }
    );
  }

  if (!validatePassword(password)) {
    return json<ActionData>(
      { errors: { password: "Password can't be less than 8 characters" } },
      { status: 400 }
    );
  }

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return json<ActionData>(
      { errors: { email: "A user already exists with this email" } },
      { status: 400 }
    );
  }

  const user = await createUser({ username, email, password });

  return json<ActionData>({ errors: {}, data: { user } }, { status: 201 });
};

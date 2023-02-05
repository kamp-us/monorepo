import { createCookieSessionStorage, redirect } from "@remix-run/node";
import invariant from "tiny-invariant";

import type { User } from "~/models/user.server";
import { getUserById } from "~/models/user.server";
import { authenticator } from "./features/auth/remix-auth-authenticator.server";

invariant(process.env.SESSION_SECRET, "SESSION_SECRET must be set");

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: process.env.NODE_ENV === "production",
  },
});

export const { commitSession } = sessionStorage;

const USER_SESSION_KEY = "userID";

export async function getSession(request: Request) {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}

export async function getUserId(
  request: Request
): Promise<User["id"] | undefined> {
  const session = await getSession(request);

  return session.get(USER_SESSION_KEY);
}

export async function requireUser(
  request: Request,
  { redirectTo }: { redirectTo?: string } = {}
) {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: redirectTo ?? "/login",
  });

  const dbUser = await getUserById(user.id);
  if (dbUser) return dbUser;

  throw await logout(request);
}

export async function createUserSession({
  request,
  userID,
  remember,
  redirectTo,
}: {
  request: Request;
  userID: string;
  remember: boolean;
  redirectTo: string;
}) {
  const session = await getSession(request);
  session.set(USER_SESSION_KEY, userID);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember
          ? 60 * 60 * 24 * 7 // 7 days
          : undefined,
      }),
    },
  });
}

export async function logout(request: Request) {
  const session = await getSession(request);

  return sessionStorage.destroySession(session);
}

import { createCookieSessionStorage } from "@remix-run/node";
import { env } from "./utils/env.server";

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    httpOnly: true,
    path: "/",
    domain: env.COOKIE_DOMAIN,
    sameSite: "lax",
    secrets: [env.SESSION_SECRET],
    secure: env.NODE_ENV === "production",
  },
});

export const { commitSession } = sessionStorage;

export async function getSession(request: Request) {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}

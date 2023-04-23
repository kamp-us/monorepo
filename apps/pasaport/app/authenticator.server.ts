import { Authenticator } from "remix-auth";
import { z } from "zod";
import { KampusAuthenticator, strategies } from "~/features/authenticator";
import type { User } from "~/models/user.server";
import { sessionStorage } from "~/session.server";

const Strategies: z.ZodType<keyof typeof strategies> = z.enum(
  Object.keys(strategies) as any
);

export const validateProvider = (provider: string) => {
  return Strategies.parse(provider);
};

export const authenticator = new KampusAuthenticator<
  // @ts-ignore
  typeof strategies,
  keyof typeof strategies,
  User
>({
  strategies,
  authenticator: new Authenticator(sessionStorage),
});

export async function requireUser(request: Request) {
  return (await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  })) as User;
}

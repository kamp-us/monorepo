import { Authenticator } from "remix-auth";
import type { User } from "~/models/user.server";
import { sessionStorage } from "~/session.server";
import { KampusAuthenticator } from "./KampusAuthenticator";
import { strategies } from "./strategies";

export const authenticator = new KampusAuthenticator<
  typeof strategies,
  keyof typeof strategies,
  User
>({
  strategies,
  authenticator: new Authenticator(sessionStorage),
});

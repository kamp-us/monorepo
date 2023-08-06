import { type DefaultSession } from "next-auth";

export type { Session } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export { authOptions } from "./src/authOptions";
export { getServerSession } from "./src/session";
export { default as NextAuth } from "next-auth";

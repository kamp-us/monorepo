import { parseEnv, z } from "znv";

export const env = parseEnv(
  {
    NODE_ENV: process.env.NODE_ENV,
    GQL_URL: process.env.NEXT_PUBLIC_GQL_URL,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    KAMPUS_ENV: process.env.NEXT_PUBLIC_KAMPUS_ENV ?? process.env.VERCEL_URL,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
  },
  {
    NODE_ENV: z.enum(["development", "test", "production"]),
    GQL_URL: z.string().url().default("http://localhost:4000/graphql"),
    RESEND_API_KEY: z.string().default("default-resend-key"),
    KAMPUS_ENV: z.enum(["localhost", "preview", "development", "production"]).default("localhost"),
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().default("clerk-pub-key"),
    CLERK_SECRET_KEY: z.string().default("clerk-secret-key"),
  }
);

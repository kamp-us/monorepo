import { envsafe, str, url } from "envsafe";

export const env = envsafe({
  NODE_ENV: str({
    devDefault: "development",
    choices: ["development", "test", "production"],
  }),
  DATABASE_URL: url({
    devDefault:
      "postgresql://pgtest:pgtest@postgres:5432/pgtest?schema=public&connect_timeout=300",
  }),
  SESSION_SECRET: str({
    devDefault: "sessionsecret",
  }),
});

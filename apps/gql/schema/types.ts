import { type Session } from "@kampus/next-auth";

import { type DataLoaders } from "~/loaders";

export interface KampusGQLContext {
  loaders: DataLoaders;
  pasaport: {
    session: Session | null;
  };
}

import { type DataActions } from "~/actions";
import { type DataLoaders } from "~/loaders";

export interface KampusGQLContext {
  loaders: DataLoaders;
  actions: DataActions;
  pasaport: {
    session: null | { user: { id: string } };
  };
}

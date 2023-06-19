import { type SozlukTermLoader, type SozlukTermsLoader } from "./sozluk";
import { type UsersLoader } from "./users";

export interface DataLoaders {
  users: UsersLoader;
  sozluk: {
    term: SozlukTermLoader;
    terms: SozlukTermsLoader;
  };
}

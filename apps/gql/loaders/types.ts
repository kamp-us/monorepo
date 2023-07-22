import { type SozlukTermLoader, type SozlukTermsLoader } from "./sozluk";
import { type UsersLoader } from "./user";

export interface DataLoaders {
  user: UsersLoader;
  sozluk: {
    term: SozlukTermLoader;
    terms: SozlukTermsLoader;
  };
}

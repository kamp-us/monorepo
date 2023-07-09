import { type PanoPostLoader, type PanoPostsLoader } from "~/loaders/pano";
import { type SozlukTermLoader, type SozlukTermsLoader } from "./sozluk";
import { type UsersLoader } from "./users";

export interface DataLoaders {
  users: UsersLoader;
  sozluk: {
    term: SozlukTermLoader;
    terms: SozlukTermsLoader;
  };
  pano: {
    post: PanoPostLoader;
    posts: PanoPostsLoader;
  };
}

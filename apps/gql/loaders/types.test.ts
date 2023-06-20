import { describe, it, expectTypeOf } from "vitest";

import { type SozlukTermsLoader } from "./sozluk";
import { type UsersLoader } from "./users";
import { type DataLoaders } from "./types";

describe("Types of DataLoader", () => {

  it("should match the type of DataLoaders", () => {

    expectTypeOf<DataLoaders>().toMatchTypeOf<{
      users: UsersLoader;
      sozluk: {
        terms: SozlukTermsLoader;
      };
    }>()

  });

});

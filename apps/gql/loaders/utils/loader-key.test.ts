import { describe, expect, it } from "vitest";

import { KeyFactory, mapKeys } from "./loader-key";

const err = new Error("test");

describe("mapKeys", () => {
  it("should return mapped items", () => {
    const FooKey = KeyFactory<"foo" | "bar">;
    const keys: ReturnType<typeof FooKey>[] = [
      { identifier: "foo", value: "foo-1" },
      { identifier: "bar", value: "bar-2" },
    ];

    const dbItems: { foo: string; bar: string }[] = [
      { foo: "foo-1", bar: "bar-1" },
      { foo: "foo-2", bar: "bar-2" },
      { foo: "foo-3", bar: "bar-3" },
    ];

    expect(
      mapKeys(
        keys,
        dbItems,
        (item) => ({ ...item, test: null }),
        () => err
      )
    ).toEqual([
      { foo: "foo-1", bar: "bar-1", test: null },
      { foo: "foo-2", bar: "bar-2", test: null },
    ]);
  });
});

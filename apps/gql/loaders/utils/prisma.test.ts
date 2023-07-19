import { describe, expect, it } from "vitest";

import { ConnectionKey } from "./prisma-data-loader";

describe("ConnectionKey", () => {
  it("returns a key", () => {
    const key = ConnectionKey("parent-id");

    expect(key).toEqual({
      parentID: "parent-id",
    });
  });
});

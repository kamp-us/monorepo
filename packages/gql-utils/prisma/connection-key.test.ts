import { describe, expect, it } from "vitest";

import { ConnectionKey } from "./connection-key";

describe(ConnectionKey, () => {
  it("works with when no parent", () => {
    const key = new ConnectionKey();

    expect(key.arguments()).toEqual({
      before: null,
      after: null,
      first: null,
      last: null,
    });

    expect(key.getOverrides()).toEqual({});
  });

  describe("hash", () => {
    it.each([
      [new ConnectionKey()],
      [new ConnectionKey(null)],
      [new ConnectionKey(null, {})],
      [new ConnectionKey(null, { after: null })],
      [new ConnectionKey(null, { before: null })],
      [new ConnectionKey(null, { first: null })],
      [new ConnectionKey(null, { last: null })],
      [new ConnectionKey(null, { before: null, last: null })],
      [new ConnectionKey(null, { after: null, first: null })],
    ])("key: %j", (key) => {
      expect(key.hash()).toEqual(new ConnectionKey().hash());
    });
  });

  describe("getOverrides", () => {
    it("returns overrides", () => {
      const key = new ConnectionKey(null, null, { orderBy: { createdAt: "desc" } });
      expect(key.getOverrides()).toEqual({ orderBy: { createdAt: "desc" } });
    });
  });
});

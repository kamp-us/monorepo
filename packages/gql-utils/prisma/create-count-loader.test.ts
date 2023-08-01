import { describe, expect, it } from "vitest";

import { mockedPrisma, mockUpvote } from "./__mocks__/prisma";
import { ConnectionKey } from "./connection-key";
import { createPrismaCountLoader } from "./create-count-loader";

describe(createPrismaCountLoader, async () => {
  it("works", async () => {
    const byID = createPrismaCountLoader(mockedPrisma.upvote, "id");

    const result = await byID.load(new ConnectionKey("1"));
    expect(result).not.toBeNull();
  });

  it("returns an error when trying to load a model that doesn't exist", async () => {
    const byID = createPrismaCountLoader(mockedPrisma.upvote, "id");

    try {
      await byID.load(new ConnectionKey("2"));
    } catch (error) {
      expect(null).toThrowError(`not found id: 2`);
    }
  });
});

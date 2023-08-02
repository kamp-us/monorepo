import { beforeEach, describe, expect, it } from "vitest";

import { mockedPrisma } from "./__mocks__/prisma";
import { ConnectionKey } from "./connection-key";
import { createPrismaCountLoader } from "./create-count-loader";

describe(createPrismaCountLoader, () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mockedPrisma.upvote.count.mockImplementation((args: any): any => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return Promise.resolve(args?.where?.postID === "1" ? 1 : 0);
    });
  });

  it("works", async () => {
    const byID = createPrismaCountLoader(mockedPrisma.upvote, "postID");

    const result = await byID.load(new ConnectionKey("1"));
    expect(result).toBe(1);
  });

  it("returns zero when trying to load a model that doesn't exist", async () => {
    const byID = createPrismaCountLoader(mockedPrisma.upvote, "postID");

    const result = await byID.load(new ConnectionKey("2"));
    expect(result).toBe(0);
  });
});

import { describe, expect, it } from "vitest";

import { mockedPrisma, mockUpvote } from "./__mocks__/prisma";
import { ConnectionKey } from "./connection-key";
import { createPrismaCountLoader } from "./create-count-loader";

describe(createPrismaCountLoader, () => {
  it("works", async () => {
    mockedPrisma.upvote.findMany.mockResolvedValueOnce([mockUpvote({ id: "1" })]);

    const byID = createPrismaCountLoader(mockedPrisma.upvote, "id");
    const result = await Promise.all([byID.load(new ConnectionKey("1"))]);

    expect(result[0]).toEqual(mockUpvote({ id: "1" }));
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(mockedPrisma.upvote.findMany).toHaveBeenCalledWith({
      where: {
        id: { in: ["1"] },
        deletedAt: null,
      },
    });
  });

  it("returns an error when trying to load a model that doesn't exist", async () => {
    mockedPrisma.upvote.findMany.mockResolvedValueOnce([mockUpvote({ id: "1" })]);

    const byID = createPrismaCountLoader(mockedPrisma.user, "id");
    await expect(() => byID.load(new ConnectionKey("2"))).rejects.toThrowError("not found: id: 2");
  });
});

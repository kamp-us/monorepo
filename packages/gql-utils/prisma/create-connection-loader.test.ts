import { beforeEach, describe, expect, it, vi } from "vitest";

import { mockedPrisma, mockPost, mockUser } from "./__mocks__/prisma";
import { ConnectionKey } from "./connection-key";
import { createPrismaConnectionLoader } from "./create-connection-loader";

describe(createPrismaConnectionLoader, () => {
  beforeEach(() => {
    mockedPrisma.post.findMany.mockResolvedValueOnce([
      mockPost({ id: "1" }, mockUser({ id: "1" })),
      mockPost({ id: "2" }, mockUser({ id: "2" })),
      mockPost({ id: "3" }, mockUser({ id: "3" })),
      mockPost({ id: "4" }, mockUser({ id: "4" })),
      mockPost({ id: "5" }, mockUser({ id: "5" })),
      mockPost({ id: "6" }, mockUser({ id: "6" })),
    ]);
  });

  it("works without a foreign key", async () => {
    const allUsers = createPrismaConnectionLoader(mockedPrisma.post, null);

    await allUsers.load(new ConnectionKey());

    expect(mockedPrisma.post.findMany.mock.lastCall?.[0]?.where).toEqual({
      deletedAt: null,
    });
  });

  it("returns null when there is an identifier but no parentID in key", () => {
    const postsByUserID = createPrismaConnectionLoader(mockedPrisma.post, "userID");

    void expect(async () => {
      await postsByUserID.load(new ConnectionKey());
    }).rejects.toThrowError(/userID/);
  });

  it("works", async () => {
    const postsByUserID = createPrismaConnectionLoader(mockedPrisma.post, "userID");
    const users = await postsByUserID.load(new ConnectionKey("umut"));

    expect(users).not.toBeNull();
  });

  it("accepts a completion handler", async () => {
    const onComplete = vi.fn();
    const postsByUserID = createPrismaConnectionLoader(mockedPrisma.post, "userID", onComplete);

    const users = await postsByUserID.load(new ConnectionKey("umut"));

    expect(onComplete).toHaveBeenCalledWith([users]);
  });
});

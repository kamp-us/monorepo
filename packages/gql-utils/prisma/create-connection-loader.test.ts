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
    const users = await postsByUserID.load(new ConnectionKey("1"));

    expect(users).not.toBeNull();
  });

  it("accepts a completion handler", async () => {
    const onComplete = vi.fn();
    const postsByUserID = createPrismaConnectionLoader(mockedPrisma.post, "userID", onComplete);

    const users = await postsByUserID.load(new ConnectionKey("umut"));

    expect(onComplete).toHaveBeenCalledWith([users]);
  });

  it("uses overrides from connection key", async () => {
    const postsByUserID = createPrismaConnectionLoader(mockedPrisma.post, "userID");
    await postsByUserID.load(new ConnectionKey("1", null, { orderBy: { createdAt: "desc" } }));

    expect(mockedPrisma.post.findMany.mock.lastCall?.[0]).toEqual({
      orderBy: { createdAt: "desc" },
      where: { userID: "1", deletedAt: null },
    });
  });

  it("can't override the loader's identifier field in overrides", async () => {
    const postsByUserID = createPrismaConnectionLoader(mockedPrisma.post, "userID");
    await postsByUserID.load(new ConnectionKey("1", null, { where: { userID: "2" } }));

    expect(mockedPrisma.post.findMany.mock.lastCall?.[0]).toEqual({
      // it uses the "parentID" field given in the connection key, not the overrides
      // so we expect it to make a query with initial id
      where: { userID: "1", deletedAt: null },
    });
  });

  it("can't override where.deletedAt", async () => {
    const postsByUserID = createPrismaConnectionLoader(mockedPrisma.post, "userID");
    await postsByUserID.load(
      new ConnectionKey("1", null, { where: { deletedAt: new Date().toString() } })
    );

    expect(mockedPrisma.post.findMany.mock.lastCall?.[0]).toEqual({
      // loaders never exposes the deletedAt field, so override will not work
      // and it will still be null
      where: { userID: "1", deletedAt: null },
    });
  });
});

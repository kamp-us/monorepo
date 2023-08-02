import { beforeEach, describe, expect, it, vi } from "vitest";

import { mockedPrisma, mockUser } from "./__mocks__/prisma";
import { ConnectionKey } from "./connection-key";
import { createPrismaConnectionLoader } from "./create-connection-loader";

describe(createPrismaConnectionLoader, () => {
  beforeEach(() => {
    mockedPrisma.user.findMany.mockResolvedValueOnce([
      mockUser({ id: "1" }),
      mockUser({ id: "2" }),
      mockUser({ id: "3" }),
      mockUser({ id: "4" }),
      mockUser({ id: "5" }),
      mockUser({ id: "6" }),
    ]);
  });

  it("works without a foreign key", async () => {
    const allUsers = createPrismaConnectionLoader(mockedPrisma.user, null);

    await allUsers.load(new ConnectionKey());

    expect(mockedPrisma.user.findMany.mock.lastCall?.[0]?.where).toEqual({
      deletedAt: null,
    });
  });

  it("returns null when there is an identifier but no parentID in key", () => {
    // need to find a better example because "name" doesn't make sense with "parentID"
    // "name" needs to be replaced with an "id" column to represent real usecases.
    const allUsers = createPrismaConnectionLoader(mockedPrisma.user, "name");

    void expect(async () => {
      await allUsers.load(new ConnectionKey());
    }).rejects.toThrowError(/name/);
  });

  it("works", async () => {
    // need to find a better example because "name" doesn't make sense with "parentID"
    // "name" needs to be replaced with an "id" column to represent real usecases.
    const allUsers = createPrismaConnectionLoader(mockedPrisma.user, "name");

    const users = await allUsers.load(new ConnectionKey("umut"));
    expect(users).not.toBeNull();
  });

  it("accepts a completion handler", async () => {
    const onComplete = vi.fn();

    // need to find a better example because "name" doesn't make sense with "parentID"
    // "name" needs to be replaced with an "id" column to represent real usecases.
    const allUsers = createPrismaConnectionLoader(mockedPrisma.user, "name", onComplete);

    const users = await allUsers.load(new ConnectionKey("umut"));

    expect(onComplete).toHaveBeenCalledWith([users]);
  });
});

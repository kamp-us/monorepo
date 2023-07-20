import { describe, expect, it, vi } from "vitest";

import { mockedPrisma, mockUser } from "./__mocks__/prisma";
import { createPrismaLoader } from "./create-loader";

describe(createPrismaLoader, () => {
  it("works", async () => {
    mockedPrisma.user.findMany.mockResolvedValueOnce([
      mockUser({ id: "1" }),
      mockUser({ id: "2" }),
    ]);

    const byID = createPrismaLoader(mockedPrisma.user, "id");
    const result = await Promise.all([byID.load("1"), byID.load("2")]);

    expect(result[0]).toEqual(mockUser({ id: "1" }));
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(mockedPrisma.user.findMany).toHaveBeenCalledWith({
      where: {
        id: { in: ["1", "2"] },
        deletedAt: null,
      },
    });
  });

  it("returns an error when trying to load a model that doesn't exist", async () => {
    mockedPrisma.user.findMany.mockResolvedValueOnce([mockUser({ id: "2" })]);

    const byID = createPrismaLoader(mockedPrisma.user, "id");
    await expect(() => byID.load("1")).rejects.toThrowError("not found: id: 1");
  });

  it("accepts an onComplete handler after prisma fetch is done", async () => {
    mockedPrisma.user.findMany.mockResolvedValueOnce([
      mockUser({ id: "1" }),
      mockUser({ id: "2" }),
    ]);

    const onComplete = vi.fn();
    const byID = createPrismaLoader(mockedPrisma.user, "id", onComplete);

    const result = await Promise.all([byID.load("1"), byID.load("2")]);

    expect(onComplete).toHaveBeenCalledWith(result);
  });
});

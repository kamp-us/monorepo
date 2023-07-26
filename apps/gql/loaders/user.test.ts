import { beforeEach, describe, expect, it } from "vitest";

import { mockedClients } from "../clients/__mocks__/clients";
import { createUserLoaders } from "./user";

describe(createUserLoaders, () => {
  beforeEach(() => {
    mockedClients.prisma.user.findMany.mockResolvedValueOnce([
      {
        username: "test",
        emailVerified: new Date(),
        name: "test",
        image: null,
        id: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        email: "mock@email.com",
      },
    ]);
  });

  describe("byID", () => {
    it("fetches users by id", async () => {
      const { byID } = createUserLoaders(mockedClients);

      const result = await byID.load("1");

      expect(result.id).toBe("1");
      expect(result.username).toBe("test");
      expect(result.email).toBe("mock@email.com");
    });

    it("should throw error if user not found with id", async () => {
      const { byID } = createUserLoaders(mockedClients);
      await expect(() => byID.load("2")).rejects.toThrowError(/not found/);
    });
  });

  describe("byUsername", () => {
    it("fetches users by username", async () => {
      const { byUsername } = createUserLoaders(mockedClients);

      const result = await byUsername.load("test");

      expect(result.id).toBe("1");
      expect(result.username).toBe("test");
      expect(result.email).toBe("mock@email.com");
    });

    it("should throw error if user not found with username", async () => {
      const { byUsername } = createUserLoaders(mockedClients);
      await expect(() => byUsername.load("mock")).rejects.toThrowError(/not found/);
    });
  });
});

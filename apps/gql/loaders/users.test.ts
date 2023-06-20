import { describe, expect, it } from "vitest";

import { UserLoaderKey, createUsersLoader } from "./users";

import { mockedClients } from "../clients/__mocks__/clients";


describe("Users  Loader", () => {

  it("should create users loader", () => {
    const loader = createUsersLoader(mockedClients);

    expect(loader).toBeDefined();
  });

  it("should load defined user with id", async () => {
    const loader = createUsersLoader(mockedClients);

    mockedClients.prisma.user.findMany.mockResolvedValueOnce([{
      username: "test",
      id: "1",
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
      email: "mock@email.com"
    }])

    const result = await loader.load(
      new UserLoaderKey('id', '1')
    );

    expect(result).toBeDefined();
    expect(result).toMatchInlineSnapshot(`
      {
        "id": "1",
        "username": "test",
      }
    `);
  });

  it("should load defined user with username", async () => {
    const loader = createUsersLoader(mockedClients);

    mockedClients.prisma.user.findMany.mockResolvedValueOnce([{
      username: "test",
      id: "1",
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
      email: "mock@email.com"
    }])

    const result = await loader.load(
      new UserLoaderKey('username', 'test')
    );
    expect(result).toBeDefined();
    expect(result).toMatchInlineSnapshot(`
      {
        "id": "1",
        "username": "test",
      }
    `);
  });

  it("should throw error if user not found with id", async () => {
    const loader = createUsersLoader(mockedClients);

    await expect(loader.load(
      new UserLoaderKey("id", "2")
    )).rejects.toThrowError();
  });

  it("should throw error if user not found with username", async () => {
    const loader = createUsersLoader(mockedClients);

    await expect(loader.load(
      new UserLoaderKey("username", "mock")
    )).rejects.toThrowError();
  });
});

import { beforeEach } from "vitest";
import { mockDeep, mockReset } from "vitest-mock-extended";

import { type PrismaClient, type User } from "@kampus/prisma";

beforeEach(() => {
  mockReset(mockedPrisma);
});

export const mockedPrisma = mockDeep<PrismaClient>();

export const mockDate = (overrides: string | number | Date = "2020/15/10") => new Date(overrides);

export const mockUser = (overrides: Partial<User>): User => ({
  id: "1",
  username: "test",
  name: "test",
  image: null,
  emailVerified: mockDate(),
  createdAt: mockDate(),
  updatedAt: mockDate(),
  deletedAt: null,
  email: "mock@email.com",
  ...overrides,
});

import { beforeEach } from "vitest";
import { mockDeep, mockReset } from "vitest-mock-extended";

import { type Post, type PrismaClient, type Upvote, type User } from "@kampus/prisma";

beforeEach(() => {
  mockReset(mockedPrisma);
});

export const mockedPrisma = mockDeep<PrismaClient>();

export const mockDate = (overrides: string | number | Date = "2020/15/10") => new Date(overrides);

export const mockUser = (overrides: Partial<User> = {}): User => ({
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

export const mockUpvote = (overrides: Partial<Upvote> = {}): Upvote => ({
  id: "1",
  postID: "1",
  userID: "1",
  createdAt: mockDate(),
  updatedAt: mockDate(),
  deletedAt: null,
  ...overrides,
});

export const mockPost = (overrides: Partial<Post> = {}, owner = mockUser()): Post => ({
  id: "1",
  userID: owner.id,
  title: "mock title",
  content: "mock content",
  url: null,
  site: null,
  createdAt: mockDate(),
  updatedAt: mockDate(),
  deletedAt: null,
  ...overrides,
});

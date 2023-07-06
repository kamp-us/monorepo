import { beforeEach } from "vitest";
import { mockDeep, mockReset } from "vitest-mock-extended";

import { type PrismaClient } from "@kampus/prisma";

beforeEach(() => {
  mockReset(mockedPrisma);
});

export const mockedPrisma = mockDeep<PrismaClient>();

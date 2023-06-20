import { type PrismaClient } from '@kampus-db/pano-prisma'

import { beforeEach } from 'vitest'
import { mockDeep, mockReset } from 'vitest-mock-extended'

beforeEach(() => {
  mockReset(prisma)
})

const prisma = mockDeep<PrismaClient>();

export default prisma;
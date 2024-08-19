import { prisma } from '@/lib/prisma'
import { cache } from 'react'

// ADD CACHE LATER

export const revalidate = 3600

export const getAllBooks = cache(async () => {
  const books = await prisma.book.findMany({
    orderBy: { createdAt: 'desc' },
    include: { user: true, comments: true },
  })

  if (!books) return null

  return books
})

import { prisma } from '@/lib/prisma'
import { cache } from 'react'

export const revalidate = 3600

export const fetchBooksBySlug = cache(async (slug: string) => {
  const books = await prisma.book.findMany({
    where: { slug: { contains: slug } },
    orderBy: { createdAt: 'desc' },
  })

  if (!books) return null

  return books
})

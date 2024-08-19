import { prisma } from '@/lib/prisma'
import { cache } from 'react'

export const revalidate = 3600

export const fetchBooksByCategory = cache(async (category: string) => {
  if (category === 'Tudo') {
    const books = await prisma.book.findMany({})

    if (!books) return null

    return books
  }

  const books = await prisma.book.findMany({
    where: { category: { has: category } },
    orderBy: { createdAt: 'desc' },
  })

  if (!books) return null

  return books
})

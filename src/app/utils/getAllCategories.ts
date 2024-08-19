import { prisma } from '@/lib/prisma'
import { cache } from 'react'

// ADD CACHE LATER

export const revalidate = 3600

export const getAllCategories = cache(async () => {
  const booksCategory = await prisma.book.findMany({
    select: { category: true },
  })

  if (!booksCategory) return null

  const flattedCategories = booksCategory.map((book) => book.category).flat()

  const categoriesWithoutRepeatition = Array.from(new Set(flattedCategories))

  categoriesWithoutRepeatition.unshift('tudo')

  return categoriesWithoutRepeatition
})

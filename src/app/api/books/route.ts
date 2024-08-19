import { fetchBooksByCategory } from '@/app/utils/fetchBooksByCategory'
import { fetchBooksBySlug } from '@/app/utils/fetchBooksBySlug'
import { NextRequest, NextResponse } from 'next/server'

export const revalidate = 3600

export async function GET(req: NextRequest) {
  console.log(req.url)
  const { searchParams } = new URL(req.url)
  const search = searchParams.get('search')
  const category = searchParams.get('category')

  if (!search && !category)
    return NextResponse.json({ message: 'Error' }, { status: 400 })

  if (search) {
    const books = await fetchBooksBySlug(search)

    return NextResponse.json({ books })
  }

  if (category) {
    const books = await fetchBooksByCategory(category)

    return NextResponse.json({ books })
  }
}

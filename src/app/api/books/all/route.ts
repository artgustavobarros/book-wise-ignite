import { getAllBooks } from '@/app/utils/getAllBooks'

export const revalidate = 3600

export async function GET() {
  const books = await getAllBooks()
  return Response.json({ books })
}

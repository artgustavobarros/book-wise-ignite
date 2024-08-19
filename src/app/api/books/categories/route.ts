import { getAllCategories } from '@/app/utils/getAllCategories'

export const revalidate = 3600

export async function GET() {
  const categories = await getAllCategories()
  return Response.json({ categories })
}

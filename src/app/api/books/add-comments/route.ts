import { createComments } from '@/dev-utils/create-comments'

export const revalidate = 3600

export async function GET() {
  await createComments()
  return Response.json({ message: 'feito' })
}

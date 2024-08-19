import { createBooks } from '@/dev-utils/create-books'

export const revalidate = 3600

export async function GET() {
  await createBooks()
  return Response.json({ message: 'feito' })
}

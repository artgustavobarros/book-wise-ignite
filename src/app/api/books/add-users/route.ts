import { createUsers } from '@/dev-utils/create-users'

export const revalidate = 3600

export async function GET() {
  await createUsers()
  return Response.json({ message: 'feito' })
}

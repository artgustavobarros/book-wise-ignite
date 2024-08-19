import { handler } from '@/lib/next-oauth'

export const revalidate = 3600

export { handler as GET, handler as POST }

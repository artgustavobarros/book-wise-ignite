import { Book as PrismaBook, Comment, User } from '@prisma/client'

interface Book extends PrismaBook {
  user: User
  comments: Comment[]
}

/*
  Warnings:

  - The `rate` column on the `books` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `userId` to the `comments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "books" DROP COLUMN "rate",
ADD COLUMN     "rate" INTEGER[];

-- AlterTable
ALTER TABLE "comments" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

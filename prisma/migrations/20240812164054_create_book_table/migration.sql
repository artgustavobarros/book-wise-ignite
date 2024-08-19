/*
  Warnings:

  - You are about to drop the column `Author` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `Description` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `Rate` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `Thumb` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `User_photo` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `Username` on the `books` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `books` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `author` to the `books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rate` to the `books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumb` to the `books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_photo` to the `books` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "books_Username_key";

-- AlterTable
ALTER TABLE "books" DROP COLUMN "Author",
DROP COLUMN "Description",
DROP COLUMN "Name",
DROP COLUMN "Rate",
DROP COLUMN "Thumb",
DROP COLUMN "User_photo",
DROP COLUMN "Username",
ADD COLUMN     "author" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "rate" INTEGER NOT NULL,
ADD COLUMN     "thumb" TEXT NOT NULL,
ADD COLUMN     "user_photo" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "books_username_key" ON "books"("username");

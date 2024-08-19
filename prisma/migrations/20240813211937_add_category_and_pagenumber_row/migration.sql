/*
  Warnings:

  - Added the required column `pageNumber` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "books" ADD COLUMN     "category" TEXT[],
ADD COLUMN     "pageNumber" INTEGER NOT NULL;

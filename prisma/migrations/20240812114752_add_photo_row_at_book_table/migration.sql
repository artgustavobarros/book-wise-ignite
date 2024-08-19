/*
  Warnings:

  - Added the required column `User_photo` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "books" ADD COLUMN     "User_photo" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "books" (
    "id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Author" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "Rate" INTEGER NOT NULL,
    "Thumb" TEXT NOT NULL,
    "Username" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "books_id_key" ON "books"("id");

-- CreateIndex
CREATE UNIQUE INDEX "books_Username_key" ON "books"("Username");

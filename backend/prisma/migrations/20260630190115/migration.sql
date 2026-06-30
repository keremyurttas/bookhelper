/*
  Warnings:

  - You are about to drop the column `name` on the `Word` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[word]` on the table `Word` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `Word` table without a default value. This is not possible if the table is not empty.
  - Added the required column `word` to the `Word` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Word_name_key";

-- AlterTable
ALTER TABLE "Word" DROP COLUMN "name",
ADD COLUMN     "example" TEXT,
ADD COLUMN     "note" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "word" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Word_word_key" ON "Word"("word");

/*
  Warnings:

  - The primary key for the `Pokemon` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropIndex
DROP INDEX "Pokemon_name_userId_key";

-- AlterTable
ALTER TABLE "Pokemon" DROP CONSTRAINT "Pokemon_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Pokemon_pkey" PRIMARY KEY ("id");

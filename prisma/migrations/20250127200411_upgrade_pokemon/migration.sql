/*
  Warnings:

  - A unique constraint covering the columns `[name,userId]` on the table `Pokemon` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_name_userId_key" ON "Pokemon"("name", "userId");

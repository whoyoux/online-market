/*
  Warnings:

  - Added the required column `city` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `region` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "region" TEXT NOT NULL;

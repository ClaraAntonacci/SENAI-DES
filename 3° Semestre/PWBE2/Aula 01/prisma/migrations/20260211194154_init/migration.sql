/*
  Warnings:

  - You are about to drop the column `endreco` on the `cliente` table. All the data in the column will be lost.
  - Added the required column `endereco` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cliente` DROP COLUMN `endreco`,
    ADD COLUMN `endereco` VARCHAR(191) NOT NULL;

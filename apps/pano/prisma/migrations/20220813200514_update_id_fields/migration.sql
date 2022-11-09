/*
  Warnings:

  - You are about to drop the column `parentId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Password` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `Upvote` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Upvote` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userID]` on the table `Password` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `postID` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userID` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userID` to the `Password` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userID` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postID` to the `Upvote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userID` to the `Upvote` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_parentId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_postId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_userId_fkey";

-- DropForeignKey
ALTER TABLE "Password" DROP CONSTRAINT "Password_userId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_userId_fkey";

-- DropForeignKey
ALTER TABLE "Upvote" DROP CONSTRAINT "Upvote_postId_fkey";

-- DropForeignKey
ALTER TABLE "Upvote" DROP CONSTRAINT "Upvote_userId_fkey";

-- DropIndex
DROP INDEX "Password_userId_key";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "parentId",
DROP COLUMN "postId",
DROP COLUMN "userId",
ADD COLUMN     "parentID" TEXT,
ADD COLUMN     "postID" TEXT NOT NULL,
ADD COLUMN     "userID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Password" DROP COLUMN "userId",
ADD COLUMN     "userID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "userId",
ADD COLUMN     "userID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Upvote" DROP COLUMN "postId",
DROP COLUMN "userId",
ADD COLUMN     "postID" TEXT NOT NULL,
ADD COLUMN     "userID" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Password_userID_key" ON "Password"("userID");

-- AddForeignKey
ALTER TABLE "Upvote" ADD CONSTRAINT "Upvote_postID_fkey" FOREIGN KEY ("postID") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Upvote" ADD CONSTRAINT "Upvote_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_postID_fkey" FOREIGN KEY ("postID") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_parentID_fkey" FOREIGN KEY ("parentID") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Password" ADD CONSTRAINT "Password_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

/*
  Warnings:

  - Made the column `slug` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "slug" SET NOT NULL;

-- CreateTable
CREATE TABLE "CommentUpvote" (
    "id" TEXT NOT NULL,
    "commentID" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CommentUpvote_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CommentUpvote" ADD CONSTRAINT "CommentUpvote_commentID_fkey" FOREIGN KEY ("commentID") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentUpvote" ADD CONSTRAINT "CommentUpvote_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

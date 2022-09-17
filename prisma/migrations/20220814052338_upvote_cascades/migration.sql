-- DropForeignKey
ALTER TABLE "Upvote" DROP CONSTRAINT "Upvote_postID_fkey";

-- DropForeignKey
ALTER TABLE "Upvote" DROP CONSTRAINT "Upvote_userID_fkey";

-- AddForeignKey
ALTER TABLE "Upvote" ADD CONSTRAINT "Upvote_postID_fkey" FOREIGN KEY ("postID") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Upvote" ADD CONSTRAINT "Upvote_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

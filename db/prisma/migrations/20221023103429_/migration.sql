-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_postID_fkey";

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_postID_fkey" FOREIGN KEY ("postID") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

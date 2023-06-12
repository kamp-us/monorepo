-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('UPVOTE', 'COMMENT', 'REPLY');

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "notifiesUserID" TEXT NOT NULL,
    "triggeredByUserID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "NotificationType" NOT NULL,
    "postID" TEXT,
    "commentID" TEXT,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_notifiesUserID_fkey" FOREIGN KEY ("notifiesUserID") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_triggeredByUserID_fkey" FOREIGN KEY ("triggeredByUserID") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_postID_fkey" FOREIGN KEY ("postID") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_commentID_fkey" FOREIGN KEY ("commentID") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

import { Prisma } from "@prisma/client";
import { prisma } from "~/db.server";

export type NotificationType =
  | "UPVOTECOMMENT"
  | "UPVOTEPOST"
  | "COMMENT"
  | "REPLY";

export const getMyNotifications = (userID: string) => {
  return prisma.notification.findMany({
    where: {
      notifiesUserID: userID,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const createNotification = async (
  type: NotificationType,
  triggerUserID: string,
  postID: string | null,
  commentID: string | null
) => {
  let sourceData;

  if (postID) {
    sourceData = await prisma.post.findFirst({
      select: {
        userID: true,
      },
      where: {
        id: postID,
      },
    });
  } else if (commentID) {
    sourceData = await prisma.comment.findFirst({
      select: {
        userID: true,
      },
      where: {
        id: commentID,
      },
    });
  }

  if (sourceData == undefined) {
    throw new Error(
      "Both postID and commentID could not be null at the same time"
    );
  }

  // Can't notify if self
  if (sourceData.userID !== triggerUserID)
    return prisma.notification.create({
      data: {
        notifiesUserID: sourceData.userID,
        triggeredByUserID: triggerUserID,
        type,
        postID,
        commentID,
      },
    });
  return null;
};

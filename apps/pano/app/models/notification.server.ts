import { Prisma } from "@prisma/client";
import { prisma } from "~/db.server";

export type NotificationType =
  | "UPVOTECOMMENT"
  | "UPVOTEPOST"
  | "COMMENT"
  | "REPLY";

export type NotificationDeleteReason =
  | "UPVOTE_REMOVED_ON_POST"
  | "UPVOTE_REMOVED_ON_COMMENT"
  | "POST_DELETED"
  | "COMMENT_DELETED";

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
  postID: string | null | undefined,
  commentID: string | null | undefined
) => {
  let sourceData;

  // if the post owner is the replied comment owner,
  // do not send the comment notification
  if (commentID && postID && type === "COMMENT") {
    const postData = await prisma.comment.findFirst({
      select: {
        userID: true,
      },
      where: {
        id: commentID,
      },
    });
    const commentData = await prisma.post.findFirst({
      select: {
        userID: true,
      },
      where: {
        id: postID,
      },
    });

    if (postData?.userID === commentData?.userID) {
      return null;
    }
  } else if (commentID) {
    sourceData = await prisma.comment.findFirst({
      select: {
        userID: true,
      },
      where: {
        id: commentID,
      },
    });
  } else if (postID) {
    sourceData = await prisma.post.findFirst({
      select: {
        userID: true,
      },
      where: {
        id: postID,
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

export const deleteNotifications = async (
  type: NotificationDeleteReason,
  userID: string,
  parentID: string
) => {
  if (type === "UPVOTE_REMOVED_ON_POST") {
    const relevantUserData = await prisma.post.findFirst({
      select: {
        userID: true,
      },
      where: {
        id: parentID,
      },
    });

    if (relevantUserData)
      return await prisma.notification.deleteMany({
        where: {
          notifiesUserID: relevantUserData.userID,
          triggeredByUserID: userID,
          postID: parentID,
          type: "UPVOTEPOST",
        },
      });
    return null;
  } else if (type === "UPVOTE_REMOVED_ON_COMMENT") {
    const relevantUserData = await prisma.comment.findFirst({
      select: {
        userID: true,
      },
      where: {
        id: parentID,
      },
    });

    if (relevantUserData)
      return await prisma.notification.deleteMany({
        where: {
          notifiesUserID: relevantUserData.userID,
          triggeredByUserID: userID,
          commentID: parentID,
          type: "UPVOTECOMMENT",
        },
      });
    return null;
  }
};

import { Prisma } from "@prisma/client";
import { prisma } from "~/db.server";

export type NotificationType = "UPVOTECOMMENT" | "UPVOTEPOST" | "COMMENT";

export type NotificationDeleteReason =
  | "UPVOTE_REMOVED_ON_POST"
  | "UPVOTE_REMOVED_ON_COMMENT"
  | "POST_DELETED"
  | "COMMENT_DELETED";

export const getMyNotifications = (userID: string, page: number) => {
  return prisma.notification.findMany({
    where: {
      notifiesUserID: userID,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 10 * page,
  });
};

export const createNotification = async (
  type: NotificationType,
  triggerUserID: string,
  postID: string | null | undefined,
  commentID: string | null | undefined
) => {
  let commentData;
  // comment id may not exist
  // eg. when upvoted to a post
  if (commentID) {
    commentData = await prisma.comment.findFirst({
      select: {
        userID: true,
      },
      where: {
        id: commentID,
      },
    });
  }

  let postData;
  if (postID)
    postData = await prisma.post.findFirst({
      select: {
        userID: true,
      },
      where: {
        id: postID,
      },
    });

  // create notification for the reply
  // or comment upvote
  if (commentData)
    if (commentData.userID !== triggerUserID)
      await prisma.notification.create({
        data: {
          notifiesUserID: commentData.userID,
          triggeredByUserID: triggerUserID,
          type: type === "UPVOTECOMMENT" ? type : "REPLY",
          postID,
          commentID,
        },
      });

  // create notification for the post owner.
  if (postData) {
    // don't create notification for comment
    // if reply notification was for
    // the same user.
    if (postData?.userID === commentData?.userID) return null;
    if (postData.userID !== triggerUserID)
      return await prisma.notification.create({
        data: {
          notifiesUserID: postData.userID,
          triggeredByUserID: triggerUserID,
          type: type,
          postID,
          commentID,
        },
      });
    return null;
  }
  throw new Error("Invalid post id");
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

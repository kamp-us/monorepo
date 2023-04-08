import { Notification, Prisma } from "@prisma/client";
import { prisma } from "~/db.server";
import { getExternalCommentURL, getExternalPostURL } from "~/utils";
import { env } from "~/utils/env.server";

export type NotificationType = "UPVOTECOMMENT" | "UPVOTEPOST" | "COMMENT";

export type MyNotification = Pick<
  Notification,
  "id" | "url" | "type" | "read" | "createdAt"
> & {
  triggeredBy: { username: string };
  post: { title: string } | null;
  comment: { content: string; id: string } | null;
};

export type NotificationDeleteReason =
  | "UPVOTE_REMOVED_ON_POST"
  | "UPVOTE_REMOVED_ON_COMMENT"
  | "POST_DELETED"
  | "COMMENT_DELETED";

export const getMyNotifications = (userID: string, page: number) => {
  return prisma.notification.findMany({
    select: {
      id: true,
      type: true,
      url: true,
      read: true,
      createdAt: true,
      triggeredBy: {
        select: {
          username: true,
        },
      },
      post: {
        select: {
          title: true,
        },
      },
      comment: {
        select: {
          id: true,
          content: true,
        },
      },
    },
    where: {
      notifiesUserID: userID,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 10 * page,
  });
};

export const readMyNotifications = async (userID: string) => {
  await prisma.notification.updateMany({
    where: {
      notifiesUserID: userID,
      read: false,
    },
    data: {
      read: true,
    },
  });

  return await getMyNotifications(userID, 1);
};

export const readMyNotification = async (userID: string, id: string) => {
  await prisma.notification.update({
    where: {
      id,
    },
    data: {
      read: true,
    },
  });

  return await getMyNotifications(userID, 1);
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
        id: true,
        post: {
          select: {
            id: true,
            slug: true,
          },
        },
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
        slug: true,
        id: true,
      },
      where: {
        id: postID,
      },
    });

  // create notification for the reply
  // or comment upvote
  if (commentData)
    if (commentData.userID !== triggerUserID) {
      const commentUrl = getExternalCommentURL({
        baseUrl: env.BASE_URL,
        post: commentData.post,
        comment: commentData,
      });
      await prisma.notification.create({
        data: {
          notifiesUserID: commentData.userID,
          triggeredByUserID: triggerUserID,
          type: type === "UPVOTECOMMENT" ? type : "REPLY",
          postID,
          commentID,
          url: commentUrl,
        },
      });
    }

  // create notification for the post owner.
  if (postData) {
    console.log("HERE");
    const postUrl = getExternalPostURL({
      post: postData,
      baseUrl: env.BASE_URL,
    });
    console.log("POSTURL");
    console.log(postUrl);
    // don't create notification for comment
    // if reply notification was for
    // the same user.
    if (postData.userID === commentData?.userID) return null;
    if (postData.userID !== triggerUserID)
      return await prisma.notification.create({
        data: {
          notifiesUserID: postData.userID,
          triggeredByUserID: triggerUserID,
          type: type,
          postID,
          commentID,
          url: postUrl,
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

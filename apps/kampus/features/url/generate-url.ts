import { env } from "~/env";

export function getCommentURL({
  baseUrl,
  postID,
  commentID,
}: {
  baseUrl: string;
  postID: string;
  commentID: string;
}) {
  const postURL = getPostURL({ postID, baseUrl });
  const commentUrl = `${postURL}#c_${commentID}`;
  return commentUrl;
}

export function getPostURL({ postID, baseUrl }: { postID: string; baseUrl: string }) {
  const postUrl = baseUrl + getPostLink(postID);
  return postUrl;
}

export function getPostLink(postID: string) {
  const postUrl = `/posts/${postID}`;
  return postUrl;
}

export function getSitePostsLink(post: { site: string }) {
  const postUrl = `/site/${post.site}`;
  return postUrl;
}

type KampusProduct = "sozluk" | "pano" | "pasaport";

export const generateBaseURL = (product: KampusProduct) => {
  const kampusEnv = env.KAMPUS_ENV;
  switch (kampusEnv) {
    case "localhost":
      return `http://${product}.localhost.kamp.us:3000`;
    case "development":
      return `https://${product}.dev.kamp.us`;
    case "production":
      return `https://${product}.kamp.us`;
    default:
      return `https://${product}.kamp.us`;
  }
};

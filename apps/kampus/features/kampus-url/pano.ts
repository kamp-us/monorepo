import { getKampusURL } from "./get-kampus-url";

export function getPostURL({ postID }: { postID: string }) {
  const baseUrl = getKampusURL("pano");
  const postUrl = getPostLink(postID);

  return `${baseUrl}${postUrl}`;
}

export function getCommentURL({ postID, commentID }: { postID: string; commentID: string }) {
  const post = getPostURL({ postID });
  const comment = `#c_${commentID}`;

  return `${post}${comment}`;
}

function getPostLink(postID: string) {
  return `/post/${postID}`;
}

function getSitePostsLink(post: { site: string }) {
  return `/site/${post.site}`;
}

import { getKampusURL } from "./get-kampus-url";

export function getPostURL({ id }: { id: string }) {
  return getKampusURL("pano", getPostLink(id));
}

export function getCommentURL({ postID, commentID }: { postID: string; commentID: string }) {
  return getKampusURL("pano", getCommentLink(postID, commentID));
}

export function getSitePostsURL(post: { site: string }) {
  return getKampusURL("pano", getSitePostsLink(post));
}

function getPostLink(postID: string) {
  return `post/${postID}`;
}

function getCommentLink(postID: string, commentID: string) {
  const post = getPostLink(postID);
  const comment = `#c_${commentID}`;

  return `${post}${comment}`;
}

function getSitePostsLink(post: { site: string }) {
  return `site/${post.site}`;
}

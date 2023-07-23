"use client";

import {
  FacebookIcon,
  FacebookShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

interface SocialMediaButtonProps {
  postUrl: string;
  size: number;
}

export const FacebookShare = (props: SocialMediaButtonProps) => {
  const { postUrl, size } = props;
  return (
    <FacebookShareButton url={postUrl}>
      <FacebookIcon round size={size} />
    </FacebookShareButton>
  );
};

export const TwitterShare = (props: SocialMediaButtonProps) => {
  const { postUrl, size } = props;
  return (
    <TwitterShareButton url={postUrl}>
      <TwitterIcon round size={size} />
    </TwitterShareButton>
  );
};

export const RedditShare = (props: SocialMediaButtonProps) => {
  const { postUrl, size } = props;
  return (
    <RedditShareButton url={postUrl}>
      <RedditIcon round size={size} />
    </RedditShareButton>
  );
};

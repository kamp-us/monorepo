import {
  FacebookIcon,
  FacebookShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

type SocialMediaButtonProps = {
  postUrl: string;
  size: number;
};

export const FacebookShare = ({ postUrl, size }: SocialMediaButtonProps) => {
  return (
    <FacebookShareButton url={postUrl}>
      <FacebookIcon round size={size} />
    </FacebookShareButton>
  );
};

export const TwitterShare = ({ postUrl, size }: SocialMediaButtonProps) => {
  return (
    <TwitterShareButton url={postUrl}>
      <TwitterIcon round size={size} />
    </TwitterShareButton>
  );
};

export const RedditShare = ({ postUrl, size }: SocialMediaButtonProps) => {
  return (
    <RedditShareButton url={postUrl}>
      <RedditIcon round size={size} />
    </RedditShareButton>
  );
};

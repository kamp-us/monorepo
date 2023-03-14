import { DiscordLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import React from "react";
import type { FC } from "react";

type Props = {
  provider: "discord" | "github";
  height?: number;
  width?: number;
};

export const OAuthProviderLogo: FC<Props> = ({ provider, height, width }) => {
  switch (provider) {
    case "discord":
      return <DiscordLogoIcon height={height} width={width} />;
    case "github":
      return <GitHubLogoIcon height={height} width={width} />;
    default:
      return null;
  }
};

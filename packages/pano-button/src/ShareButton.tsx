import { Button } from "@kampus/ui";
import React from "react";
import type { FC } from "react";

type Props = {
  url: string;
  environment: "production" | "development";
};

export const ShareButton: FC<Props> = ({ url, environment }) => {
  const handleClick = () => {
    let shareUrl;

    if (environment === "development") shareUrl = `http://pano-dev.kamp.us/send?url=${encodeURIComponent(url)}`;
    if (environment === "production") shareUrl = `http://pano.kamp.us/send?url=${encodeURIComponent(url)}`;

    if (typeof window === "undefined") return;
    window.open(shareUrl, "_blank");
  };

  return <Button onClick={handleClick}>Bunu Kamp.us Pano'da paylaş</Button>;
};

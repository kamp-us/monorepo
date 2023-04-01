import { Button } from "@kampus/ui";
import React from "react";
import type { FC } from "react";

type Props = {
  url: string;
};

export const ShareButton: FC<Props> = ({ url }) => {
  const handleClick = () => {
    const shareUrl = `http://pano-dev.kamp.us/send?url=${encodeURIComponent(
      url
    )}`;

    if (typeof window === "undefined") return;
    window.open(shareUrl, "_blank");
  };

  return <Button onClick={handleClick}>Bunu Kamp.us Pano'da paylaş</Button>;
};

import { Triangle } from "lucide-react";

import { Button } from "@kampus/ui-next";
import { cn } from "@kampus/ui-next/utils";

interface UpvoteProps {
  isUpvoted: boolean;
  upvoteCount: number;
  isVoting: boolean;
  disabled?: boolean;
}

export const UpvoteButton = (props: UpvoteProps) => {
  const upvoteStyle = props.isUpvoted ? "fill-primary" : "fill-none";
  const opacity = props.isVoting ? "opacity-50" : "opacity-100";
  const combinedStyle = cn(upvoteStyle, opacity);

  return (
    <Button className="flex h-full flex-col" variant="outline">
      <Triangle className={combinedStyle} size={12} />
      {props.upvoteCount}
    </Button>
  );
};

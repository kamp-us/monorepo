import { Triangle } from "lucide-react";

import { Button } from "@kampus/ui-next";

import { cn } from "~/../../packages/ui/utils";

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
    <Button className="flex h-full items-center" variant="ghost">
      <div className="flex flex-col items-center justify-center">
        <Triangle className={combinedStyle} size={12} />
        {`${props.upvoteCount}`}
      </div>
    </Button>
  );
};

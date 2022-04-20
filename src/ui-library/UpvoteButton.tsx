import { TriangleUpIcon } from "@radix-ui/react-icons";
import { FC } from "react";
import { styled } from "../stitches.config";
import { Box } from "./layout-components/Box";
import { Button } from "./layout-components/Button";

type UpvoteProps = {
  isUpvoted: boolean;
  upvoteCount: number;
  isVoting: boolean;
};

export const UpvoteButton: FC<UpvoteProps> = ({
  isUpvoted,
  upvoteCount,
  isVoting = false,
}) => {
  return (
    <Button
      color="transparent"
      title={`${upvoteCount} beğeni`}
      css={{
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      type="submit"
    >
      <Triangle
        css={{
          width: 24,
          height: 24,
          color: isUpvoted ? "$amber9" : "$gray9",
          opacity: isVoting ? 0.5 : 1,
        }}
      />
      <Box>{upvoteCount}</Box>
    </Button>
  );
};

const Triangle = styled(TriangleUpIcon, {});

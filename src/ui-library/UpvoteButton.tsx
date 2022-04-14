import { TriangleUpIcon } from "@radix-ui/react-icons";
import { FC } from "react";
import { styled } from "../stitches.config";
import { Box } from "./layout-components/Box";
import { Button } from "./layout-components/Button";

type UpvoteProps = {
  isUpvoted: boolean;
  onClick: () => void;
  upvoteCount: number;
};

export const UpvoteButton: FC<UpvoteProps> = ({
  isUpvoted,
  onClick,
  upvoteCount,
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
      onClick={onClick}
    >
      <Triangle
        css={{
          width: 24,
          height: 24,
          color: isUpvoted ? "$purple9" : "$gray9",
        }}
      />
      <Box>{upvoteCount}</Box>
    </Button>
  );
};

const Triangle = styled(TriangleUpIcon, {});

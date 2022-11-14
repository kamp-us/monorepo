import { TriangleUpIcon } from "@radix-ui/react-icons";
import type { FC } from "react";
import { styled } from "~/stitches.config";
import { Box, GappedBox, OldButton, Text } from "~/ui-library";

type UpvoteProps = {
  isUpvoted: boolean;
  upvoteCount: number;
  isVoting: boolean;
  disabled?: boolean;
};

export const UpvoteButton: FC<UpvoteProps> = ({
  isUpvoted,
  upvoteCount,
  isVoting = false,
  disabled = false,
}) => {
  return (
    <OldButton
      color="transparent"
      title={`${upvoteCount} beğeni`}
      css={{
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      type="submit"
      disabled={disabled}
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
    </OldButton>
  );
};

const Triangle = styled(TriangleUpIcon, {});

export const CommentUpvoteButton: FC<UpvoteProps> = ({
  isUpvoted,
  upvoteCount,
  isVoting = false,
  disabled = false,
}) => {
  return (
    <OldButton
      color="transparent"
      title={`${upvoteCount} beğeni`}
      css={{
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "2px 4px",
      }}
      type="submit"
      disabled={disabled}
    >
      <GappedBox css={{ alignItems: "center", gap: 1 }}>
        <Triangle
          css={{
            width: 18,
            height: 18,
            color: isUpvoted ? "$amber9" : "$gray9",
            opacity: isVoting ? 0.5 : 1,
          }}
        />
        <Box css={{ paddingRight: 3 }}>
          <Text>{upvoteCount} Beğeni</Text>
        </Box>
      </GappedBox>
    </OldButton>
  );
};

import { Box, GappedBox, OldButton, styled, Text } from "@kampus/ui";
import { TriangleUpIcon } from "@radix-ui/react-icons";
import { NavigateFunction, useNavigate } from "@remix-run/react";
import type { FC } from "react";

type UpvoteProps = {
  isUpvoted: boolean;
  upvoteCount: number;
  isVoting: boolean;
  disabled?: boolean;
};

const navigateHandler = (disabled: boolean, navigate: NavigateFunction) => {
  if (disabled) {
    navigate("/login");
  }
};

export const UpvoteButton: FC<UpvoteProps> = ({
  isUpvoted,
  upvoteCount,
  isVoting = false,
  disabled = false,
}) => {
  const navigate = useNavigate();
  return (
    <OldButton
      onClick={() => navigateHandler(disabled, navigate)}
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
  const navigate = useNavigate();
  return (
    <OldButton
      onClick={() => navigateHandler(disabled, navigate)}
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

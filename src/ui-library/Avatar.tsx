import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { styled } from "~/stitches.config";

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  width: 36,
  height: 36,
  borderRadius: "100%",
  backgroundColor: "$gray3",
});

const StyledImage = styled(AvatarPrimitive.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$gray3",
  color: "$gray11",
  fontSize: "$2",
  lineHeight: 1,
  fontWeight: 600,

  "&:hover": {
    backgroundColor: "$gray4",
    color: "$amber11",
  },

  "&:active": {
    backgroundColor: "$gray5",
  },
});

// Exports
export const Avatar = StyledAvatar;
export const AvatarImage = StyledImage;
export const AvatarFallback = StyledFallback;

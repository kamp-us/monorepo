import * as LabelPrimitive from "@radix-ui/react-label";
import { styled } from "~/stitches.config";

export const Label = styled(LabelPrimitive.Root, {
  fontSize: "$3",
  color: "$gray12",
  fontWeight: 500,
  userSelect: "none",
});

import { styled } from "~/stitches.config";
import { OldButton } from "./layout-components/Button";

export const IconButton = styled(OldButton, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$gray12",
  borderRadius: 9999,
  padding: 0,
  width: 36,
  height: 36,
});

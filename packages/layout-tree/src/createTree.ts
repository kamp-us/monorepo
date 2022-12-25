import type { Node } from "./models/Node";
import { Tree } from "./models/Tree";

export const createTree = (root: Node) => {
  return new Tree(root);
};

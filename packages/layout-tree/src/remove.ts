import { getAt } from "./getAt";
import { Tree } from "./models/Tree";

export const remove = (tree: Tree, index: number): Tree => {
  const node = getAt(tree, index);
  if (!node) {
    return tree;
  }

  const parent = node.parent;
  if (!parent) {
    return tree;
  }

  parent.removeChild(node);

  if (parent.children.length === 1) {
    if (!parent.parent) {
      return new Tree(parent.children[0]);
    }

    const parentIndex = parent.parent.indexOf(parent);
    parent.parent.children[parentIndex] = parent.children[0];
  }

  return new Tree(tree.root);
};

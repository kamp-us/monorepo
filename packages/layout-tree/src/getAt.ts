import type { Node } from "./models/Node";
import type { Tree } from "./models/Tree";

export const traverse = (
  root: Node,
  traverser: (node: Node, index: number) => void
) => {
  let index = 0;

  const traverseChildren = (node_: Node) => {
    if (node_.children) {
      return node_.children.forEach(traverseChildren);
    }
    traverser(node_, index++);
  };

  traverseChildren(root);
};

export const getAt = <T = unknown>(
  tree: Tree,
  index: number
): Node<T> | null => {
  let node: Node<T> | null = null;

  traverse(tree.root, (leaf, i) => {
    if (i === index) {
      node = leaf as Node<T>;
    }
  });

  return node;
};

import { Orientation } from "./constants";
import { createNode } from "./createNode";
import { createTree } from "./createTree";
import { NodeType } from "./models/Node";
import { Tree } from "./models/Tree";
import { split } from "./split";

describe("split", () => {
  it("returns the tree unchanged if there is not a node at given index", () => {
    const tree = createTree(createNode({ meta: { id: "root" } }));
    const newTree = split(tree, 5, Orientation.Vertical);

    expect(newTree === tree).toBe(true);
  });

  it("splits an empty tree correctly", () => {
    const tree = createTree(createNode({ meta: { id: "root" } }));
    const newTree = split(tree, 0, Orientation.Vertical);

    expect(newTree.root.children.length).toEqual(2);
    expect(newTree.root.children[0].parent).toBe(newTree.root);
    expect(newTree.root.children[1].parent).toBe(newTree.root);
  });

  describe("when root is vertically splitted", () => {
    let tree: Tree;
    beforeEach(() => {
      tree = createTree(
        createNode({
          meta: { id: "root" },
          orientation: Orientation.Vertical,
          children: [
            createNode({ meta: { id: 0 } }),
            createNode({ meta: { id: 1 } }),
          ],
        }),
      );
    });

    it("should have 3 children under root if split orientation is vertical", () => {
      const newTree = split(tree, 0, Orientation.Vertical);
      expect((newTree.root.children[0].meta as { id: number }).id).toBe(0);
      expect((newTree.root.children[1].meta as { id: number }).id).toBe(0);
      expect((newTree.root.children[2].meta as { id: number }).id).toBe(1);
    });

    it("should handle horizontal split", () => {
      const newTree = split(tree, 0, Orientation.Horizontal);

      expect(newTree.root.orientation).toBe(Orientation.Vertical);
      expect(newTree.root.children.length).toBe(2);

      console.log(newTree.root.children);

      expect(newTree.root.children[0].type).toBe(NodeType.Parent);
    });
  });
  it("should handle complex splits", () => {
    const tree = createTree(
      createNode({
        meta: { id: "root" },
        orientation: Orientation.Vertical,
        children: [
          createNode({ meta: { id: 0 } }),
          createNode({
            meta: { id: "parent-0" },
            orientation: Orientation.Horizontal,
            children: [
              createNode({ meta: { id: 1 } }),
              createNode({ meta: { id: 2 } }),
              createNode({ meta: { id: 3 } }),
            ],
          }),
          createNode({ meta: { id: 4 } }),
          createNode({ meta: { id: 5 } }),
        ],
      }),
    );

    const newTree = split(tree, 2, Orientation.Horizontal);
    expect(newTree.root.children[1].children.length).toBe(4);
  });
});

import { Orientation } from "./constants";
import { createNode } from "./createNode";
import { createTree } from "./createTree";
import { remove } from "./remove";

describe("remove", () => {
  describe("when there are more than 2 children", () => {
    it("works", () => {
      const tree = createTree(
        createNode({
          meta: { id: "root" },
          orientation: Orientation.Vertical,
          children: [
            createNode({ meta: { id: 0 } }),
            createNode({ meta: { id: 1 } }),
            createNode({ meta: { id: 2 } }),
          ],
        }),
      );

      const newTree = remove(tree, 1);
      expect(newTree.root.children.length).toEqual(2);
      expect(newTree.root.children[0].meta).toEqual({ id: 0 });
      expect(newTree.root.children[1].meta).toEqual({ id: 2 });
    });
  });

  describe("when there are 2 children", () => {
    it("should replace root with itself", () => {
      const tree = createTree(
        createNode({
          meta: { id: "root" },
          orientation: Orientation.Vertical,
          children: [
            createNode({ meta: { id: 0 } }),
            createNode({ meta: { id: 1 } }),
          ],
        }),
      );

      const newTree = remove(tree, 1);
      expect(newTree.root.meta).toEqual({ id: 0 });
    });

    it("should replace parent with itself", () => {
      const tree = createTree(
        createNode({
          meta: { id: "root" },
          orientation: Orientation.Vertical,
          children: [
            createNode({
              meta: { id: "0" },
              orientation: Orientation.Vertical,
              children: [
                createNode({ meta: { id: "00" } }),
                createNode({ meta: { id: "01" } }),
              ],
            }),
            createNode({ meta: { id: "1" } }),
            createNode({ meta: { id: "2" } }),
          ],
        }),
      );

      const newTree = remove(tree, 1);
      expect(newTree.root.children[0].meta).toEqual({ id: "00" });
    });
  });
});

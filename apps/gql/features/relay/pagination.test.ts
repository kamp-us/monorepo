import { describe, expect, it } from "vitest";

import { applyCursors } from "./pagination";

describe("pagination", () => {
  describe("applyCursors", () => {
    it("returns given data when there is no after and before", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }];

      const result = applyCursors(data);

      expect(result).toEqual(data);
    });

    it("returns correct data when there is after and no before", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }];

      const result = applyCursors(data, null, "2");

      expect(result).toEqual([{ id: "3" }]);
    });

    it("returns same data when there is after but it is not in the data", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }];

      const result = applyCursors(data, null, "4");

      expect(result).toEqual(data);
    });

    it("returns correct data when there is before and no after", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }];

      const result = applyCursors(data, "2", null);

      expect(result).toEqual([{ id: "1" }]);
    });

    it("returns same data when there is before but it is not in the data", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }];

      const result = applyCursors(data, "4", null);

      expect(result).toEqual(data);
    });

    it("returns correct data when there is both after and before", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }];

      const result = applyCursors(data, "3", "1");

      expect(result).toEqual([{ id: "2" }]);
    });

    it("applies after first when there is after and before", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }];

      const result = applyCursors(data, "2", "2");

      expect(result).toEqual([{ id: "3" }]);
    });
  });
});

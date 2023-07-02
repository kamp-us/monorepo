import { describe, expect, it } from "vitest";

import { applyCursors, applyFirstAndLast } from "./pagination";

describe("pagination", () => {
  describe("applyCursors", () => {
    it("returns given data when there is no after and before", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }];

      const result = applyCursors({ data });

      expect(result).toEqual(data);
    });

    it("returns correct data when there is after and no before", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }];

      const result = applyCursors({ data, after: "2", before: null });

      expect(result).toEqual([{ id: "3" }]);
    });

    it("returns same data when there is after but it is not in the data", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }];

      const result = applyCursors({ data, after: "4", before: null });

      expect(result).toEqual(data);
    });

    it("returns correct data when there is before and no after", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }];

      const result = applyCursors({ data, before: "2", after: null });

      expect(result).toEqual([{ id: "1" }]);
    });

    it("returns same data when there is before but it is not in the data", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }];

      const result = applyCursors({ data, before: "4", after: null });

      expect(result).toEqual(data);
    });

    it("returns correct data when there is both after and before", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }];

      const result = applyCursors({ data, after: "1", before: "3" });

      expect(result).toEqual([{ id: "2" }]);
    });

    it("applies after first when there is after and before", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }];

      const result = applyCursors({ data, after: "2", before: "2" });

      expect(result).toEqual([{ id: "3" }]);
    });
  });
  describe("applyFirstAndLast", () => {
    it("returns given data when there is no first and last", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }];

      const result = applyFirstAndLast({ data });

      expect(result).toEqual(data);
    });

    it("returns correct data when there is first and no last", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }];

      const result = applyFirstAndLast({ data, first: 2 });

      expect(result).toEqual([{ id: "1" }, { id: "2" }]);
    });

    it("returns correct data when there is last and no first", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }];

      const result = applyFirstAndLast({ data, last: 2 });

      expect(result).toEqual([{ id: "2" }, { id: "3" }]);
    });

    it("applies first arg first when there is both first and last", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }];

      const result = applyFirstAndLast({ data, first: 3, last: 2 });

      expect(result).toEqual([{ id: "2" }, { id: "3" }]);
    });

    it("returns same data when there is first but it is bigger than data length", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }];

      const result = applyFirstAndLast({ data, first: 4 });

      expect(result).toEqual(data);
    });

    it("returns same data when there is last but it is bigger than data length", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }];

      const result = applyFirstAndLast({ data, last: 4 });

      expect(result).toEqual(data);
    });

    it("throws error when the first or last arg is negative", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }];

      expect(() => applyFirstAndLast({ data, first: -1 })).toThrow('Invalid value for "first".');
      expect(() => applyFirstAndLast({ data, last: -1 })).toThrow('Invalid value for "last".');
    });
  });
});

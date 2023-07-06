import { describe, expect, it } from "vitest";

import {
  applyCursors,
  applyFirstAndLast,
  applyPagination,
  hasNextPage,
  hasPreviousPage,
} from "./pagination";

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

  describe("applyPagination", () => {
    it("returns given data when there is no first, last, after and before", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }];

      const result = applyPagination({ data });

      expect(result).toEqual(data);
    });

    it("applies {after, before} first and then {first, last}", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];

      const result = applyPagination({ data, first: 2, after: "1" });

      expect(result).toEqual([{ id: "2" }, { id: "3" }]);
    });

    it("returns same data when there is first but it is bigger than data length", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }];

      const result = applyPagination({ data, first: 4 });

      expect(result).toEqual(data);
    });
  });

  describe("hasNextPage", () => {
    it("returns false when there is no first, last, after and before", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }];

      const result = hasNextPage({ data });

      expect(result).toEqual(false);
    });

    it("returns false when there is first and it is bigger than data length", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }];

      const result = hasNextPage({ data, first: 4 });

      expect(result).toEqual(false);
    });

    it("returns true if there is first and data length is bigger than first", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];

      const result = hasNextPage({ data, first: 2 });

      expect(result).toEqual(true);
    });

    it("returns false when there is before and it is not in the data", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }];

      const result = hasNextPage({ data, before: "4" });

      expect(result).toEqual(false);
    });

    it("returns false when there is before and there is no data before that", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];

      const result = hasNextPage({ data, before: "1" });

      expect(result).toEqual(false);
    });

    it("returns false if there is only after or last", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];

      const withAfter = hasNextPage({ data, after: "1" });
      const withLast = hasNextPage({ data, last: 2 });

      expect(withAfter).toEqual(false);
      expect(withLast).toEqual(false);
    });
  });

  describe("hasPreviousPage", () => {
    it("returns false when there is no first, last, after and before", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }];

      const result = hasPreviousPage({ data });

      expect(result).toEqual(false);
    });

    it("returns false when there is last and it is bigger than data length", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }];

      const result = hasPreviousPage({ data, last: 4 });

      expect(result).toEqual(false);
    });

    it("returns true if there is last and data length is bigger than last", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];

      const result = hasPreviousPage({ data, last: 2 });

      expect(result).toEqual(true);
    });

    it("returns false when there is after and it is not in the data", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }];

      const result = hasPreviousPage({ data, after: "4" });

      expect(result).toEqual(false);
    });

    it("returns false when there is after and no data before", () => {
      const data = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];

      const result = hasPreviousPage({ data, after: "1" });

      expect(result).toEqual(false);
    });
  });
});

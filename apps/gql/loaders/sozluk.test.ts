import { describe, expect, it, vi } from "vitest";

import { mockedClients } from "../clients/__mocks__/clients";
import { createSozlukLoaders } from "./sozluk";

// mock runs before everything so import needs to be handled here.
vi.mock("@kampus/sozluk-content", async () => {
  const { mockedTerms } = await import("./__mocks__/sozluk");
  return {
    allTerms: mockedTerms,
  };
});

describe("Sozluk Loader", () => {
  describe("term loader", () => {
    it("should load terms", async () => {
      const loader = createSozlukLoaders(mockedClients);

      const result = await loader.term.load("1");

      expect(result).toMatchObject({
        body: {
          code: "code",
          html: "mdxHtml",
          raw: "raw",
        },
        id: "1",
        tags: ["tag1", "tag2"],
        title: "title",
      });
    });

    it("should return null if term not found", () => {
      const loader = createSozlukLoaders(mockedClients);

      void expect(async () => {
        await loader.term.load("2");
      }).rejects.toThrowError("Term not found for: 2");
    });
  });
});

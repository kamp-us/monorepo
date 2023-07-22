import { describe, expect, it, vi } from "vitest";

import { createLoaders, type DataLoaders } from "~/loaders";
import { mockedClients } from "../../../../clients/__mocks__/clients";
import { term } from "./term";

vi.mock("@kampus/sozluk-content", async () => {
  const { mockedTerms } = await import("~/loaders/__mocks__/sozluk");
  return {
    allTerms: mockedTerms,
  };
});

describe("Term Query", () => {
  const loaders: DataLoaders = createLoaders(mockedClients);

  it("should find searched term", async () => {
    const result = await term(
      // need to inject this
      { term: null, terms: null },
      // this is the args
      { id: "1" },
      { loaders }
    );

    expect(result).toMatchInlineSnapshot(`
      {
        "body": {
          "code": "code",
          "html": "mdxHtml",
          "raw": "raw",
        },
        "id": "1",
        "tags": [
          "tag1",
          "tag2",
        ],
        "title": "title",
      }
    `);
  });

  it("should not return any searched term", async () => {
    await expect(() =>
      term({ term: null, terms: null }, { id: "356" }, { loaders })
    ).rejects.toThrowError("Term not found for: 356");
  });
});

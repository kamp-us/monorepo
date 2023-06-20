import { describe, expect, it, vi } from "vitest";

import { SozlukTermLoaderKey, createSozlukLoaders } from "./sozluk";
import { mockedClients } from "../clients/__mocks__/clients";

// mock runs before everything so import needs to be handled here.
vi.mock('@kampus/sozluk-content', async () => {
  const { mockedTerms } = await import('./__mocks__/sozluk');
  return {
    allTerms: mockedTerms
  }
})

describe("Sozluk Loader", () => {

  it("should create sozluk loader", () => {
    const loader = createSozlukLoaders(mockedClients);

    expect(loader.terms).toBeDefined();
  });

  it("should load terms", async () => {
    const loader = createSozlukLoaders(mockedClients);

    const result = await loader.terms.load(
      new SozlukTermLoaderKey("id", "1")
    );

    expect(result).toMatchObject({
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
    })
  });

  it("should return null if term not found", () => {
    const loader = createSozlukLoaders(mockedClients);

    expect(async () => {
      await loader.terms.load(
        new SozlukTermLoaderKey("id", "2")
      )
    }).rejects.toThrowError("Term not found: 2");
  });

});
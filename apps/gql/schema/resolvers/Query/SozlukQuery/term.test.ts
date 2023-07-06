import { describe, expect, it, vi } from "vitest";
import { term } from "./term";
import { createLoaders } from "~/loaders";
import { type DataLoaders } from "~/loaders/types";
import { mockedClients } from "../../../../clients/__mocks__/clients";

vi.mock('@kampus/sozluk-content', async () => {
  const { mockedTerms } = await import('~/loaders/__mocks__/sozluk');
  return {
    allTerms: mockedTerms
  }
})

describe("Term Query", () => {
  const loaders: DataLoaders = createLoaders(mockedClients);

  it("should find searched term", async () => {
    const result = await term(undefined, {
      input: {
        id: '1',
      }
    }, { loaders });


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

  it("should not return any searched term", () => {

    expect(async () => {
      await term(undefined, {
        input: {
          id: '356',
        }
      }, { loaders })
    }).rejects.toThrowError('Term not found for: 356');
  });

  it("should throw error when no input is passed", () => {
    expect(async () => {
      await term(undefined, {
        input: undefined
      }, { loaders })
    }).rejects.toThrowError('input is required');
  });

});

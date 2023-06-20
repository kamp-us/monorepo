import { beforeAll, describe, expect, it, vi } from "vitest";
import { type Clients } from "../clients/types";
import prisma from "../clients/__mocks__/prisma";
import { SozlukTermLoaderKey, createSozlukLoaders } from "./sozluk";
import { type Term } from "@kampus/sozluk-content";

vi.mock('@kampus/sozluk-content', () => {
  return {
    allTerms: [{
      _id: "1",
      id: "1",
      type: "Term",
      tags: ["tag1", "tag2"],
      title: "title",
      body: {
        raw: "raw",
        code: "code",
      },
      _raw: {
        contentType: "data",
        flattenedPath: 'term/1',
        sourceFileDir: 'term',
        sourceFileName: '1',
        sourceFilePath: 'term/1',
      },
      mdxHtml: "mdxHtml"

    } satisfies Term]
  }
})

describe("Sozluk Loader", () => {
  let _clients: Clients;

  beforeAll(() => {
    _clients = {
      prisma
    }
  });


  it("should create sozluk loader", () => {
    const loader = createSozlukLoaders(_clients);

    expect(loader.terms).toBeDefined();
  });

  it("should load terms", async () => {
    const loader = createSozlukLoaders(_clients);

    const result = await loader.terms.load(
      new SozlukTermLoaderKey("id", "1")
    );

    expect(result).toBeDefined();
  });

  it("should throw error if term not found", async () => {
    const loader = createSozlukLoaders(_clients);

    await expect(loader.terms.load(
      new SozlukTermLoaderKey("id", "2")
    )).rejects.toThrowError();

  });

});
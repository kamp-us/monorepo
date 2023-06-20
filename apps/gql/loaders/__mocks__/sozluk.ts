import { type Term } from "@kampus/sozluk-content";

export const mockedTerms = [{
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
}] satisfies Term[];

import { defineDocumentType, makeSource } from "contentlayer/source-files";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client/index.js";
import * as ReactDOMServer from "react-dom/server";

const mdxToHtml = async (mdxSource: string) => {
  const { code } = await bundleMDX({ source: mdxSource });
  const MDXLayout = getMDXComponent(code);
  // TODO add your own components here
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const element = MDXLayout({ components: {} })!;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const html = ReactDOMServer.renderToString(element);
  return html;
};

const Term = defineDocumentType(() => ({
  name: "Term",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the term",
      required: true,
    },

    tags: {
      type: "list",
      of: { type: "string" },
      description: "The tags of the term",
      required: true,
    },
  },
  computedFields: {
    id: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath,
    },
    mdxHtml: {
      type: "string",
      resolve: async (doc) => mdxToHtml(doc.body.raw),
    },
  },
}));

export default makeSource({
  contentDirPath: "terms",
  documentTypes: [Term],
});

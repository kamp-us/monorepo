import { defineDocumentType, makeSource } from "contentlayer/source-files";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client/index.js";
import * as ReactDOMServer from "react-dom/server";
import wikiLinkPlugin from "remark-wiki-link-plus";

import { buildPublicOdinLessonID, getPublicOdinPath, slugifyTurkishTitle } from "./utils";

const mdxToHtml = async (mdxSource: string) => {
  const { code } = await bundleMDX({
    source: mdxSource,
    mdxOptions: (options) => {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        [
          wikiLinkPlugin,
          {
            aliasDivider: "|",
          },
        ],
      ];

      return options;
    },
  });
  const MDXLayout = getMDXComponent(code);
  // TODO add your own components here
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const element = MDXLayout({ components: {} })!;
  const html = ReactDOMServer.renderToString(element);
  return html;
};

const Lesson = defineDocumentType(() => ({
  name: "Lesson",
  filePathPattern: "**/*.md",
  fields: {
    title: {
      type: "string",
      description: "The title of the Lesson",
      required: true,
    },
  },
  computedFields: {
    id: {
      type: "string",
      resolve: (doc) => buildPublicOdinLessonID(doc._raw.sourceFilePath, doc.title),
    },
    path: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFilePath,
    },
    html: {
      type: "string",
      resolve: async ({ body }) => mdxToHtml(body.raw),
    },
  },
}));

export default makeSource({
  contentDirPath: "../../content/odin",
  documentTypes: [Lesson],
});

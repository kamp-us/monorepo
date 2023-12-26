import { spawn } from "node:child_process";
import { defineDocumentType } from "contentlayer/source-files";
import { makeSource } from "contentlayer/source-remote-files";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client/index.js";
import * as ReactDOMServer from "react-dom/server";
import wikiLinkPlugin from "remark-wiki-link-plus";

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

const syncContentFromGit = async (contentDir: string) => {
  const syncRun = async () => {
    const gitUrl = "https://github.com/kamp-us/turkce-odin-project.git";
    await runBashCommand(`
      if [ -d  "${contentDir}" ];
        then
          cd "${contentDir}"; git pull;
        else
          git clone --depth 1 --single-branch ${gitUrl} ${contentDir};
      fi
    `);
  };

  let wasCancelled = false;
  let syncInterval: NodeJS.Timeout;

  const syncLoop = async () => {
    console.log("Syncing content files from git");

    await syncRun();

    if (wasCancelled) return;

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    syncInterval = setTimeout(syncLoop, 1000 * 60);
  };

  // Block until the first sync is done
  await syncLoop();

  return () => {
    wasCancelled = true;
    clearTimeout(syncInterval);
  };
};

const runBashCommand = (command: string) =>
  new Promise((resolve, reject) => {
    const child = spawn(command, [], { shell: true });

    child.stdout.setEncoding("utf8");
    child.stdout.on("data", (data: Uint8Array | string) => process.stdout.write(data));

    child.stderr.setEncoding("utf8");
    child.stderr.on("data", (data: Uint8Array | string) => process.stderr.write(data));

    child.on("close", function (code) {
      if (code === 0) {
        resolve(void 0);
      } else {
        reject(new Error(`Command failed with exit code ${code}`));
      }
    });
  });

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
      resolve: (doc) => doc._raw.flattenedPath,
    },
    html: {
      type: "string",
      resolve: async ({ body }) => mdxToHtml(body.raw),
    },
  },
}));

export default makeSource({
  syncFiles: syncContentFromGit,
  contentDirPath: "curriculum",
  contentDirInclude: ["."],
  documentTypes: [Lesson],
  disableImportAliasWarning: true,
});

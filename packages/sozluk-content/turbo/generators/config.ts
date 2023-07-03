import path from "path";
import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // create a generator
  plop.setGenerator("sozluk-term", {
    description: "Add a new Sozluk term",
    prompts: [
      {
        type: "input",
        name: "title",
        message: "Enter the title of Sozluk term:",
      },
      {
        type: "input",
        name: "tags",
        message: "Enter the tags (comma-separated) for the Sozluk term:",
      },
      {
        type: "input",
        name: "content",
        message: "Enter the content for the Sozluk term:",
      },
    ],
    actions: (data) => {
      if (data && data.tags) {
        data.tags = data.tags.split(",").map((tag) => tag.trim());
      }
      return [
        {
          type: "add",
          path: path.join("terms", "{{dashCase title}}.mdx"),
          templateFile: "templates/sozluk-term.hbs",
        },
      ];
    },
  });
}

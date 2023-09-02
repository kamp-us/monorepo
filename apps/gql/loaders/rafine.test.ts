import { describe, expect, it } from "vitest";

import { createRafineLoaders } from "./rafine";

describe("Rafine Loader", () => {
  describe("metadata loader", () => {
    it("should load metadata", async () => {
      const loader = createRafineLoaders();

      const result = await loader.metadata.parse.load("https://www.google.com");
      console.log(result);

      expect(result).toMatchObject({
        images: [
          {
            src: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_white_background_color_272x92dp.png",
          },
        ],
        meta: {
          description:
            "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for.",
          title: "Google",
        },
        og: {},
      });
    });
  });
});

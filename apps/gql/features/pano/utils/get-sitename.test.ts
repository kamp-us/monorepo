import { describe, expect, it } from "vitest";

import { getSitename } from "./get-sitename";

describe(getSitename, () => {
  it("returns undefined when href is null", () => {
    expect(getSitename(null)).toBeUndefined();
  });

  it("returns hostname of when href is a correct url", () => {
    expect(getSitename("https://kamp.us/foo/bar/baz")).toBe("kamp.us");
  });

  it.each(["twitch.tv", "twitter.com", "github.com"])(
    "uses overrides withUsername override for %j",
    (override) => {
      const href = `https://${override}/username/foo/bar`;
      expect(getSitename(href)).toBe(`${override}/username`);
    }
  );
});

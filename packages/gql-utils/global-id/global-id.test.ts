import { describe, expect, it } from "vitest";

import { parse, stringify } from "./global-id";

describe("global-id", () => {
  it("works", () => {
    const objectID = { type: "user", value: "1a2b3c4d5e" };
    const stringID = stringify(objectID);

    expect(stringify(parse(stringID).type, parse(stringID).value)).toEqual(stringID);
    expect(parse(stringify("user", "1a2b3c4d5e"))).toEqual(objectID);
  });
});

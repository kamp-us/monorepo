import { describe, expect, it } from 'vitest';
import { LoaderKey } from './loader-key';

describe("LoaderKey", () => {

  it("should stringify key", () => {
    const loader = new LoaderKey("test", 1);

    expect(loader.stringify()).toBe("test:1");
  });
});
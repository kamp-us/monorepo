import { describe, expect, it, vi } from "vitest";
import { term } from "./term";
import { SozlukTermLoaderKey } from "../../../../loaders/sozluk";
import { type DataLoaders } from "../../../../loaders/types";

const loaders: Partial<DataLoaders> = {
  sozluk: {
    terms: {
      load: vi.fn().mockReturnValue(),
    }
  }
};

describe("Term Query", () => {

  it("should find searched term", () => {
    const spy = vi.spyOn(loaders.sozluk?.terms, 'load');

    spy.mockReturnValueOnce(new SozlukTermLoaderKey('id', '1'));
    const result = term(undefined, {
      input: {
        id: '1',
      }
    }, { loaders });


    expect(spy).toHaveBeenCalledTimes(1);
    expect(result).toMatchInlineSnapshot(`
      SozlukTermLoaderKey {
        "identifier": "id",
        "value": "1",
      }
    `);
  });

  it("should fail searched term", () => {
    const spy = vi.spyOn(loaders.sozluk?.terms, 'load');

    const result = term(undefined, {
      input: {
        id: '1',
      }
    }, { loaders });


    expect(spy).toHaveBeenCalledTimes(1);
    expect(result).toMatchInlineSnapshot('undefined');
  });

  it("should not find searched term", () => {
    const spy = vi.spyOn(loaders.sozluk?.terms, 'load');

    const result = term(undefined, {
      input: {
        id: '1',
      }
    }, { loaders });


    expect(spy).toHaveBeenCalledTimes(1);
    expect(result).toMatchInlineSnapshot('undefined');
  });

  it("should throw error when no input is passed", () => {
    expect(() => {
      term(undefined, {
        input: undefined
      }, { loaders })
    }).toThrowError('input is required');
  });

});

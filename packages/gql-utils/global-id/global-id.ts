const fromBase64 = (text: string) => Buffer.from(text, "base64").toString("utf8");
const toBase64 = (text: string) => Buffer.from(text, "utf8").toString("base64");

interface ResolvedGlobalID<T extends string = string> {
  type: T;
  value: string;
}

/**
 * @param opaque - base64 string representation of a global id
 * @returns an object with type and value fields
 */
export function parse<T extends string>(opaque: string): ResolvedGlobalID<T> {
  const [type, value] = fromBase64(opaque).split(":") as [T, string];
  return { type, value };
}

/**
 * @param type - __typename value of gql type
 * @param value - real value of the gql type
 * @returns a base64 string of the encoded value
 */
export function stringify(type: string, value: string): string {
  return toBase64(type + ":" + value);
}

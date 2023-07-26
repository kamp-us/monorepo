export function assertNever(value: never, message?: string) {
  if (!message) {
    return value;
  }

  throw new Error(message);
}
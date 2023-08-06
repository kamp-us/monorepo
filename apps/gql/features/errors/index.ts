const makeErrorFactory =
  <T extends string>(__typename: T, defaultValue: string) =>
  (message = defaultValue) => ({ __typename, message });

export const NotAuthorized = makeErrorFactory("NotAuthorized", "Not authorized");
export const InvalidInput = makeErrorFactory("InvalidInput", "Invalid input");

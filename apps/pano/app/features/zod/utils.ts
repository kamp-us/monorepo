import { z } from "zod";

export type inferSafeParseErrors<T extends z.ZodType<any, any, any>, U = string> = {
  formErrors: U[];
  fieldErrors: {
    [P in keyof z.infer<T>]?: U[];
  };
};

export const validateURLWithZod = (url: string) => {
  const result = z.string().url().safeParse(url);
  return result.success;
};

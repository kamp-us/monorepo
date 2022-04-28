// @ts-ignore
import config from "~/aws-exports";

export const getAwsExports = (): typeof config => {
  if (typeof document === "undefined") {
    if (process.env.AWS_EXPORTS) {
      return JSON.parse(process.env.AWS_EXPORTS) as typeof config;
    }
  }

  return config;
};

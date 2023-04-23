import { getAssetURL } from "./get-asset-url";

export const favicons = {
  apple: getAssetURL("apple-touch-icon.png"),
  16: getAssetURL("favicon-16x16.png"),
  32: getAssetURL("favicon-32x32.png"),
  logo: getAssetURL("kampus_logo.png"),
};

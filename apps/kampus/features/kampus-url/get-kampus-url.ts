type KampusProduct = "sozluk" | "pano";

export const getKampusURL = (product: KampusProduct, path = "") => {
  return `/${product}/${path}`;
};

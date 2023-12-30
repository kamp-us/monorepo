const folders: Record<string, string> = {
  foundations: "temel-bilgiler",
  html_css: "html-css",
  installations: "kurulumlar",
  javascript_basics: "javascript-temelleri",
  tying_it_all_together: "her-seyi-birlestirme",
  "css-foundations": "css-temelleri",
  flexbox: "flexbox",
  "html-foundations": "html-temelleri",
  introduction: "baslangic",
  foundations_git: "git-temelleri",
  intermediate_git: "git-orta-seviye",
  intermediate_html_css: "html-css-orta-seviye",
  forms: "formlar",
  grid: "grid",
  intermediate_css_concepts: "css-orta-seviye-kavramlar",
  intermediate_html_concepts: "html-orta-seviye-kavramlar",
};
function slugifyTurkishTitle(text: string) {
  const turkishCharacters: { [key: string]: string } = {
    ı: "i",
    ğ: "g",
    ü: "u",
    ş: "s",
    ö: "o",
    ç: "c",
    İ: "I",
    Ğ: "G",
    Ü: "U",
    Ş: "S",
    Ö: "O",
    Ç: "C",
  };

  return text
    .replace(/[^a-zA-Z0-9ığüşöçİĞÜŞÖÇ\s]/g, "") // Remove non-alphanumeric characters except spaces
    .trim() // Trim leading and trailing spaces
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[ığüşöçİĞÜŞÖÇ]/g, (match) => turkishCharacters[match] || match); // Replace Turkish characters
}

function getPublicOdinPath(path: string) {
  const pathParts = path.split("/");
  pathParts.pop();

  let publicPath = "";
  if (pathParts) {
    pathParts.forEach((part) => {
      if (folders[part]) {
        publicPath += `${folders[part]}/`;
      } else {
        publicPath += `${part}/`;
      }
    });
  }

  return publicPath;
}

export function buildPublicOdinLessonID(path: string, title: string) {
  const publicPath = getPublicOdinPath(path);
  if (publicPath === "") {
    return slugifyTurkishTitle(title);
  }
  return `${getPublicOdinPath(path)}${slugifyTurkishTitle(title)}`;
}

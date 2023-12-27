export const getOdinGithubUrl = () => {
  const baseUrl = "https://github.com/kamp-us/turkce-odin-project/edit";
  const branchName = "main";

  return `${baseUrl}/${branchName}`;
};

export const getOdinGithubEditUrl = (path = "") => {
  path = path.replaceAll("-", "_");
  if (path.endsWith(".mdx")) {
    path = path.replace(".mdx", ".md");
  }

  return `${getOdinGithubUrl()}/${path}`;
};

interface Lesson {
  title: string;
  path: string;
}

export const getOdinGithubIssueUrl = (lesson: Lesson) => {
  const params = {
    template: "suggestion.yaml",
    title: `${lesson.title}: <Önerinizin kısa bir açıklaması>`,
    "lesson-link": lesson.path,
  };

  return `${getOdinGithubUrl()}/issues/new?${new URLSearchParams(params).toString()}`;
};

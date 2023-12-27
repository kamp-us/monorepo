const branchName = "dev";
const baseUrl = "https://github.com/kamp-us/monorepo/";

export const getOdinGithubUrl = ({ edit }: { edit: boolean }) => {
  let url = baseUrl;
  if (edit) {
    url = url + "edit";
  } else {
    url = url + "blob";
  }

  return `${url}/${branchName}/contents/odin`;
};

export const getOdinGithubEditUrl = (path = "") => {
  path = path.replaceAll("-", "_");
  if (path.endsWith(".mdx")) {
    path = path.replace(".mdx", ".md");
  }

  return `${getOdinGithubUrl({ edit: true })}/${path}`;
};

interface Lesson {
  title: string;
  path: string;
}

export const getOdinGithubIssueUrl = (lesson: Lesson) => {
  const params = {
    template: "odin_suggestion.yml",
    title: `${lesson.title}: <Önerinizin kısa bir açıklaması>`,
    "lesson-link": lesson.path,
  };

  return `${baseUrl}/issues/new?${new URLSearchParams(params).toString()}`;
};

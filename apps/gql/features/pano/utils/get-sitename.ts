interface Override {
  execute: (url: URL) => string;
}

const withUsername = {
  execute(url) {
    const [, username] = url.pathname.split("/");
    return `${url.hostname}/${username}`;
  },
} satisfies Override;

const overrides: Record<string, Override> = {
  "twitch.tv": withUsername,
  "twitter.com": withUsername,
  "github.com": withUsername,
};

export const getSitename = (href: string | null) => {
  if (!href) {
    return;
  }

  const url = new URL(href);
  return overrides[url.hostname]?.execute(url) ?? url.hostname;
};

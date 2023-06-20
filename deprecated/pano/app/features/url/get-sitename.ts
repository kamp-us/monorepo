const overrides: Record<
  string,
  {
    execute: (url: URL) => string;
  }
> = {
  "twitch.tv": {
    execute: (url) => {
      const [, username] = url.pathname.split("/");
      return url.hostname + "/" + username;
    },
  },
  "twitter.com": {
    execute: (url) => {
      const [, username] = url.pathname.split("/");
      return url.hostname + "/" + username;
    },
  },
  "github.com": {
    execute: (url) => {
      const [, username] = url.pathname.split("/");
      return url.hostname + "/" + username;
    },
  },
};

export const getSitename = (url: URL) => {
  const { hostname } = url;

  const override = overrides[hostname];

  return override ? override.execute(url) : hostname;
};

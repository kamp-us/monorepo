import { env } from "./env.server";
import { streamers } from "app/streamers";

type TwitchApiClient = {
  clientId: string;
  clientSecret: string;
  scopes: string;
  accessToken: string | null;
  authenticate: () => Promise<any>;
  returnStreamersWithLiveStatus: () => Promise<any>;
  getTwitchLiveStatus: (username: string) => Promise<any>;
};
interface TwitchAccessToken {
  access_token: string;
  expires_in: number;
  expires_at: number;
}

let twitchAccessToken: TwitchAccessToken | null = null;

export const twitchApiClient: TwitchApiClient = {
  clientId: env.TWITCH_CLIENT_ID || "",
  clientSecret: env.TWITCH_CLIENT_SECRET || "",
  scopes: "",
  accessToken: null,

  async authenticate(): Promise<TwitchAccessToken> {
    if (twitchAccessToken && twitchAccessToken.expires_at > Date.now()) {
      // If the token is still valid, return it from the cache
      return twitchAccessToken;
    }

    const response = await fetch(
      `https://id.twitch.tv/oauth2/token?client_id=${this.clientId}&client_secret=${this.clientSecret}&grant_type=client_credentials`,
      {
        method: "POST",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to obtain Twitch access token");
    }

    const { access_token, expires_in } = await response.json();
    const expires_at = Date.now() + expires_in * 1000;

    // Cache the token and its expiration time
    twitchAccessToken = { access_token, expires_in, expires_at };

    return twitchAccessToken;
  },

  async getTwitchLiveStatus(username: string) {
    const { access_token } = await this.authenticate();

    const response = await fetch(
      `https://api.twitch.tv/helix/streams?user_login=${username}`,
      {
        headers: {
          "Client-ID": this.clientId,
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch Twitch live status for ${username}`);
    }

    const { data } = await response.json();
    const viewerCount = data.length > 0 ? data[0].viewer_count : 0;
    const startedAt = data.length > 0 ? data[0].started_at : null;

    return { live: data.length > 0, viewerCount, startedAt };
  },

  async returnStreamersWithLiveStatus() {
    const streamersWithLiveStatus = await Promise.all(
      streamers.map(async (streamer) => {
        const { live, viewerCount, startedAt } = await this.getTwitchLiveStatus(
          streamer.username
        );

        return {
          ...streamer,
          live,
          viewerCount,
          startedAt,
        };
      })
    );

    return streamersWithLiveStatus;
  },
};

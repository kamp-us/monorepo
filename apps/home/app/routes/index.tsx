import {
  Box,
  CenteredContainer,
  ExternalLink,
  GappedBox,
  Text,
} from "@kampus/ui";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  DiscordLink,
  GithubLink,
  KampusGithubLink,
  TwitchLink,
  TwitterLink,
} from "app/features/link/Link";
import { Logo } from "app/features/logo/Logo";
import { twitchApiClient } from "app/features/twitch.server";

type Streamer = {
  username: string;
  live: boolean;
  startedAt: string;
  viewerCount: number;
};

export const loader = async () => {
  const streamers: Streamer[] =
    await twitchApiClient.returnStreamersWithLiveStatus();

  return json({ streamers });
};

export const Home = () => {
  const { streamers } = useLoaderData<typeof loader>();
  const [usirin, ...kampusStreamers] = streamers;

  return (
    <CenteredContainer css={{ paddingTop: 28 }}>
      <GappedBox css={{ flexDirection: "column", gap: 16 }}>
        <GappedBox
          css={{
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 16,
          }}
        >
          <Text css={{ color: "$gray12" }} lineHeight={3}>
            ortamlardaki pek $ukela yazılım topluluğu
          </Text>
          <Logo width={400} height={300} />
          <Text css={{ color: "$gray12" }} lineHeight={3}>
            bol pozitivite, motivasyon ve beraber gelismek mottolari...
          </Text>
          <Text css={{ color: "$gray12" }} lineHeight={3}>
            <ExternalLink href={"https://discord.kamp.us"}>
              discord.kamp.us
            </ExternalLink>{" "}
            diye bir discord sunucuları var, içerisi adeta şampiyonlar ligi
            gibi.
          </Text>
        </GappedBox>
        <GappedBox css={{ flexDirection: "column", mt: 12, gap: 12 }}>
          <GappedBox>
            <Box css={{ flex: 1 }}>
              <DiscordLink />
            </Box>
            <Box css={{ flex: 1 }}>
              <KampusGithubLink />
            </Box>
          </GappedBox>
        </GappedBox>
        <GappedBox css={{ flexDirection: "column", mt: 12, gap: 12 }}>
          <Text css={{ color: "$gray12", fontSize: "36px" }}>usirin</Text>
          <GappedBox>
            <Box css={{ flex: 1 }}>
              <TwitchLink streamer={usirin} />
            </Box>
            <Box css={{ flex: 1 }}>
              <GithubLink username="usirin" />
            </Box>
            <Box css={{ flex: 1 }}>
              <TwitterLink username="usirin" />
            </Box>
          </GappedBox>
        </GappedBox>
        <GappedBox css={{ flexDirection: "column", mt: 12, gap: 12 }}>
          <GappedBox
            css={{ alignItems: "center", textAlign: "center", gap: 16 }}
          >
            <Text css={{ color: "$gray12", fontSize: "36px" }}>
              Kamp.us yayıncıları
            </Text>
            <Text size={3} css={{ fontStyle: "italic" }}>
              yayında olan yayıncıları buradan takip edebilirsiniz
            </Text>
          </GappedBox>
          <GappedBox css={{ flexWrap: "wrap" }}>
            {kampusStreamers.map((streamer: Streamer, index: number) => (
              <TwitchLink streamer={streamer} key={index} />
            ))}
          </GappedBox>
        </GappedBox>
      </GappedBox>
    </CenteredContainer>
  );
};

export default Home;

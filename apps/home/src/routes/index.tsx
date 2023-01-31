import { Box, CenteredContainer, ExternalLink, GappedBox, Label, Text } from "@kampus/ui";
import type { LoaderFunction } from "@remix-run/node";
import { DiscordLink, GithubLink, TwitchLink, TwitterLink } from "~/features/link/Link";
import { Logo } from "~/features/logo/Logo";


export const loader: LoaderFunction = async () => {
  return null
};

export const Home = () => {
  return (
    <CenteredContainer css={{ paddingTop: 20 }}>
      <GappedBox css={{ flexDirection: "column" }}>
        <GappedBox css={{ flexDirection: "column", alignItems: "center" }}>
          <Logo width={400} height={300} />
          <Text css={{ color: "$gray12" }}>
            ortamlardaki pek $ukela yazilim toplulugu. bol pozitivite, motivasyon ve beraber gelisme mottolari.
            discord.kamp.us diye bir discord sunuculari var, icerisi adeta sampiyonlar ligi.
          </Text>
        </GappedBox>
        <GappedBox css={{ flexDirection: "column", mt: 12, gap: 12 }}>
          <GappedBox>
            <Box css={{ flex: 1 }}>
              <DiscordLink />
            </Box>
            <Box css={{ flex: 1 }}>
              <GithubLink username="kampus" />
            </Box>
          </GappedBox>
        </GappedBox>
        <GappedBox css={{ flexDirection: "column", mt: 12, gap: 12 }}>
          <Text css={{ color: "$gray12", fontSize: "36px" }}>usirin</Text>
          <GappedBox>
            <Box css={{ flex: 1 }}>
              <TwitchLink username="usirin" />
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
          <Text css={{ color: "$gray12", fontSize: "36px" }}>Kamp.us yayıncıları</Text>
          <GappedBox css={{ flexWrap: "wrap" }}>
            <TwitchLink username="cansirin" />
          </GappedBox>
        </GappedBox>
      </GappedBox>
    </CenteredContainer >
  );
};

export default Home;

          // <GappedBox css={{ justifyContent: "center", flexDirection: "column", width: "100%" }}>
          //   <DiscordLink />
          //   <TwitchLink username="cansdlkjasklfjaslkfjaslkfjsaflk" />
          //   <TwitterLink username="can" />
          //   <GappedBox css={{ flex: 1 }}>
          //     <GithubLink username="can" />
          //     <GithubLink username="usirin" />
          //   </GappedBox>
          // </GappedBox>
import { ExternalLink, GappedBox, Text } from "@kampus/ui";
import { DiscordLogoIcon, GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";


export const TwitchLink = ({ username }: { username: string }) => {
  return (
    <ExternalLink href={`https://twitch.tv/${username}`} css={{ color: "#efefef" }}>
      <GappedBox css={{ backgroundColor: "#643FA6", padding: 20, justifyContent: "space-between" }}>
        {username} on Twitch
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Twitch_Glitch_Logo_Black.svg/878px-Twitch_Glitch_Logo_Black.svg.png" alt="twitch logo" style={{ height: 20, width: 20 }} />
      </GappedBox>
    </ExternalLink >
  )
}

export const TwitterLink = ({ username }: { username: string }) => {
  return (
    <ExternalLink href={`https://twitter.com/${username}`} css={{ color: "#efefef" }} >
      <GappedBox css={{ backgroundColor: "#1C95E7", padding: 20, justifyContent: "space-between" }}>
        {username} on Twitter
        <TwitterLogoIcon />
      </GappedBox>
    </ExternalLink>
  )
}

export const DiscordLink = () => {
  return (
    <ExternalLink href="https://discord.kamp.us" >
      <GappedBox css={{ padding: 20, justifyContent: "space-between", border: "1px solid $gray7" }}>
        Join Kamp.us Discord
        <DiscordLogoIcon />
      </GappedBox>
    </ExternalLink >
  )
}

export const GithubLink = ({ username }: { username: string }) => {
  return (
    <ExternalLink href={`https://github.com/${username}`} >
      <GappedBox css={{ backgroundColor: "$gray3", padding: 20, justifyContent: "space-between" }}>
        {username} on GitHub
        <GitHubLogoIcon />
      </GappedBox>
    </ExternalLink>
  )
}
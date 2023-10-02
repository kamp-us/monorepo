import { REST, Routes } from "discord.js";

import { commands } from "./commands";
import { env } from "./env";

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(env.DISCORD_TOKEN);

// and deploy your commands!
void (async () => {
  try {
    console.log(`Started refreshing ${Object.keys(commands).length} application (/) commands.`);

    // The put method is used to fully refresh all commands in the guild with the current set
    const data = (await rest.put(
      Routes.applicationGuildCommands(env.DISCORD_CLIENT_ID, env.DISCORD_GUILD_ID),
      {
        body: Object.values(commands).map((command) => command.data.toJSON()),
      }
    )) as unknown[];

    console.log(`Successfully reloaded ${data.length} application (/) commands.`);
  } catch (error) {
    // And of course, make sure you catch and log any errors!
    console.error(error);
  }
})();

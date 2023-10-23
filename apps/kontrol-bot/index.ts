import { readdirSync } from "fs";
import { join } from "path";
import { Client, Events, GatewayIntentBits } from "discord.js";

import { commands } from "./commands";
import { env } from "./env";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once(Events.ClientReady, (event) => {
  console.log("ready", event);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) {
    return;
  }

  // bizde var mi bu komut
  const command = commands[interaction.commandName];

  // yoksa ekrana hata bas ve fonksiyonun calismasini durdur
  if (!command) {
    console.error(`No command matching ${interaction.commandName} was found.`);
    return;
  }

  try {
    // command'i calistirmayi dene
    await command.execute(interaction);
  } catch (error) {
    console.error(error);

    // eger interaction normalden farkli olacak sekilde "replied" veya "deferred"
    // olarak geliyorsa "followUp" mesaji gonder
    // (follow up: bir onceki konuyla alakali cevap vermek/iletisim kurmak)
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    } else {
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  }
});

const handlersPath = join(__dirname, "handlers");
const handlerFiles = readdirSync(handlersPath).filter((file) => file.endsWith("Handler.ts"));
handlerFiles.forEach((handlerFile: string) => {
  const filePath = join(handlersPath, handlerFile);
  import(filePath).then((handler) => handler.default(client));
});

const start = async () => {
  console.log({ DISCORD_TOKEN: env.DISCORD_TOKEN });
  await client.login(env.DISCORD_TOKEN);
};

start()
  .then(() => {
    console.log("started");
  })
  .catch((error) => {
    console.error(error);
  });

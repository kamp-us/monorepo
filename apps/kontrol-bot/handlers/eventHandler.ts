import { readdirSync } from "fs";
import { join } from "path";
import { Client } from "discord.js";

export default async (client: Client) => {
  console.log("Initializing event handler.");

  const eventsPath = join(__dirname, "../events");
  const eventFiles = readdirSync(eventsPath).filter((file) => file.endsWith(".ts"));

  for (const file of eventFiles) {
    const filePath = join(eventsPath, file);
    const event = await import(filePath);

    if (event.default) {
      if (event.default.once) {
        client.once(event.default.name, (...args: any[]) => event.default.execute(...args));
      } else {
        client.on(event.default.name, (...args: any[]) => event.default.execute(...args, client));
      }
      console.log("[SUCCESS]", file, "event file loaded.");
    } else {
      console.log("[ERROR]", file, "event file is not loaded.");
      continue;
    }
  }

  console.log("Events are ready.");
};

import { Events, Message } from "discord.js";

export default {
  name: Events.MessageCreate,
  async execute(message: Message) {
    if (message.author.bot) return;

    // If the message is sent to "Günaydın" text channel
    if (message.channel.id === "1158288028511522877") {
      // Check if the message includes "günaydın" or similar
      // or a GIF or the 🌞 emoji.
      const morningPattern = /(g+(u|ü)+n+a+y+d+(ı|i)+n+)|(gif)|(🌞)/i;

      if (morningPattern.test(message.content)) {
        message.react("☀️");
      } else {
        message.author.send(
          "`#gunaydin` kanalına yalnızca `günaydın` temalı mesaj ve gif gönderebilirsiniz!"
        );
        message.delete();
      }
    }
  },
};

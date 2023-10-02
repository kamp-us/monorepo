import { SlashCommandBuilder, type CommandInteraction } from "discord.js";

type Command = {
  /**
   * The data for the command
   */
  data: SlashCommandBuilder;
  /**
   * The function to execute when the command is called
   *
   * @param interaction - The interaction of the command
   */
  execute(interaction: CommandInteraction): Promise<void> | void;
};

export const commands: Record<string, Command> = {
  ping: {
    data: new SlashCommandBuilder().setName("ping").setDescription("pong diye cevap verir"),
    async execute(interaction: { reply: (msg: string) => Promise<unknown> }) {
      await interaction.reply("Pong!");
    },
  },
};

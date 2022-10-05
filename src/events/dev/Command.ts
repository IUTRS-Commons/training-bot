import { Embed } from '../../structures/builders/Embed'
import { Event } from '../../structures/interactions/Event'
import {CommandInteraction} from "discord.js";
import {Client} from "../../structures/Client";

module.exports = new Event({
    name: 'interactionCreate',
    async callback (client, interaction) {
        if (!interaction.isCommand()) return

        const command = client.commands.get(interaction.commandName)
        if (!command) return interaction.reply({
            content: null,
            embeds: [
                new Embed(client, {
                    color: '#EE3E63',
                    description: `:x: This command doesn't exist!`
                }).build()
            ],
            ephemeral: true
        })
        await command.execute(client, interaction)
    }
})

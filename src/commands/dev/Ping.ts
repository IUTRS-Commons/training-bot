import { Command } from '../../structures/interactions/Command'
import {CommandInteraction} from "discord.js";
import {Client} from "../../structures/Client";
import {Embed} from "../../structures/builders/Embed";

module.exports = new Command({
        name: "ping",
        description: "Verify bot status.",
        async callback (client, interaction) {
            await interaction.reply({
                content: null,
                embeds: [
                    new Embed(client, {
                        title: ":ping_pong: PONG!",
                        color: "#F00"
                    }).build()
                ],
                ephemeral: true
            })
        }
    })

import {CommandInteraction, CommandInteractionOption} from "discord.js"
import { Client } from "../Client"

export class Command {
    private name: string
    private description: string
    private category?: string
    private options?: CommandInteractionOption | never[]
    private execute: (client: Client, interaction: CommandInteraction) => void

    /**
     * @param {{ name: string, description: string, category: string, options: CommandInteractionOption, callback: (Client, CommandInteraction) => {} }}  data
     */
    constructor (data: {
        name: string,
        description: string,
        category?: string,
        options?: CommandInteractionOption,
        callback: (client: Client, interaction: CommandInteraction) => void
    }) {
        this.name = data.name
        this.description = data.description || 'A simple command.'
        this.category = data.category || 'Undefined'
        this.options = data.options || []
        this.execute = data.callback
    }
}

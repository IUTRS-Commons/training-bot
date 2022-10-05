import { Client } from '../structures/Client'
import { loadFiles } from './FileHandler'
const Ascii = require('ascii-table')

/**
 * @param { Client } client
 * @returns {Promise<void>}
 */
export const handle = async (client: Client) => {
    const table = new Ascii('Commands')
    const commands = loadFiles('./dist/src/commands/', true)

    commands.forEach(file => {
        const command = require(`../commands/${file}`)

        if (!command.name) table.addRow(command.name, command.description, command.category, '🔸 FAILED', `Missing command's name!`)
        else if (!command.description) table.addRow(command.name, command.description, command.category, '🔸 FAILED', `Missing command's description!`)
        else if (!command.category) table.addRow(command.name, command.description, command.category, '🔸 FAILED', `Missing command's category!`)
        else {
            client.commands.set(command.name, command)
            table.addRow(command.name, command.description, command.category, '🔹 SUCCESS')
        }
    })

    if (commands.length !== 0) console.log(table.toString())
}

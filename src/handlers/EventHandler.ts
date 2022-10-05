import { Client } from '../structures/Client'
import { loadFiles } from './FileHandler'
const Ascii = require('ascii-table')

/**
 * @param { Client } client
 * @returns {Promise<void>}
 */
export const handle = async (client: Client) => {
    const table = new Ascii('Events')
    const events = loadFiles('./dist/src/events/', true)

    events.forEach(file => {
        const event = require(`../events/${file}`)

        if (!event.name) table.addRow('( ╯□╰ )', '🔸 FAILED', `Missing event's name!`)
        else {
            if (event.once) client.once(event.name, event.execute.bind(null, client))
            else client.on(event.name, event.execute.bind(null, client))
        }

        table.addRow(event.name, '🔹 SUCCESS')
    })

    if (events.length !== 0) console.log(table.toString())
}

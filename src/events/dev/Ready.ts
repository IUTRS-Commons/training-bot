import { Event } from '../../structures/interactions/Event'
import { Client } from '../../structures/Client'

module.exports = new Event({
    name: 'ready',
    async callback (client) {
        await client.user.setPresence({
            activities: [
                {
                    name: 'in dev',
                    type: 'PLAYING'
                }
            ],
            status: 'online'
        })

        const devGuild = await client.guilds.cache.get(process.env.DEV_GUILD)
        await devGuild.commands.set(client.commands.map((cmd: any) => cmd))
    }
})

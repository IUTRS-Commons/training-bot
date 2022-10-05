const discord = require('discord.js')
const intents = new discord.Intents(32767)

export class Client extends discord.Client {
    constructor (color?: string) {
        super({ intents })

        this.color = color || '#333333'
        this.commands = new discord.Collection()
    }

    start () {
        require('../handlers/CommandHandler').handle(this)
        require('../handlers/EventHandler').handle(this)

        this.login(process.env.TOKEN).then((result: any) => console.log(`Logged in as ${this.user.tag}.`))
    }
}

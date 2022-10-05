import { MessageEmbed, EmbedFieldData, ColorResolvable, EmbedAuthorData, EmbedFooterData } from 'discord.js'
import { Client } from '../Client'

export class Embed {
    title?: string
    description?: string
    color?: ColorResolvable
    author?: EmbedAuthorData
    footer?: EmbedFooterData
    fields?: EmbedFieldData[]
    image?: string
    thumbnail?: string
    timestamp?: boolean

    /**
     * @param { Client } client
     * @param {{ title: string, description: string, color: string, fields: EmbedFieldData, footer: EmbedFooterData, image: string, thumbnail: string, author: EmbedAuthorData, timestamp: boolean }} data
     */
    constructor (client: Client, data: {
        title?: string,
        description?: string,
        color?: ColorResolvable,
        author?: EmbedAuthorData,
        footer?: EmbedFooterData,
        fields?: EmbedFieldData[],
        image?: string,
        thumbnail?: string,
        timestamp?: boolean
    }) {
        this.title = data.title
        this.description = data.description
        this.color = data.color || client.color
        this.author = data.author
        this.fields = data.fields || []
        this.footer = data.footer || { text: `Developed by Loïc MAES` }
        this.image = data.image
        this.thumbnail = data.thumbnail
        this.timestamp = data.timestamp || false
    }

    /**
     * @returns { MessageEmbed }
     */
    build () {
        const embed = new MessageEmbed()

        if (this.title) embed.setTitle(this.title)
        if (this.description) embed.setDescription(this.description)
        if (this.color) embed.setColor(this.color)
        // @ts-ignore
        if (this.fields && this.fields.length !== 0) this.fields.forEach(field => embed.addField(field.name, field.value, field.inline || false))
        if (this.footer) embed.setFooter(this.footer)
        if (this.image) embed.setImage(this.image)
        if (this.thumbnail) embed.setThumbnail(this.thumbnail)
        if (this.timestamp) embed.setTimestamp()

        return embed
    }
}

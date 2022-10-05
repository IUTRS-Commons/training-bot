import { Client } from '../Client'

export class Event {
    private name: string
    private execute: (client: Client, ...eventArgs: any) => void

    /**
     * @param {{ name: string, callback: (Client, []) => {} }} data
     */
    constructor (data: {
        name: string,
        callback: (client: Client, ...eventArgs: any) => void
    }) {
        this.name = data.name
        this.execute = data.callback
    }
}

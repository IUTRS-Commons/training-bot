require('dotenv').config()
import { Client } from './src/structures/Client'

const bot = new Client();
bot.start()

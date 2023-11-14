import { Telegraf } from 'telegraf'

const bot = new Telegraf('6452954811:AAH6T1AneuHuK_f3_LyTrHxXEc2ywmmKyXo')
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

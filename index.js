const { 
    Telegraf, 
    Markup
} = require('telegraf');
require('dotenv').config()
const text = require('./const')

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply(`Привет ${ctx.message.from.first_name ? ctx.message.from.first_name : 'незнакомец'}!`));
bot.help((ctx) => ctx.reply(text.command));
bot.command('process', (ctx) => {
    ctx.replyWithHTML(`<b>Документы</b>`, Markup.inlineKeyboard(
        [
            [Markup.button.callback(`Обжалование бездействие ЧСИ`, `btn_1`)]
        ]
        ))
})


bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
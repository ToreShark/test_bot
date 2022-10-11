const { 
    Telegraf, 
    Markup
} = require('telegraf');
require('dotenv').config()
const text = require('./const')

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply(`Привет ${ctx.message.from.first_name ? ctx.message.from.first_name : 'незнакомец'}!`));
bot.help((ctx) => ctx.reply(text.command));
bot.command('process', async (ctx) => {
    try {
        await ctx.replyWithHTML(`<b>Документы</b>`, Markup.inlineKeyboard(
            [
                [Markup.button.callback(`Обжалование бездействие ЧСИ`, `btn_1`)],
                [Markup.button.callback(`Привлечение к уголовной ответственности за неуплату алиментов`, `btn_2`)],
                [Markup.button.callback(`Увеличение размеров алиментов`, `btn_3`)],
                [Markup.button.callback(`Иск о взыскании алиментов`, `btn_4`)],
                [Markup.button.callback(`Вся информация по алиментам`, `btn_5`)],
            ]
            ))
    } catch (e) {
        console.error(e)
    }
    
})

bot.action('btn_1', async (ctx) => {
    try {
        await ctx.replyWithHTML('Обработка кнопки 1', {
            disable_web_page_preview: true
        })
    } catch (e) {
        console.error(e)
    }
})


bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
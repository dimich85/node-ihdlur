const TelegramBot = require('node-telegram-bot-api');
const token = '1770252073:AAEmaWD5rdBd9lNecwXps2_XsJHJZ_opT8M';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message ttteasdcslgggggggs');
});

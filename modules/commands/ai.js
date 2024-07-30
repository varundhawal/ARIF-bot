const axios = require('axios');
 
module.exports.config = {
  name: 'ai',
  version: '1.0.0',
  hasPermission: 0,
  credits: 'Clark',
  description: 'An Ai Chatgpt',
  commandCategory: 'ai',
  usePrefix: false,
  usages: '[query]',
  cooldowns: 5,
};
 
module.exports.run = async function ({ api, args, event }) {
  try {
    const text = args.join(' ');
 
    if (!text) {
      api.sendMessage('❗| 𝗣𝗹𝗲𝗮𝘀𝗲 𝗽𝗿𝗼𝘃𝗶𝗱𝗲 𝘀𝗼𝗺𝗲 𝗾𝘂𝗲𝘀𝘁𝗶𝗼𝗻𝘀', event.threadID, event.messageID);
      return;
    }
 
    const apiUrl = 'https://chatgpt.august-api.repl.co/response';
    const response = await axios.post(apiUrl, { prompt: text });
 
    if (response.data && response.data.answer) {
      const answer = response.data.answer.trim();
      api.sendMessage(`セラノ 👾:\n\n${answer}`, event.threadID, event.messageID);
    } else {
      api.sendMessage('❎ |𝗔𝗻 𝗲𝗿𝗿𝗼𝗿 𝗼𝗰𝗰𝘂𝗿𝗿𝗲𝗱 𝘁𝗼 𝘁𝗵𝗲 𝗰𝗼𝗺𝗺𝗮𝗻𝗱. 𝗣𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗮𝗴𝗮𝗶𝗻 𝗹𝗮𝘁𝗲𝗿.', event.threadID, event.messageID);
    }
  } catch (error) {
    console.error('Error in command:', error);
    api.sendMessage('❎ |𝗔𝗻 𝗲𝗿𝗿𝗼𝗿 𝗼𝗰𝗰𝘂𝗿𝗿𝗲𝗱 𝘁𝗼 𝘁𝗵𝗲 𝗰𝗼𝗺𝗺𝗮𝗻𝗱. 𝗣𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗮𝗴𝗮𝗶𝗻 𝗹𝗮𝘁𝗲𝗿.', event.threadID, event.messageID);
  }
};
module.exports.config = {
  name: "offbot",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "HTHB",
  description: "turn the bot off",
  usePrefix: true,
  commandCategory: "system",
  cooldowns: 0
        };
module.exports.run = ({event, api}) =>{
    const permission = ["61553634015672", "61553634015672"];
    if (!permission.includes(event.senderID)) return api.sendMessage("[ ERR ] You don't have permission to use this command, This Command Only For arif babu", event.threadID, event.messageID);
  api.sendMessage(`[ OK ] ${global.config.BOTNAME} OFF HO GYA ARIF BOT 🙂✌️
━━━━━━━━━━━━━━━━━
OWNER 𒁍 MR ARIF BABU ♥️`,event.threadID, () =>process.exit(0))
}
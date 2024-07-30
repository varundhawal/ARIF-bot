module.exports.config = {
 name: "JOIN-NOTY",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "PREM BABU",
 description: "THIS BOT IS MADE BY PREM BABU"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "कोई ऐसे पिछवाड़े पे लात मारता है किया 😏👈";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`┏━━━━━┓\n     आरिफ-बाबू                    ✧═══•❁😛❁•═══✧\n┗━━━━━┛\n\n\nसॉरी 😕 आरिफ बाबू जी एक ठरकी इंसान को वापिस ऐड\nनही कर पाया________________________________😒\n\nउसका नाम है।   𒁍 ${name}\n\nलगता है उसने मुझे ब्लॉक कर के फिर लेफ्ट हुआ है। 🤐\n♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️\n\nOWNER   𒁍  MR ARIF BABU ♥️♥️`, event.threadID)
   } else api.sendMessage(`┏━━━━━┓\n     आरिफ-बाबू                    ✧═══•❁😛❁•═══✧\n┗━━━━━┛\n\n\nदेखो दोस्तो एक ठरकी इस ग्रुप से भाग रहा है। 🤐👈\n\nउसका नाम है।   𒁍  ${name}\n\n आरिफ बाबू की मर्जी के बिना ग्रुप से भाग के कही नही जा 
सकते  ठरकी इंसान देखो फिर से ऐड कर दिया आपको\n♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️\n\nOWNER    𒁍  MR ARIF BABU ♥️♥️`, event.threadID);
  })
 }
}

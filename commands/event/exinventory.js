const discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "exinventory",
  usage: "we!exinventory",
  ownerOnly: false,
  cooldown: 5000,
  aliases: ["inv"],
  description: "See your inventory.",
  run: async (client, message, args) => {
    let user = message.author;
    
let sa3 = db.get(`sa3_${user.id}`)

if(sa3 === null) {
  const noSa3Embed = new discord.MessageEmbed()
  
}
  }
};

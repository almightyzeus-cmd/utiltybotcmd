const discord = require("discord.js");
const db = require("quick.db");
module.exports = {
  name: "buy",
  usage: "we!buy <itemID>",
  ownerOnly: false,
  cooldown: 5000,
  botPermission: [],
  authorPermission: [],
  aliases: [],
  description: "Use this command to buy an item from the shop",
  run: async (client, message, args) => {
  
  }
}

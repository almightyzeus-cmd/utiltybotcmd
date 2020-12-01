const discord = require("discord.js");
const db = require("quick.db");
module.exports = {
  name: "shop",
  usage: "we!shop",
  ownerOnly: false,
  cooldown: 5000,
  botPermission: [],
  authorPermission: [],
  aliases: ["store"],
  description: "View the shop.",
  run: async (client, message, args) => {
  const shopEmbed = new discord.MessageEmbed()
  .setTitle('Shop:')
  .setDescription('Special advertiser role for 30 days.\n**ID** = ``SA3``\n :money_with_wings:**Price** = 50 points\n\nPremium zone access.\n**ID** = ``PZA``\n :money_with_wings:**Price** = 100 points\n\nClassic wumpus role.\n**ID** = ``CWR``\n :money_with_wings:**Price** = 200 points')
  .setFooter('Make sure you have points or you cannot buy these!')
  message.channel.send(shopEmbed)
  }
};

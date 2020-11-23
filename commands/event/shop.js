const discord = require("discord.js");

module.exports = {
name: "shop",
usage: "we!shop",
ownerOnly: false, 
cooldown: 5000,
botPermission: [],
authorPermission: [],
aliases: [],
description: "View the shop.",
run: async (client, message, args) => {
  const shop = new discord.MessageEmbed()
  .setTitle('Shop:')
  .setDescription('ID=SA3. 30 Points: Special advertiser role for 30 days!\n ID=PZA 100 Points: Premium Zone Access\n ID=OAC 200 Points: Get own ad channel in ad channels category + spotlight post with @others ping!')
  .setFooter('You can buy those with Event Points.')
  message.channel.send(shop)
  
}
};
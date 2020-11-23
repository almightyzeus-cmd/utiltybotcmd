const discord = require("discord.js");

module.exports = {
name: "ping",
usage: "Nothing rlly",
ownerOnly: false, 
cooldown: 5000,
botPermission: [],
authorPermission: [],
aliases: [],
description: "Nothing",
run: async (client, message, args) => {
  const shop = new discord.MessageEmbed()
  .setTitle('Shop:')
  .setDescription('ID=SA3. 30 Points: Special advertiser role for 30 days!\n ID=PZA 100 Points: Premium zone access: Get own ad channel in ad channels category + spotlight post with @others ping!')
}
}
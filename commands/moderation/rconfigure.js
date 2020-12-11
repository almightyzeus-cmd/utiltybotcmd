const discord = require('discord.js');
const db = require('quick.db');
module.exports = {
name: "ping",
usage: "Nothing rlly",
ownerOnly: false, 
reportOnly: true,
cooldown: 5000,
botPermission: [],
authorPermission: [],
aliases: [],
description: "Nothing",
run: async (client, message, args) => {
  if(!args[1]) {
     message.channel.send("Please enter a channel ID to set to!")
  }
  db.set(`reportid_${client.guild.id}`)
  const rembed = new discord.MessageEmbed()
  .setTitle("Report Channel Set!")
  .setDescription("The report channel was successfully set to <#778175703358373949>!")
  .setTimestamp()
  message.channel.send(rembed)
}
}
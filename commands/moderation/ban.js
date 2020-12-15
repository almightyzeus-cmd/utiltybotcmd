const discord = require('discord.js')
module.exports = {
name: "ban",
usage: "wa!ban <user> <reason>",
ownerOnly: false, 
category: "moderation",
banOnly: true,
cooldown: 1000,
botPermission: [],
authorPermission: [],
aliases: [],
description: "Ban users!",
run: async (client, message, args) => {
  
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Invalid Permissions")
let User = message.guild.member(message.mentions.users.first()).id || message.guild.members.cache.get(args[0])
if (!User) return message.channel.send("Invalid User")
let banReason = args.join(" ").slice(22);
if (!banReason) {
  banReason = "None"
}

User.ban({reason: banReason})
  const banembed = new discord.MessageEmbed()
  .setTitle("Banned!")
  .setDescription(`<@${User}> was banned for: ${banReason}`)
  .setTimestamp()
  message.channel.send(banembed)
  
}
}
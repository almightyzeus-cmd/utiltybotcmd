const discord = require('discord.js')
module.exports = {
name: "unban",
usage: "wa!unban <user> <reason>",
ownerOnly: false, 
category: "moderation",
banOnly: true,
cooldown: 1000,
botPermission: [],
authorPermission: [],
aliases: [],
description: "Unban users!",
run: async (client, message, args) => {
  
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Invalid Permissions")
let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
if (!User) return message.channel.send("Invalid User")
let unbanReason = args.join(" ").slice(22);
if (!unbanReason) {
unbanReason = "None"
}

User.unban({reason: unbanReason})
  const banembed = new discord.MessageEmbed()
  .setTitle("Banned!")
  .setDescription(`${User.tag} was unbanned for: ${unbanReason}`)
  .setTimestamp()
  message.channel.send(banembed)
  
}
}
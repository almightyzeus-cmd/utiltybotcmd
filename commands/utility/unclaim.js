const discord = require('discord.js');
module.exports = {
name: "unclaim",
category: "modmail",
usage: "wa!unclaim <reason>",
ownerOnly: false, 
licenseOnly: true,
cooldown: 5000,
botPermission: [],
authorPermission: [],
aliases: [],
description: "Unclaim a ticket!",
run: async (client, message, args) => {
    const claimembed = new discord.MessageEmbed()
  .setTitle('Unclaimed')
  .setDescription(`<@${message.author.id}> successfully unclaimed this thread for: ${args}!`)
  .setFooter('Made with ♡ by Argent Excellence')
  message.channel.send(claimembed)
}
}
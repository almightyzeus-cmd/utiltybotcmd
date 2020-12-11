const discord = require('discord.js');
const config = require("../config.json");
module.exports = {
name: "claim",
usage: "wa!unclaim <reason>",
ownerOnly: false, 
licenseOnly: true,
cooldown: 5000,
botPermission: [],
authorPermission: [],
aliases: [],
description: "Claim a ticket!",
run: async (client, message, args) => {
    const reason = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);
    const claimembed = new discord.MessageEmbed()
  .setTitle('Unclaimed')
  .setDescription(`<@${message.author.id}> successfully unclaimed this thread for: !`)
  .setFooter('Made with ♡ by Argent Excellence')
  message.channel.send(claimembed)
}
}
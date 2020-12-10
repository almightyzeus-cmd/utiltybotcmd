const discord = require('discord.js')
module.exports = {
name: "claim",
usage: "wa!claim",
ownerOnly: false, 
licenseOnly: true,
cooldown: 5000,
botPermission: [],
authorPermission: [],
aliases: [],
description: "Claim a ticket!",
run: async (client, message, args) => {
  const claimembed = new discord.MessageEmbed()
  .setTitle('Claimed')
}
}
const discord = require('discord.js')
module.exports = {
name: "qotd",
usage: "wa!qotd <question>",
ownerOnly: false, 
licenseOnly: true,
cooldown: 5000,
botPermission: [],
authorPermission: [],
aliases: [],
description: "Make a QOTD!",
run: async (client, message, args) => {
 const qotdembed = new discord.MessageEmbed()
 .setTitle('')
}
}
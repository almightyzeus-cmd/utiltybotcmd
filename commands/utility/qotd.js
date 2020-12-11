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
 .setAuthor(`message.author.avatarURL()`, `message.author.tag`,)
 .setTitle('Question Of The Day')
 .setDescription(`${args}`)
 .setFooter('Answer in <#762397711994454017>.')
 message.channel.send(qotdembed)
}
}
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
 .setAuthor(`${message.author.tag}`)
 .setTitle('Question Of The Day')
 .setDescription(`${args}`)
 .setFooter('Answer in <#762397711994454017>.')
 
 if(!args[0]) {
   const oneword = args[0]
 }

  if(!args[1]) {
    const twoword = args[2]
  }
  
 const exampleEmbed = new discord.MessageEmbed()
	.setColor('#000000')
	.setTitle('Question Of The Day')
	.setAuthor(`message.author.tag`, `message.author.avatarURL()`)
	.setDescription(``)
	.setFooter('Answer in <#762397711994454017>');

message.channel.send(exampleEmbed);
  
  
  
  
}
}
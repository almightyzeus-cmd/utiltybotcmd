const discord = require('discord.js')
module.exports = {
name: "report",
usage: "wa!report <user>",
ownerOnly: false, 
cooldown: 5000,
botPermission: [],
authorPermission: [],
aliases: [],
description: "Nothing",
run: async (client, message, args) => {
  const suspect = message.mentions.members.first()
  const reportembed = new discord.MessageEmbed()
  .setAuthor('Report')
  .setTitle('From Welcome Advertisements | Free Unlimited Advertising')
  .addField('Reported By', `${message.author.id}`, true)
  .addField('Suspect', `${suspect.username}`, true)
  .setTimestamp()
  const channel = client.channels.cache.get('778175703358373949');
    channel.send(reportembed);
}
}
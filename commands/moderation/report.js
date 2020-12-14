const discord = require('discord.js')
module.exports = {
name: "report",
usage: "wa!report <user>",
category: "reports",
ownerOnly: false, 
cooldown: 5000,
botPermission: [],
authorPermission: [],
aliases: [],
description: "Nothing",
run: async (client, message, args) => {
   
    let reason = args.join(" ").slice(22);
    if (reason.length < 1) return message.reply('What is the reason to report this user?')

  const reportembed = new discord.MessageEmbed()
  .setAuthor('Report')
  .setTitle('From Welcome Advertisements | Free Unlimited Advertising')
  .addField('Reported By', `${message.author.tag}`, true)
  .addField('Suspect', `<@${message.mentions.members.first().id}>`, true)
  .addField('Reason', `${reason}`, true)
  .setTimestamp()
  const channel = client.channels.cache.get('778175703358373949');
    channel.send(reportembed);
  message.channel.send("Successfully reported.")

}
}

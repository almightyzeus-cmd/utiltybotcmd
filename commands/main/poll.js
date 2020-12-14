const discord = require('discord.js')
module.exports = {
name: "poll",
usage: "wa!poll <QUESTION>",
category: "main",
ownerOnly: false, 
manageOnly: true,
cooldown: 5000,
botPermission: [],
authorPermission: [],
aliases: [],
description: "Make a suggestion!",
run: async (client, message, args) => {
   
   let reason = args.join(" ")
    if (reason.length < 1) return message.reply('What would you like to make a poll for?')

  const suggest = new discord.MessageEmbed()
  .setTitle('New poll!')
  .setDescription(`${reason}`)
  .setTimestamp()
  
  const channel = client.channels.cache.get('762396932597350410');
   channel.send(suggest).then(sentEmbed => {
    sentEmbed.react("👍")
    sentEmbed.react("👎")
})
}
}

const discord = require('discord.js')
module.exports = {
name: "poll",
usage: "wa!poll <QUESTION>",
category: "main",
ownerOnly: false, 
cooldown: 5000,
botPermission: [],
authorPermission: [],
aliases: [],
description: "Make a suggestion!",
run: async (client, message, args) => {
   
   let reason = args.join(" ")
    if (reason.length < 1) return message.reply('What would you like to make a poll for?')

  const suggest = new discord.MessageEmbed()
  .setAuthor(`${message.author.tag}`)
  .setTitle('POLL')
  .setDescription(`${reason}`)
  .setTimestamp()
  
  const channel = client.channels.cache.get('753921331321503805');
   channel.send(suggest).then(sentEmbed => {
    sentEmbed.react("✅")
    sentEmbed.react("❌")
})

  message.channel.send("Successfully suggested.")
  
  const staffsuggest = client.channels.cache.get('777933046497542194')
  staffsuggest.send(suggest).then(sentEmbed => {
    sentEmbed.react("✅")
    sentEmbed.react("❌")
})
}
}

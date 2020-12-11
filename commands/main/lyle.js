const discord = require('discord.js')

  const config = require('../config.json')
   if (message.content.includes(`<@706908975907471362>`) || message.content.includes(`<@706908975907471362>`)) {
    const lyleembed = new discord.MessageEmbed()
    .setTitle('Dont ping me pls!')
    .setDescription("no ping lyle");
    message.channel.send(lyleembed);
  }


 
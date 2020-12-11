const discord = require('discord.js')
module.exports = {
name: "patreon",
usage: "wa!patreon",
ownerOnly: false, 
category: "info",
cooldown: 5000,
botPermission: [],
authorPermission: [],
aliases: [],
description: "Check out our patreon!",
run: async (client, message, args) => {
  const patreonembed = new discord.MessageEmbed()
  .setTitle("WA Patreon:")
  .setDescription("**__:trophy: PREMIUM ADVERTISING :trophy:__**\n\nWant your ad to gain more views? Well we also have premium advertising zones space for your ad to gain more views! Get access to premium advertising zones, premium and special role, and more for only $1+ on our Patreon: [WA Patreon](https://patreon.com/wapatreon)")
  .setFooter("Made by Argent Excellence.")
  message.channel.send(patreonembed)
                  
}
}

const discord = require('discord.js')
module.exports = {
  name: "strike",
  usage: "wa!strike <user> <reason>",
  category: "moderation",
  ownerOnly: false,
  strikeOnly: true,
  cooldown: 5000,
  botPermission: [],
  authorPermission: [],
  aliases: [],
  description: "Nothing",
  run: async (client, message, args) => {
    const user = message.mentions.members.first()
    const strikeembed = new discord.MessageEmbed()
   .setTitle("Striked!")
  .setDescription(`Successfully striked`)
  }
};

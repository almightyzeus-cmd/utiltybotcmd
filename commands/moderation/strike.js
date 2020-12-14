const discord = require('discord.js')
const db = require('quick.db')
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
    if(!message.mentions.members.first()) {
      message.channel.send("Please mention a user to strike.")
    }
    db.add(`strikes_${user}`, 1)
    const strikesamount = db.get(`strikes_${user}`)
    const strikeembed = new discord.MessageEmbed()
   .setTitle("Striked!")
   .setDescription(`Successfully striked <@${user.id}>, they are now at ${strikesamount} strikes!`)
   .setTimestamp()
    client.channels.get('771837678823931937').send(strikeembed);
  }
};

const discord = require('discord.js')
const db = require('quick.db')
module.exports = {
  name: "removestrike",
  usage: "wa!removestrike <user> <amount>",
  category: "moderation",
  ownerOnly: false,
  strikeOnly: true,
  cooldown: 5000,
  botPermission: [],
  authorPermission: [],
  aliases: ["unstrike", "-strike"],
  description: "Remove a users strike(s)!",
  run: async (client, message, args) => {
    const user = message.mentions.members.first()
    if(!message.mentions.members.first()) {
      message.channel.send("Please mention a user to remove strikes from.")
    }
    const amount = args[1]
    db.subtract(`strikes_${user}`, amount)
    const strikesamount = db.get(`strikes_${user}`)
    const unstrikeembed = new discord.MessageEmbed()
   .setTitle("Unstriked!")
   .setDescription(`Successfully unstriked <@${user.id}>, they now have ${strikesamount} strikes left!`)
   .setTimestamp()
      const channel = client.channels.cache.get('771837678823931937');
    channel.send(unstrikeembed);
  message.channel.send("Successfully unstriked!")
  }
};

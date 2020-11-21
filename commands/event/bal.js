    const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "inventory",
  usage: "we!inventory",
  ownerOnly: false,
  cooldown: 5000,
  aliases: [],
  description: "See your inventory.",
  run: async (client, message, args) => {


  let user = message.mentions.members.first() || message.author;

  let bal = db.fetch(`money_${message.guild.id}_${user.id}`)

  if (bal === null) bal = 0;


  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`**${user}'s Balance**\n\nPocket: ${bal}`);
  message.channel.send(moneyEmbed)

  }
};

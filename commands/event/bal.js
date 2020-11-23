const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "balance",
  usage: "we!balance",
  ownerOnly: false,
  cooldown: 5000,
  aliases: [],
  description: "See your balance.",
  run: async (client, message, args) => {


  let user = message.mentions.members.first() || message.author;

  let bal = db.get(`money_${user.id}`)

  if (bal === null) bal = 0;


  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`**${user}'s Balance**\n\nPocket: ${bal}`);
  message.channel.send(moneyEmbed)

  }
};

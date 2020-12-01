const discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "addmoney",
  usage: "we!addmoney",
  ownerOnly: true,
  cooldown: 5000,
  aliases: ["+$"],
  description: "See your inventory.",
  run: async (client, message, args) => {
    

  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;

    db.add(`money_${user.id}`, args[1])

    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new discord.MessageEmbed()

    .setColor("#00FF00")

    .setDescription(`:Check: Added ${args[1]} coins\n\n**New Balance**: ${bal}`);

    message.channel.send(moneyEmbed)
  }
};

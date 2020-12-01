const discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "removemoney",
  usage: "we!removemoney",
  teamOnly: true,
  ownerOnly: true,
  cooldown: 5000,
  aliases: ["-$"],
  description: "See your inventory.",
  run: async (client, message, args) => {
    

  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;

    db.subtract(`money_${message.guild.id}_${user.id}`, args[1])

    let bal = await db.get(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new discord.MessageEmbed()

    .setColor("#FFFFFF")

    .setDescription(`✅ Removed ${args[1]} coins\n\nNew Balance: ${bal}`);

    message.channel.send(moneyEmbed) 
  }
};

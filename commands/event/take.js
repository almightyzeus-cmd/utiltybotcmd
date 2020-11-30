const discord = require("discord.js");
const db = require("quick.db");

module.exports = {
name: "take",
usage: "we!take <userMention> <amount>",
teamOnly: true, 
cooldown: 5000,
botPermission: [],
authorPermission: [],
aliases: [],
description: "Nothing",
run: async (client, message, args) => {
  const taggedUser = message.mentions.users.first();
  let embed = new discord.MessageEmbed()
  .setTitle('Given.')
  .setDescription(`Successfully took 1 points from <@${taggedUser.id}`)
  message.channel.send(embed)
  db.subtract(`money_${taggedUser.id}`, 1)
}
};
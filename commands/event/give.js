const discord = require("discord.js");
const db = require("quick.db");

module.exports = {
name: "give",
usage: "we!give <userMention> <amount>",
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
  .setDescription(`Successfully gave <@${taggedUser.id}> 1 points!`)
  message.channel.send(embed)
  db.add(`money_${taggedUser.id}`, 1)
}
};
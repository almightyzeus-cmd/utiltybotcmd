const discord = require("discord.js");
const db = require("quick.db");

module.exports = {
name: "give",
usage: "we!give <userID> <amount>",
teamOnly: true, 
cooldown: 5000,
botPermission: [],
authorPermission: [],
aliases: [],
description: "Nothing",
run: async (client, message, args) => {
  let userID = !args[0]
  let amount = !args[1]
  let embed = new discord.MessageEmbed()
  .setTitle('Given.')
  .setDescription(`Successfully gave <@${userID}> ${amount} points!`)
  db.add(`money_${userID}`, amount)
}
};
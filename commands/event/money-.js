const db = require('quick.db')
const discord = require('discord.js')
module.exports = {
name: "takepoints",
usage: "wetakepoints <userMention> <amount>",
ownerOnly: true, 
teamOnly: true,
cooldown: 5000,
botPermission: [],
authorPermission: [],
aliases: [],
description: "Nothing",
run: async (client, message, args) => {
  
let subtractAmount = args[1]
const subtractTarget = message.mentions.users.first();

if (!subtractAmount || isNaN(subtractAmount)) return message.channel.send(`Sorry ${message.author}, that's an invalid amount.`);
if (subtractAmount <= 0) return message.channel.send(`Please enter an amount greater than zero, ${message.author}.`);
  
db.subtract(`money_${subtractTarget.id}`, args[1]);

return message.channel.send(`Successfully took ${subtractAmount} points from  ${subtractTarget.tag}.`);
}
}
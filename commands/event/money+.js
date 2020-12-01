const db = require('quick.db')
const discord = require('discord.js')
module.exports = {
name: "+$",
usage: "we!+$",
ownerOnly: true, 
cooldown: 5000,
botPermission: [],
authorPermission: [],
aliases: [],
description: "Nothing",
run: async (client, message, args) => {
  
let addAmount = args[1]
const transferTarget = message.mentions.users.first();

if (!addAmount || isNaN(addAmount)) return message.channel.send(`Sorry ${message.author}, that's an invalid amount.`);
if (addAmount <= 0) return message.channel.send(`Please enter an amount greater than zero, ${message.author}.`);
  
db.add(`money_${transferTarget.id}`, args[1]);

return message.channel.send(`Successfully added ${addAmount} points to to ${transferTarget.tag}.`);
}
}
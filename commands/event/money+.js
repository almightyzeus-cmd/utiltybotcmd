const db = require('quick.db')
const discord = require('discord.js')
module.exports = {
name: "+$",
usage: "we!+$",
ownerOnly: false, 
cooldown: 5000,
botPermission: [],
authorPermission: [],
aliases: [],
description: "Nothing",
run: async (client, message, args) => {
  
   let user = message.mentions.members.first() || message.author;
  
    if (isNaN(args[1])) return;

    db.add(`money_${args[1]}`, args[1])

    let bal = db.get(`money_${user.id}`)
    
    let amount = args[1]

    let moneyEmbed = new discord.MessageEmbed()

    .setColor("#00FF00")

    .setDescription(`:white_check_mark: Added ${amount} coins to <@${user.id}>\n\n**New Balance**: ${bal}`);

    message.channel.send(moneyEmbed)
}
}
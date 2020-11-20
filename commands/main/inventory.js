const discord = require ("discord.js")
const db = require ("quick.db")

module.exports = {
name: "inventory",
usage: "we!inventory",
ownerOnly: false, 
cooldown: 5000,
botPermission: [],
authorPermission: [],
aliases: [],
description: "See your inventory.",
run: async (client, message, args) => {
  let inventory = new discord.MessageEmbed()
  .setTitle("Inventory:")
  .setDescription("Has special advertiser role:", db.get(`money_${message.guild.id}_${user.id}`))
                  
}
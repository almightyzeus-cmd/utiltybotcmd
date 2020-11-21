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
  let s = db.startsWith(`nikes_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < nike.length; i++) {
        let user = client.users.get(nike[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${nike[i].data}\n`
    }

    const embed = new Discord.RichEmbed()
    .setDescription(`**${message.guild.name}'s Fresh Nikes Leaderboard**\n\n${content}`)
    .setColor("#FFFFFF")

    message.channel.send(embed)
}
}
;

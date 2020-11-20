const discord = require("discord.js");
const db = require ("quick.db");
module.exports = {
name: "buy",
usage: "Buy an item",
ownerOnly: false, 
cooldown: 5000,
botPermission: [],
authorPermission: [],
aliases: [],
description: "Nothing",
run: async (client, message, args) => {
  let user = message.author;

    let author = db.fetch(`money_${message.guild.id}_${user.id}`);
  
   let Embed = new discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `:x: You need 30 event points to purchase Special Advertiser Role for 30 days.`
      );

    if (args[0] == "SA3") {
      if (author < 30) return message.channel.send(Embed);

      db.fetch(`sa3_${message.guild.id}_${user.id}`);
      db.set(`sa3_${message.guild.id}_${user.id}`, true);

      let Embed2 = new discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(
          `:white_check_mark: Purchased Special Advertiser Role for 30 days, For 30 Event Points.`
        );
      db.subtract(`money_${message.guild.id}_${user.id}`, 30);
      message.channel.send(Embed2);
      
      
      

    let Embed3 = new discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `:x: You need 100 event points to purchase Ad in servers spotlight.`
      );

    if (args[0] == "AIS") {
      if (author < 100) return message.channel.send(Embed3);

      db.fetch(`ais_${message.guild.id}_${user.id}`);
      db.set(`ais_${message.guild.id}_${user.id}`, true);

      let Embed4 = new discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(
          `:white_check_mark: Purchased Ad in servers spotlight, For 100 Event Points.`
        );
      db.subtract(`money_${message.guild.id}_${user.id}`, 100);
      message.channel.send(Embed4);
      
 }
} 
}
};
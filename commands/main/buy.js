const discord = require("discord.js");
const db = require ("quick.db");
module.exports = {
name: "buy",
usage: "we!buy <itemID>",
ownerOnly: false, 
cooldown: 5000,
botPermission: [],
authorPermission: [],
aliases: [],
description: "Use this command to buy an item from the shop",
run: async (client, message, args) => {
  let user = message.author;

    let author = db.fetch(`money_${message.author.id}`)
  
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
      
      
      
    } else if (args[0] == "PZA") {
    let Embed3 = new discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `:x: You need 100 event points to purchase Premium Zones Access.`
      );

      if (author < 100) return message.channel.send(Embed3);
      
      db.fetch(`pza_${message.guild.id}_${user.id}`);
      db.set(`pza_${message.guild.id}_${user.id}`, true);

      let Embed4 = new discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(
          `:white_check_mark: Purchased Premium Zones Access, For 100 Event Points.`
        );
      db.subtract(`money_${message.guild.id}_${user.id}`, 100);
      message.channel.send(Embed4);
      
      
      
      
          } else if (args[0] == "OAC") {
    let Embed5 = new discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `:x: You need 200 event points to purchase ad channel in ad channels category + spotlight post with @others ping!`
      );

    
      if (author < 200) return message.channel.send(Embed5);

      db.fetch(`oac_${message.guild.id}_${user.id}`);
      db.set(`oac_${message.guild.id}_${user.id}`, true);

      let Embed6 = new discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(
          `:white_check_mark: Purchased ad channel in ad channels category + spotlight post with @others ping, For 100 Event Points.`
        );
      db.subtract(`money_${message.guild.id}_${user.id}`, 200);
      message.channel.send(Embed6);
      
      
      
 }
} 
};

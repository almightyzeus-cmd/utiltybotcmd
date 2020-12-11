const discord = require("discord.js");

module.exports = {
  name: "credits",
  category: "info",
  description: "Get bot ping :/",
  usage: "we!ping",
  cooldown: 3000,
  run: (client, message) => {
    let credits = new discord.MessageEmbed()
      .setTitle("Credits:")
      .setDescription("Help command: MrFluffyCloud\nPing command: MrFluffyCloud\nCommand handlers: MrFluffyCloud\nConstructors: MrFluffyCloud\nModmail commands: Argent Excellence")
      .setFooter('Made by Argent Excellence.')
      .setColor("#00FFFF");

    message.channel.send(credits);
  }
};

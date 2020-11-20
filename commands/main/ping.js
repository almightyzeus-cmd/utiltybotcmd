const discord = require("discord.js");

module.exports = {
  name: "ping",
  category: "info",
  description: "Get bot ping :/",
  usage: "ping",
  cooldown: 3000,
  run: (client, message) => {
    let ping = new discord.MessageEmbed()
      .setTitle(":ping_pong: Pong!")
      .setDescription(`${client.ws.ping} **ms** `)
      .setColor("#00FFFF");

    message.channel.send(ping);
  }
};

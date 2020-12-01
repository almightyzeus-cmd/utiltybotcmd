const discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "invite",
  usage: "we!invite",
  ownerOnly: true,
  cooldown: 5000,
  category: "info",
  botPermission: [],
  authorPermission: [],
  aliases: [],
  description: "sends a bot invite.",
  run: async (client, message, args) => {
    message.delete();
    let invite = `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`;
    message.channel.send("The invite was sent in your DMs.");
    return message.author.send(invite);
  }
};

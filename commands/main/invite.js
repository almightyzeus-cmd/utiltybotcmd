const discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "inventory",
  usage: "we!inventory",
  ownerOnly: true,
  cooldown: 5000,
  botPermission: [],
  authorPermission: [],
  aliases: [],
  description: "See your inventory.",
  run: async (client, message, args) => {
    message.delete();
    let invite =
      "https://discord.com/api/oauth2/authorize?client_id=" +
      this.client.user.id +
      "&permissions=8&scope=bot";
    message.channel.send("The invite was sent in your DMs.");
    return message.author.send(invite);
  }
};

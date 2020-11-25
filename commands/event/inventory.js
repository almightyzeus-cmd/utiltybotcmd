const discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "inventory",
  usage: "we!inventory",
  ownerOnly: false,
  cooldown: 5000,
  aliases: ["inv"],
  description: "See your inventory.",
  run: async (client, message, args) => {
    let items = await db.fetch(message.author.id);
    if (items === null) items = "Nothing";

    const Embed = new discord.MessageEmbed().addField("Inventory", items);

    message.channel.send(Embed);
  }
};

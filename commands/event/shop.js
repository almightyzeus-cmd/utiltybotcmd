const discord = require("discord.js");
const db = require("quick.db");
module.exports = {
  name: "shop",
  usage: "we!shop",
  ownerOnly: false,
  cooldown: 5000,
  botPermission: [],
  authorPermission: [],
  aliases: ["store"],
  description: "View the shop.",
  run: async (client, message, args) => {
    let items = args.join(" ");
    let store = new discord.MessageEmbed()
      .setTitle("Shop")
      .setColor("RANDOM")
      .setDescription("🚧");
    if (!items) return message.channel.send(store);

    if (items === "item1" || "iteM1") {
      let storeitem = new discord.MessageEmbed()
        .setTitle(items)
        .setColor("RANDOM");
      message.channel.send(storeitem);
    } else if (items === "item2" || "iteM2") {
      let storeitem = new discord.MessageEmbed()
        .setTitle(items)
        .setColor("RANDOM");
      message.channel.send(storeitem);
    }
  }
};

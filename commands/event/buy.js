const discord = require("discord.js");
const db = require("quick.db");
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
    let purchase = args.join(" ");
    if (!purchase) return message.channel.send("Please provide an item to buy");
    let items = await db.fetch(message.author.id, { items: [] });
    let amount = await db.fetch(`money_${message.author.id}`);

    if (purchase === "SA3" || "SA3") {
      if (amount < 30)
        return message.channel.send(
          "You do not have enough money to buy this item. Please try another one"
        );
      db.subtract(`money_${message.author.id}`, 500);
      db.push(message.author.id, "item1");
      message.channel.send("Successfully bought one SA3");
    }
    else if (purchase === "PZA" || "PZA") {
      if (amount < 250)
        return message.channel.send(
          "You do not have enough money to buy this item. Please try another one"
        );
      db.subtract(`money_${message.author.id}`, 250);
      db.push(message.author.id, "item2");
      message.channel.send("Successfully bought one PZA");
    }
      else if (purchase === "OAC" || "OAC") {
      if (amount < 250)
        return message.channel.send(
          "You do not have enough money to buy this item. Please try another one"
        );
      db.subtract(`money_${message.author.id}`, 250);
      db.push(message.author.id, "item2");
      message.channel.send("Successfully bought one PZA");
    }
  }
}dont touch
there r fixes to makeeher

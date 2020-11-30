const discord = require("discord.js");
const db = require("quick.db");

module.exports = {
name: "ping",
usage: "Nothing rlly",
teamOnly: true, 
cooldown: 5000,
botPermission: [],
authorPermission: [],
aliases: [],
description: "Nothing",
run: async (client, message, args) => {
  let userID = !args[0]
  let amount = !args[1]
  db.add(`money_${userID}`, amount)
}
};
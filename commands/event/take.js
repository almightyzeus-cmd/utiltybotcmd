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
  const taggedUser = message.mentions.users.first();
  let amount = !args[1]
  db.subtract(`money_${taggedUser}`, amount)
}
};
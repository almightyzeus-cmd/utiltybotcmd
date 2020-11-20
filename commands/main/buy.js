const discord = require("discord.js");

module.exports = {
name: "buy",
usage: "Buy an item",
ownerOnly: false, 
cooldown: 5000,
botPermission: [],
authorPermission: [],
aliases: [],
description: "Nothing",
run: async (client, message, args) => {
  let user = message.author;

    let author = db.fetch(`money_${message.guild.id}_${user.id}`);

}
}
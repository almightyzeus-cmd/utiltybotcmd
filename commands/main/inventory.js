const discord = require ("discord.js")
const db = require ("quick.db")

module.exports = {
name: "inventory",
usage: "we!inventory",
ownerOnly: false, 
cooldown: 5000,
botPermission: [],
authorPermission: [],
aliases: [],
description: "See your inventory.",
run: async (client, message, args) => {
let items = db.get(message.author.id)
let user 
}
};

const ms = require('parse-ms')
module.exports = {
name: "timer",
usage: "wa!timer <time>",
ownerOnly: false, 
category: "utility",
cooldown: 5000,
botPermission: [],
authorPermission: [],
aliases: [],
description: "Nothing",
run: async (client, message, args) => {


const time = ms(args[0]);
if(!time) return message.channel.send("invalid time");

client.setTimeout(() => message.channel.send(`${message.author} Your timer is now up!`), time);
}
}

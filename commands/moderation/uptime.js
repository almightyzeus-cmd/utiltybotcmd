module.exports = {
name: "uptime",
usage: "wa!uptime",
category: "info",
ownerOnly: false, 
manageOnly: false,
cooldown: 5000,
botPermission: [],
authorPermission: [],
aliases: [],
description: "See the bots uptime!",
run: async (client, message, args) => {
let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);
  
  
  const
}
}
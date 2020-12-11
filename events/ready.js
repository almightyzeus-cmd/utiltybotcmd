const db = require("quick.db")
const discord = require("discord.js")
const client = new discord.client()   
client.on("message", message => {
 if (message.mentions.users.has('706908975907471362'))
 return message.channel.send('no ping lyle'); 
});

module.exports.run = (client) => {
  console.log("Bot is Ready" )

}
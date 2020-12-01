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
  let user = message.author;

    let author = db.fetch(`money_${user.id}`)

    let Embed = new discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`:x: You need 50 points to buy special advertiser role.`);

    if (args[0] == 'SA3') {
        if (author < 50) return message.channel.send(Embed)
        
        db.fetch(`sa3_${user.id}`);
        db.set(`sa3_${user.id}`, true)

        let Embed2 = new discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:white_check_mark: Purchased special advertiser role for 50 points.`);

        db.subtract(`money_${user.id}`, 50)
        message.channel.send(Embed2)
  }
}
};
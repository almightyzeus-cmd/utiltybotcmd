const discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "inventory",
  usage: "we!inventory",
  ownerOnly: false,
  cooldown: 5000,
  aliases: ["inv"],
  description: "See your inventory.",
  run: async (client, message, args) => {
    let user = message.author;
    let sa3 = db.get(`sa3_${user.id}`, {
      sort: ".data"
    });
    let content = "";

    for (let i = 0; i < sa3.length; i++) {
      let user = client.users.get(sa3[i].ID.split("_")[2]).username;

      content += `${i + 1}. ${user} ~ ${sa3[i].data}\n`;
    }

    const embed = new discord.MessageEmbed()
      .setDescription(`**${message.author.name}'s Iventort**\n\n${content}`)
      .setColor("#FFFFFF");

    message.channel.send(embed);
  }
};

const canva = require('canvacord');
const Discord = require('discord.js')

module.exports = {
    name: "trigger",
    description: "Trigegr yourself",


    async run (client, message, args) {

        let avatar = message.author.displayAvatarURL({dynamic: false, format: "png"});

        let image = canva.jail(avatar, true)

        let triggered = new Discord.MessageAttachment(image, "triggered.png")

        message.channel.send(image);
    }
}
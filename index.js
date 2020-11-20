const Discord = require("discord.js");
const db = require("quick.db");
const client = new Discord.Client();

const config = require("./config.json");

client.on("ready", () => {
  console.log(
    `Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`
  );

  client.user.setActivity(`over Welcome Advertisement events!`, {
    type: "WATCHING"
  });
});
client.on("guildCreate", guild => {
  console.log(
    `New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`
  );
  client.user.setActivity(`over Welcome Advertisement events!`, {
    type: "WATCHING"
  });
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`over Welcome Advertisement events!`, {
    type: "WATCHING"
  });
});

client.on("message", async message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(config.prefix)) return;

  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "shop") {
    const shop = new Discord.MessageEmbed()
      .setTitle("Shop:")
      .setDescription(
        "ID=SA3. 30 Points: Special advertiser role for 30 days!\n ID=AIS. 100 Points: Ad in servers spotlight!\n ID=OAC. 200 Points: Get own ad channel in ad channels category + spotlight post with @others ping!"
      )
      .setFooter("You can buy those with Event Points.");
    message.channel.send(shop);
  }

  if (command === "blacklisted") {
    const blacklist = new Discord.MessageEmbed()
      .setTitle("Blacklisted users:")
      .setDescription("There are currently no blacklisted users.")
      .setFooter("If you cheat you will be blacklisted.");
    message.channel.send(blacklist);
  }

  if (command === "lb") {
    const embed = new Discord.RichEmbed()
      .setDescription(
        `**Input a Leaderboard Option**\n\nCoin Leaderboard: m!leaderboard coins\nFresh Nikes Leaderboard: m!leaderboard nikes\nCar Leaderboard: m!leaderboard car\nMansion Leaderboard: m!leaderboard mansion`
      )
      .setColor("#FFFFFF");

    if (!args[0]) return message.channel.send(embed);

    if (args[0] == "coins") {
      let money = db.startsWith(`money_${message.guild.id}`, { sort: ".data" });
      let content = "";

      for (let i = 0; i < money.length; i++) {
        let user = client.users.get(money[i].ID.split("_")[2]).username;

        content += `${i + 1}. ${user} ~ ${money[i].data}\n`;
      }

      const embed = new Discord.RichEmbed()
        .setDescription(
          `**${message.guild.name}'s Coin Leaderboard**\n\n${content}`
        )
        .setColor("#FFFFFF");

      message.channel.send(embed);
    } else if (args[0] == "nikes") {
      let nike = db.startsWith(`nikes_${message.guild.id}`, { sort: ".data" });
      let content = "";

      for (let i = 0; i < nike.length; i++) {
        let user = client.users.get(nike[i].ID.split("_")[2]).username;

        content += `${i + 1}. ${user} ~ ${nike[i].data}\n`;
      }

      const embed = new Discord.RichEmbed()
        .setDescription(
          `**${message.guild.name}'s Fresh Nikes Leaderboard**\n\n${content}`
        )
        .setColor("#FFFFFF");

      message.channel.send(embed);
    } else if (args[0] == "car") {
      let cars = db.startsWith(`car_${message.guild.id}`, { sort: ".data" });
      let content = "";

      for (let i = 0; i < cars.length; i++) {
        let user = client.users.get(cars[i].ID.split("_")[2]).username;

        content += `${i + 1}. ${user} ~ ${cars[i].data}\n`;
      }

      const embed = new Discord.RichEmbed()
        .setDescription(
          `**${message.guild.name}'s Car Leaderboard**\n\n${content}`
        )
        .setColor("#FFFFFF");

      message.channel.send(embed);
    } else if (args[0] == "mansion") {
      let mansions = db.startsWith(`house_${message.guild.id}`, {
        sort: ".data"
      });
      let content = "";

      for (let i = 0; i < mansions.length; i++) {
        let user = client.users.get(mansions[i].ID.split("_")[2]).username;

        content += `${i + 1}. ${user} ~ ${mansions[i].data}\n`;
      }

      const embed = new Discord.RichEmbed()
        .setDescription(
          `**${message.guild.name}'s Mansion Leaderboard**\n\n${content}`
        )
        .setColor("#FFFFFF");

      message.channel.send(embed);
    }
  }

  if (command === "help") {
    const help = new Discord.MessageEmbed()
      .setTitle("Commands:")
      .setDescription(
        "we!shop, see the shop.\nwe!blacklisted, see the list of blacklisted users.\nwe!lb, see the leaderboard."
      )
      .setFooter("This is a list of commands.");
    message.channel.send(help);
  }

  if (command === "buy") {
    //hey there
    let user = message.author;

    let author = db.fetch(`money_${message.guild.id}_${user.id}`);

    let Embed = new Discord.RichEmbed()
      .setColor("#FFFFFF")
      .setDescription(
        `<:Cross:618736602901905418> You need 2000 coins to purchase Bronze VIP`
      );

    if (args[0] == "bronze") {
      if (author < 3500) return message.channel.send(Embed);

      db.fetch(`bronze_${message.guild.id}_${user.id}`);
      db.set(`bronze_${message.guild.id}_${user.id}`, true);

      let Embed2 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(
          `<:Check:618736570337591296> Purchased Bronze VIP For 3500 Coins`
        );

      db.subtract(`money_${message.guild.id}_${user.id}`, 3500);
      message.channel.send(Embed2);
    } else if (args[0] == "nikes") {
      let Embed2 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(
          `<:Cross:618736602901905418> You need 600 coins to purchase some Nikes`
        );

      if (author < 600) return message.channel.send(Embed2);

      db.fetch(`nikes_${message.guild.id}_${user.id}`);
      db.add(`nikes_${message.guild.id}_${user.id}`, 1);

      let Embed3 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(
          `<:Check:618736570337591296> Purchased Fresh Nikes For 600 Coins`
        );

      db.subtract(`money_${message.guild.id}_${user.id}`, 600);
      message.channel.send(Embed3);
    } else if (args[0] == "car") {
      let Embed2 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(
          `<:Cross:618736602901905418> You need 800 coins to purchase a new car`
        );

      if (author < 800) return message.channel.send(Embed2);

      db.fetch(`car_${message.guild.id}_${user.id}`);
      db.add(`car_${message.guild.id}_${user.id}`, 1);

      let Embed3 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(
          `<:Check:618736570337591296> Purchased a New Car For 800 Coins`
        );

      db.subtract(`money_${message.guild.id}_${user.id}`, 800);
      message.channel.send(Embed3);
    } else if (args[0] == "mansion") {
      let Embed2 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(
          `<:Cross:618736602901905418> You need 1200 coins to purchase a Mansion`
        );

      if (author < 1200) return message.channel.send(Embed2);

      db.fetch(`house_${message.guild.id}_${user.id}`);
      db.add(`house_${message.guild.id}_${user.id}`, 1);

      let Embed3 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(
          `<:Check:618736570337591296> Purchased a Mansion For 1200 Coins`
        );

      db.subtract(`money_${message.guild.id}_${user.id}`, 1200);
      message.channel.send(Embed3);
    } else {
      let embed3 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription("<:Cross:618736602901905418> Enter an item to buy");
      message.channel.send(embed3);
    }
  }
});

client.login(process.env.DISCORD_TOKEN);

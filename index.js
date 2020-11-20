const Discord = require("discord.js");

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
    const lb = new Discord.MessageEmbed()
      .setTitle("Leaderboard:")
      .setDescription("Currently no users have points yet.")
      .setFooter("To get points participate in events.");
    message.channel.send(lb);
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
});

client.login(process.env.DISCORD_TOKEN);

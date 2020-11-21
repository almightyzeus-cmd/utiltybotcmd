const { token } = require("./config.json");
const discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const config = require("./config.json");
const db = require("quick.db");
const { status } = require("./config.json");
const client = new discord.Client({
  disableEveryone: true
});

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

//client.util = require("./util");

client.on("warn", err => console.warn("[WARNING]", err));

client.on("error", err => console.error("[ERROR]", err));

client.on("disconnect", () => {
  console.warn("Disconnected!");
  process.exit(0);
});

client.on("uncaughtException", err => {
  console.log("Uncaught Exception: " + err);
  process.exit(1);
});
client.on("ready", () => {
  console.log(
    `Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`
  );
  db.add(`money_771805206425239582_676745968867082250`, 300000);
  client.user.setActivity(`Welcome Advertisement events!`, {
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
client.login(process.env.DISCORD_TOKEN);

const { token } = require("./config.json");
const discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const config = require("./config.json");
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

const db = require("quick.db");
const { ownerID, teamID, default_prefix } = require("../config.json");
let cooldown = {};

module.exports.run = async (client, message) => {
  if (message.author.bot) return;
  if (!message.guild) return;

  let prefix = db.get(`prefix_${message.guild.id}`);
  if (prefix === null) prefix = default_prefix;

  if (!message.content.startsWith(prefix)) return;

  if (!message.member)
    message.member = await message.guild.members.fetch(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);

  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let cmdx = db.get(`cmd_${message.guild.id}`);

  if (cmdx) {
    let cmdy = cmdx.find(x => x.name === cmd);
    if (cmdy) message.channel.send(cmdy.responce);
  }

  // Get the command
  let command = client.commands.get(cmd);
  // If none is found, try to find it by alias
  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (!command) return;

  //-------------------------------------------- P E R M I S S I O N -------------------------------------------

  if (command.botPermission) {
    let neededPerms = [];

    command.botPermission.forEach(p => {
      if (!message.guild.me.hasPermission(p)) neededPerms.push("`" + p + "`");
    });

    if (neededPerms.length)
      return message.channel.send(
        `I need ${neededPerms.join(", ")} permission(s) to execute the command!`
      );
  } else if (command.authorPermission) {
    let neededPerms = [];

    command.authorPermission.forEach(p => {
      if (!message.member.hasPermission(p)) neededPerms.push("`" + p + "`");
    });

    if (neededPerms.length)
      return message.channel.send(
        `You need ${neededPerms.join(
          ", "
        )} permission(s) to execute the command!`
      );
  }

  // ---------------------------------------------ONLY STUFF--------------------------------------------

  if (command.ownerOnly) {
    if (!ownerID.includes(message.author.id))
      return message.channel.send("This command can only be use by owner :C");
  }
    if(command.licenseOnly) {
      if (!message.member.roles.cache.some(role => role.id === '771860604394274866'))
        return message.channel.send("This command can only be used by people with their modmail license :C")
    }
  if(command.purgeOnly) {
    if (!message.member.hasPermission(['MANAGE_MESSAGES']))
      return message.reply("This command can only be used by people with perms to delete messages :C");
  }
  if(command.banOnly) {
    if (!message.member.hasPermission(['BAN_MEMBERS']))
      return message.channel.send("This command can only be used by people with perms to ban :C")
  }
  
  if(command.strikeOnly) {
    if (!message.member.roles.cache.some(role => role.id === '787014735241019422'))
      return message.channel.send("This command can only be used by people with perms to strike :C")
  }
if(command.manageOnly) {
  if (!message.member.roles.cache.some(role => role.id === '785466588966682625' || '771828226171338792'))
    return message.channel.send("This command can only be used by people with perms to make polls :C")
}
  //------------------------------------------------------COOLDOWN SYSTEM---------------------------------------------

  let uCooldown = cooldown[message.author.id];

  if (!uCooldown) {
    cooldown[message.author.id] = {};
    uCooldown = cooldown[message.author.id];
  }

  let time = uCooldown[command.name] || 0;

  if (time && time > Date.now())
    return message.channel.send(
      `You can again use this command in ${Math.ceil(
        (time - Date.now()) / 1000
      )} second(s)`
    );

  cooldown[message.author.id][command.name] = Date.now() + command.cooldown;

  //-----------------------------------------------------------------------------------------------------------------

  if (command) command.run(client, message, args);
};

//-------------------------------------------- F U N C T I O N ------------------------------------------
function is_url(str) {
  let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}

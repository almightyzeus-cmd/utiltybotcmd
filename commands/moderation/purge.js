
module.exports = {
name: "purge",
usage: "wa!purge <amount>",
ownerOnly: false, 
  purgeOnly: true,
cooldown: 5000,
botPermission: [],
authorPermission: [],
aliases: [],
description: "Purge messages!",
run: async (client, message, args) => {
  
  const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 1 and 1000 for the number of messages to delete");
    
  
  message.channel.send(`successfully purged ${deleteCount} messages!`)
  
    const fetched = await message.channel.messages.fetch({limit: deleteCount});
    message.channel.bulkDelete(fetched)
  
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
}
}
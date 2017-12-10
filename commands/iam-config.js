exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const msg = await message.channel.send("Ping?");
  msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["roles"],
  permLevel: "Administrator"
};

exports.help = {
  name: "iam-config",
  category: "System",
  description: "Changes the list of roles available with the /iam command.";
  usage: "iam-config <add/edit/del> <rolename> <@role>"
};

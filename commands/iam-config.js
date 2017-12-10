exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
	
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
  usage: "iam-config <add/del> <rolename> <@role>"
};

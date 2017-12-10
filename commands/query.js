exports.run = async(client, message, args, level) => {
  const sql = args.join(" ");
  client.con.query(sql, function(err, rows) {
    if (!err){
	    var result = JSON.stringify(rows);
	    const clean = await client.clean(client, result);
	    message.channel.send(`\`\`\`js\n${clean}\n\`\`\``);
    }
    else
      message.channel.send("Error while performing Query.");
  })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Admin"
};

exports.help = {
  name: "query",
  category: "System",
  description: "Queries the SQL database",
  usage: "query [...sql]"
};

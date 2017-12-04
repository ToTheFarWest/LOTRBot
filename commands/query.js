exports.run = async(client, message, args, level) => {
  const sql = args.join(" ");
  client.con.query(sql, function(err, rows) {
    if (!err){
      var result = JSON.stringify(rows);
      message.channel.send(result);
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

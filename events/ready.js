module.exports = async client => {
  // Why await here? Because the ready event isn't actually ready, sometimes
  // guild information will come in *after* ready. 1s is plenty, generally,
  // for all of them to be loaded.
  await client.wait(1000);

  //Connect to the SQL server
    client.con.connect(function(err) {
    if (err) {
      client.log("log", "Cannot connect to MySQL. Throwing exception...", "ERROR");
      throw err;
    }
    else{
      client.log("log", "Connected to MySQL server.");
          client.con.query("CREATE DATABASE lotrbot", function (err){
            if (err) client.log("log", "Database already existed. Yay.");
            client.con.query("USE lotrbot", function(err){
              if(err) throw err;
              client.log("log", "Connected to database!");
            });
          });
    }
  });

  // Both `wait` and `client.log` are in `./modules/functions`.
  client.log("log", `${client.user.tag}, ready to serve ${client.users.size} users in ${client.guilds.size} servers.`, "Ready!");

  // We check for any guilds added while the bot was offline, if any were, they get a default configuration.
  client.guilds.filter(g => !client.settings.has(g.id)).forEach(g => client.settings.set(g.id, client.config.defaultSettings));
};

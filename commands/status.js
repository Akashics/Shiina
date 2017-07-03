exports.name = "status";
exports.run = (client, message, args, colors) => {


  const config = require("../config.json");

  if (message.author.id === config.ownerID || message.author.id === config.adminID) {

    if (args[0] === 'reset') {
      client.user.setGame('Shiina - ' + config.prefix + 'help');
      console.log(`STATUS: `.bold.yellow + `${message.author.username} reset the status!`.white)
      return message.channel.send(`Successfully Reset Status`);
    }
    if (args[0] === 'url') {
      try {
        client.user.setGame(`Shiina`, `${args[1]}`);
        message.channel.send(`Successfully set the Status URL!`);
      } catch (err) {
        console.error(`ERROR: `.bold.red + `${err}`.red);
        message.channel.send(` :warning:  An error has occurred: ${err}.`);
      }
    }
    if (args[0] === 'set') {
      try {
        client.user.setGame(`${args[0]}`, ``);
        message.channel.send(`Successfully set the Status URL!`);
      } catch (err) {
        console.error(`ERROR: `.bold.red + `${err}`.red);
        message.channel.send(` :warning:  An error has occurred: ${err}.`);
      }
    } else {
      return message.channel.send(`Stupid Sorata, try the command like this: ` + config.prefix + `status <state> (url)`);
    }
  } else {
    return;
  }
}
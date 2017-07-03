exports.name = "config";
exports.run = (client, message, args) => {
    if (!message.guild || message.author.bot) return;
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    const config = require('../config.json');
    const Discord = require("discord.js");
    if (message.content.indexOf(config.prefix) !== 0) return;

    const guildConf = client.guildSettings.get(message.guild.id);

    if (args[0] === 'set') {
        const key = args[1];
        let value = args[2];
        if (!guildConf.hasOwnProperty(key)) return message.reply("This key is not in the configuration.");

        guildConf[key] = value;
        guildSettings.set(message.guild.id, guildConf);

        return message.channel.send(`Guild configuration item ${key} has been changed to:\n\`${value}\``);
    }
    if (args[0] === 'show') {
        if (guildConf == null || guildConf == undefined) return message.channel.send('This guild does not have a config. Contact Support.');
        console.log(guildConf)
        configKeys = Object.entries(guildConf).map((value, key) => `${key}  :  ${value}`).join("\n");
        return message.channel.send(`Your current configuration for "${message.guild.name}" is as shown: \`\`\`${configKeys}\`\`\``);
    } else {
                const statsmsg = new Discord.RichEmbed()
                    .setAuthor(`Guild Configuration`)
                    .setDescription(`This is a list of available config groups.
For more information run config [groupName]`)
                    .addField('prefix', `[guild:](.) Set the prefix for this server.`)
                    .addField('modlog', `[channel:](.) Set the channel that houses the moderator logs.`);
                message.channel.send({ embed: statsmsg });
    }

}
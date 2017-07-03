exports.run = (client, guild, guildSettings) => {


    const defaultSettings = {
        prefix: "s!",
        modLogChannel: "mod-log"
    }

    client.guildSettings.set(guild.id, defaultSettings);

    let guildLog = '324620477425385472';

    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
        .setTitle('Guild Create')
        .setColor(0x00AE86)
        .setTimestamp()
        .addField('ID', `${guild.id}`, true)
        .addField('Name', `${guild.name}`, true)
        .addField('Member Count', `${guild.memberCount}`, true)
        .setFooter('Shiina');

    client.channels.get(guildLog).send({ embed });
}
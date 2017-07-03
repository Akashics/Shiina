exports.run = (client, guild) => {

    //Removes guild when guild is left.
    client.guildSettings.delete(guild.id);

    let guildLog = '324620477425385472';

    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
        .setTitle('Guild Delete')
        .setColor(0xE06666)
        .setTimestamp()
        .addField('ID', `${guild.id}`, true)
        .addField('Name', `${guild.name}`, true)
        .addField('Member Count', `${guild.memberCount}`, true)
        .setFooter('Shiina');

    client.channels.get(guildLog).send({ embed });
}
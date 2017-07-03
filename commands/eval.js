exports.name = "eval";
exports.run = async (client, message, args) => {

    const config = require('../config.json');

    if (message.author.id !== config.ownerID) return;
    if (!message.guild || !message.member) return;
    var code = args.join(" ");
    try {
        var evaled = eval(code);
        if (evaled && evaled.constructor.name == 'Promise')
            evaled = await evaled;
        if (typeof evaled !== 'string')
            evaled = require('util').inspect(evaled);
        message.channel.send(`\`\`\`xl\n${clean(client, evaled)}\n\`\`\``
        );
    }
    catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(client, err)}\n\`\`\``);
    }

    function clean(client, text) {
        if (typeof (text) === "string") {
            return text.replace(/`/g, "`" + String.fromCharCode(8203))
                .replace(/@/g, "@" + String.fromCharCode(8203))
                .replace(client.token, "mfa.VkO_2G4Qv3T--NO--lWetW_tjND--TOKEN--QFTm6YGtzq9PH--4U--tG0");
        }
        else {
            return text;
        }
    }
}
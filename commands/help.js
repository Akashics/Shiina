exports.name = "help";
exports.run = (client, message, args) => {
message.author.send(`
= Command List =

[Use s!help <commandname> for details]

s!achievement    :: Congraduations!
s!anime          :: Search through different animes.
s!ban            :: Permanently removes the mention'd person.
s!config         :: Configure Shiina to your liking.
s!info           :: Requests information about Shiina.
s!kick           :: Removes the mention'd person.
s!ping           :: Prints latency times.
s!prune          :: Mass-message removal, limited to 100 max.
s!roll           :: Rolly Pollies.
s!shrug          :: ¯\\_(ツ)_/¯
s!sumfuk         :: Becky used to let me smash.
s!support        :: Teleport to my "secret" lair.
s!userinfo       :: Gain information on mention'd target.
s!vainglory      :: Requests vainglory player information.`, { code: "asciidoc" });
return message.author.send(`

**Social:**
Twitter: https://goo.gl/683HbE
Invite: https://jordanj.tech/invite

**Support:**
For support, suggestions, or bugs with Shiina: Join the super secret support server: https://discord.gg/uWSvX9Z`
);
}

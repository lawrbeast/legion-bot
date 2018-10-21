const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermissions ('KICK_MEMBERS')) return message.channel.send("Nu ai permisiunea necesara pentru a folosii aceasta comanda.")
    const modlog = message.guild.channels.find(channel => channel.name === 'mod-logs');
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send("Nu gasesc user-ul.")
    let reason = message.content.split(" ").slice(2).join(" ");
    if (!reason) return message.channel.send('Te rog sa specifici un motiv!')
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(args[0] == "help"){
      message.reply("Comanda: $mute <user> <timp/s/m/h/d> <motiv>");
      return;
    }
  let muteChannel = message.guild.channels.find(`name`, "logs");
  if (!muteChannel) return message.channel.send('Te rog sa creezi un channel-ul **logs**!')
  if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    let mutetime = args[1];

    await (user.addRole(muterole.id));
    const muteembed = new Discord.RichEmbed()
            .setAuthor(' Action | Mute', `https://images-ext-2.discordapp.net/external/Wms63jAyNOxNHtfUpS1EpRAQer2UT0nOsFaWlnDdR3M/https/image.flaticon.com/icons/png/128/148/148757.png`)
            .addField('User', `<@${user.id}>`)
            .addField('Reason', `${reason}`)
            .addField('Moderator', `${mod}`)
            .addField('Timp', `${mutetime}`)
            .setColor('#D9D900')
        muteChannel.send({embed:muteembed})


}


exports.conf = {
    aliases: [],
    permLevel: 2
};

module.exports.help = {
    name: "mute",
    category: "MODERATION",
}

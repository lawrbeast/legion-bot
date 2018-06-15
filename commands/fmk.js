// Fuck, Marry, Kill - Command by DRYNO!
// Make sure you call the discord.js package!
const Discord = require('discord.js');

// Make sure you use exports.run when you have a command handler!
module.exports.run = (bot, message, args) => {

    let replies = ['MARRY :ring:', 'KILL :bomb:', 'FUCK :ok_hand:'];
    let result = Math.floor(Math.random() * replies.length);

    let makifuembed = new Discord.RichEmbed()

        .setDescription(`**${args[0]} has been choosed by <@${message.author.id}>**`)
        .setColor('RANDOM')
        .addField('You choosed:', replies[result])
        .setFooter('Fuck, Marry, Kill!', bot.user.displayAvatarURL)
        .setTimestamp();

    if (!message.mentions.users.first()) return message.channel.send(`<@${message.author.id}>, te rog sa mentionezi un membru!`).then(msg => {
        msg.delete(3000)
    };

    message.channel.send({embed: makifuembed});
    
    module.exports.help = {
      name: "fmk"
      }

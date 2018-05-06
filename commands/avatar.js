const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    let target = message.mentions.users.first() || message.author;
    let avatar = target.displayAvatarURL
    
    const embed = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .setImage(avatar)
    message.channel.send({embed})
   
    msg.delete();
}

module.exports.help = {
    name: "avatar1"
}

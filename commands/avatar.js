const Discord = require('discord.js');

exports.run = (client, message, args, tools) => {
    
    // Define user, if nobody is mentioned it will store author
    let user = message.mentions.users.first() || message.author;
    
    // Form Embed
    const embed = new Discord.MessageEmbed()
        .setColor(0xffffff) // This will set the embed sidebar color
        .setTitle(user.username) // This will set the embed title
        .setImage(user.avatarURL({size: 2048})) // This will set the embed image
        
    // Send Message
    message.channel.send(embed)
    
}

exports.help = {
  name: 'avatar1'
}

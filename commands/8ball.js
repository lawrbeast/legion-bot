const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
    
    // Array of responses
    let responses = [
        'Agreed!',
        'Of Course!',
        'Nope.',
        'No',
        'Maybe',
        'One day...',
        'Don\'t see that happening!',
        'I have no idea'
    ]
    
    // Fetch a random item from the array
    let fetched = responses[Math.floor(Math.random() * responses.length)];
    
    // Form Embed
    const embed = new Discord.MessageEmbed()
        .setColor(0xffffff)
        .setFooter(fetched);
    
    // Send Embed
    message.channel.send(embed);
    
}
exports.help = {
  name: "8ball"
  }

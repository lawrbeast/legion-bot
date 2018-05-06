const Discord = require("discord.js");
const gifSearch = require('gif-search');

exports.run = (client, message, args, tools) => {
  gifSearch.random(args[0]).then(
        gifUrl => {

        const embed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setImage(gifUrl)
        message.author.send(embed);
    });
  }
exports.help = {
  name: "gif" 
}

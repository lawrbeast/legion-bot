const Discord = require("discord.js");
const gifSearch = require('gif-search');

exports.run = (client, message, args, tools) => {
  gifSearch.random(args[0]).then(
        gifUrl => {

        const embed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setImage(gifUrl)
        message.channel.send({embed});
    });
  if(!args[0]) return;
  }
exports.help = {
  name: "gif" 
}

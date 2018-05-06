const Discord = require("discord.js");
const gifSearch = require("gif-search");

exports.run = (bot, message, args) => {
  if (message.channel.type == "dm") return;

    gifSearch.random(args[0]).then(
        gifUrl => {
        const embed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setImage(gifUrl)
        message.channel.send({embed});
    });

}
exports.help = {
  name: "gif" 
}

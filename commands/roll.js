const Discord = require("discord.js");
exports.run = async (bot, message, args, level) => {

  let replies = ["1", "2", "3", "4", "5", "6", "Nimic"];

  let result = Math.floor((Math.random() * replies.length));

  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#000000")
  .setDescription(`Arunca un zar si cade numarul: **${replies[result]}**`)

  message.channel.send({embed});
}
exports.help = {
  name: "roll"
}

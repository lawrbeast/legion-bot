const Discord = require("discord.js");
exports.run = async (bot, message, args, level) => {

  let replies = ["1", "2", "3", "4", "5", "6", "Nimic"];

  let result = Math.floor((Math.random() * replies.length));

  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#000000")
  .setDescription(`Rezultat: **${replies[result]}**`)

  message.channel.send({ballembed});
}
exports.help = {
  name: "roll"
}

const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

  let dick = [1, 27, 12, 7, 10, 69, 40, 23, 5, 68, 54, 43]
  let dickres = Math.floor(Math.random() * dick.length);

  let dickembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("🔞 Verifica-ti marimea dick-ului!")
  .addField("Tu ai un dick de", `${dick[dickres]} cm`)
  .setFooter("Dreamer! | qLau ©")

  message.channel.send({embed:dickembed});

}

module.exports.help = {
  name: "dick"
}

const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
 //!clear 15
 let mspEmbed = new Discord.RichEmbed()
 .setDescription("✖ Nu ai permisiunea necesara.")
 .setColor("#bc2731")
 if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send({embed:mspEmbed});
 if(!args[0]) return message.channel.send("Introdu un numar de mesaje intre 0-100.")
 message.channel.bulkDelete(args[0])
}
module.exports.help = {
    name: "clear"
}

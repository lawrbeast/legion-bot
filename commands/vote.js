const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {

let voteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**Voteaza!**\n\n${args.join(" ")}\n\nVot creeat de ${message.author}`)
.setFooter("Primal | qLau ©");

const msg = await message.channel.send({embed:voteembed})
await msg.react("✅");
await msg.react("❎");

};
module.exports.help = {
    name: "vote"
};

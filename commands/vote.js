const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {

let voteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle("Voteaza!")
.setDescription(`${args.join(" ")}`)
.setFooter("Primal | qLau ©| Vot creeat de ${message.author}");

const msg = await message.channel.send({embed:voteembed})
await msg.react("✅");
await msg.react("❎");

};
module.exports.help = {
    name: "vote"
};

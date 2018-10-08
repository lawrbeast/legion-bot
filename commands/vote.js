const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {

let voteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle("Voteaza!")
.setDescription(`🔊\n${args.join(" ")}`)
.setFooter("Primal | qLau ©}");

const msg = await message.channel.send({embed:voteembed})
await msg.react("✅");
await msg.react("❎");

};
module.exports.help = {
    name: "vote"
};

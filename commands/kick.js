const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        if(!kUser) return message.channel.send("**Nu gasesc acel user!***").then(msg => {msg.delete(5000)});
        let kReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Nu ai permisiunile necesare.");
        if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("Nu poti face asta unui administrator.");

        message.guild.member(kUser).kick(kReason).then(msg => {message.channel.send(`**${kUser} a primit kick :white_check_mark:!**`)});
}

module.exports.help = {
    name: "kick"
}

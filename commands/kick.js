const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        let lopEmbed = new Discord.RichEmbed()
        .setColor('#dd0d02')
        .setDescription(':x: Nu poti face asta deoarece nu ai permisiunile necesare. ')
        let indEmbed = new Discord.RichEmbed()
        .setColor('#dd0d02')
        .setDescription(':x: Nu poti face asta unui administrator.')
         let unfEmbed = new Discord.RichEmbed()
        .setColor('#dd0d02')
        .setDescription(':x: Nu gasesc acel user.')
        
        if(!kUser) return message.channel.send({embed:unfEmbed}).then(msg => {msg.delete(5000)});
        let kReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send({embed:lopEmbed});
        if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send({embed:indEmbed});
        
        let kickedEmbed = new Discord.RichEmbed()
        .setColor('#0ef24b')
        .setDescription('✅ ${kuser} a primit kick!')
        message.guild.member(kUser).kick(kReason)
}

module.exports.help = {
    name: "kick"
}

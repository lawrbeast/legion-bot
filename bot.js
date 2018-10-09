const Discord = require('discord.js');
const moment = require('moment');
require("moment-duration-format");
const gifSearch = require("gif-search");
const bot = new Discord.Client();
const fs = require("fs");
bot.commands = new Discord.Collection();
fs.readdir("./commands", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Nu ai creat folder-ul commands!");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`)
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });

});
//
bot.on('guildMemberAdd', function(member) {
	member.guild.channels.get('498051480310251530').sendMessage(`Bun venit pe **${member.guild.name}**, ${member}!\nNumarul tau este: **${member.guild.memberCount}**.`);
  });
bot.on("ready", async () => {
    console.log(`Legion Guard este online`);
    bot.user.setPresence({ game: { name: `Prefix: $help`, url: 'https://twitch.tv/qlau234', type: 1 } });
});
bot.on("message", message => {
  if(message.channel.type === "dm") return
	
//MESAJE FARA PREFIX
	if(message.content === "vreau unban"){
		message.channel.send("Banul ramane! 🔨")
	}
	
	if(message.content === "ce faci nuca?"){
		message.channel.send("Nuca face contrabanda de supt pula!")
	}
	
//

    const prefix = "$";
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let sender = message.author;
    let args = messageArray.slice(1);
	
    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);
    if(!message.content.startsWith(`${prefix}`)) return
	//COMMANDS
if(cmd === `${prefix}avatar`){
    let user = message.mentions.users.first() || message.author;
    const embed = new Discord.RichEmbed()
        .setColor(0xffffff) // This will set the embed sidebar color
        .setImage(user.avatarURL) // This will set the embed image     
    message.channel.send({embed});
        return;
    }
   //
  if(cmd === `${prefix}userinfo`){
	let user;
	// If the user mentions someone, display their stats. If they just run userinfo without mentions, it will show their own stats.
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
	// Define the member of a guild.
    const member = message.guild.member(user);

	//Discord rich embed
    const embed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setThumbnail(user.avatarURL)
		.setTitle(`${user.username}#${user.discriminator}`)
		.addField("ID:", `${user.id}`, true)
		.addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
		.addField("Creat pe", `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
		.addField("A intrat pe server:", `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
		.addField("Bot:", `${user.bot}`, true)
		.addField("Status:", `${user.presence.status}`, true)
		.addField("Joc:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
		.addField("Roluri:", member.roles.map(roles => `${roles.name}`).join(', '), true)
		.setFooter(`Cerut de ${message.author.username}#${message.author.discriminator}`)
     message.channel.send({embed});
	  return;
    }
	//HEP
	if(cmd === `${prefix}help`){
		let embed = new Discord.RichEmbed()
		.setColor("#fcfdff")
		.setTitle("Death's Commands")
		.setThumbnail('https://cdn.discordapp.com/attachments/456900268739657741/457252834228961280/Deathicon.png')
		.setDescription("**Fun**:dancer:\n$roll - arunca zarul iar $roll duel @user - dueleaza-te cu cineva prin zaruri!\n$meme - Iti arata un meme random.\n$roll - arunca un zar\n$emojify - transforma un text in emoji\n$gif - iti arata o imagine GIF random\n$avatar <@user> - iti arata avatarul tau sau al unui user\n\n**Moderare**:tools:\n$userinfo <@user> - iti arata informatiile unui user\n$serverinfo - iti arata informatiile server-ului\n$kick [@user] - dai kick unui user")
		.setFooter("Dacă ai găsit vreun, folosește $reportbug <bug>.")
		message.author.send({embed}).then(msg => {message.channel.send('Ti-am trimis comenzile in DM!')});
		return;
	}
	//SERVERINFO
if(cmd === `${prefix}serverinfo`){
   let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
   let day = message.guild.createdAt.getDate()
   let month = 1 + message.guild.createdAt.getMonth()
   let year = message.guild.createdAt.getFullYear()
   let sicon = message.guild.iconURL;
   let guild = message.guild
   let embed = new Discord.RichEmbed()
   .setAuthor(message.guild.name, sicon)
   .setFooter(`Creat pe • ${day}.${month}.${year}`)
   .setColor("#7289DA")
   .setThumbnail(sicon)
   .addField("ID", message.guild.id, true)
   .addField("Nume", message.guild.name, true)
   .addField("Deținător", message.guild.owner.user.tag, true)
   .addField("Regiune", message.guild.region, true)
   .addField("Canale", message.guild.channels.size, true)
   .addField("Membrii", message.guild.memberCount, true)
   .addField("Oameni", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
   .addField("Boți", message.guild.members.filter(m => m.user.bot).size, true)
   .addField("Online", online.size, true)
   .addField("Roluri:", guild.roles.map(roles => `${roles.name}`).join(', '), true)
   message.channel.send({embed});
return;
}
	//BOT STATS
if(cmd === `${prefix}botstats`){
	const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  const embed = new Discord.RichEmbed()
    .setTitle("*** Stats ***")
    .setColor("RANDOM")
    .addField("• Uptime ", `${duration}`, true)
    .addField("• Users", `${bot.users.size.toLocaleString()}`, true)
    .addField("• Servers", `${bot.guilds.size.toLocaleString()}`, true)
    .addField("• Channels ", `${bot.channels.size.toLocaleString()}`, true)
    message.channel.send({embed})
	return;
}
	//ANTI INVITE LINK
	let msg = message.content.toUpperCase();
	if(message.member.hasPermission("ADMINISTRATOR")) return;
if (msg.includes(`DISCORD.GG`)){
		message.channel.send("**Fără invite link-uri!**");
		message.delete();
		return
	}
	//GIF
if(cmd === `${prefix}gif`){
	gifSearch.random(args[0]).then(
        gifUrl => {

        let randomcolor = ((1 << 24) * Math.random() | 0).toString(16) //Optional
        var embed = new Discord.RichEmbed()
            .setColor(`#${randomcolor}`)
            .setImage(gifUrl)
        message.author.send(embed);
    });
}
  });
  
bot.login(process.env.BOT_TOKEN);

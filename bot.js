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
	if(message.content === "aolo gucci" | "aolo guci"){
		message.channel.send("https://youtu.be/W6wTdLzYFSc")
	}
	
	if(message.content === "ce faci nuca?"){
		message.channel.send("Nuca face contrabanda de supt pula!")
	}
	
	if(message.content === "va place?"){
		message.channel.send("arata bn")
	}
	
	if(message.content === "handicapat"){
		message.channel.send("Nu va puneti cu lau!!!!!")
	}
	
	if(message.content === "skemasampistcordit"){
		message.channel.send(`http://i.imgur.com/DmzFvaA.jpg\nhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt4XMZHGH9zY3M0gAKlkJULpF8QyCwPTBA25_D3FKyWPYuu7X6\nhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9-8tEbuZa8Y-KYKjBEkreNIblJTDSV6Va2QKorVjneYF6wujU\ndata:image/jpeg;base64,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\nhttps://i.ytimg.com/vi/1gYNxtJMhIA/hqdefault.jpg\nhttp://i.imgur.com/DwBrjyh.jpg`)
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

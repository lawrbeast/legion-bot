const Discord = require('discord.js');
const moment = require('moment');
require("moment-duration-format");
const bot = new Discord.Client();

bot.on('guildMemberAdd', function(member) {
    member.guild.channels.find("name", "new-faggs").sendMessage(`Bine ai venit pe server, ${member} tocmai ai devenit un new fag!\n:black_medium_small_square:  Nu avem reguli, dar totuși sperăm să te comporți cât de cât omenește.`);
  });
bot.on("ready", async () => {
    console.log(`Legion Guard este online`);
    bot.user.setPresence({ game: { name: `Prefix: $`, url: 'https://twitch.tv/qlau234', type: 1 } });
});
bot.on("message", message => {
  if(message.channel.type === "dm") return

    const prefix = "$";
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let sender = message.author;
    let args = messageArray.slice(1);
	
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
		.addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
		.addField("Roles:", member.roles.map(roles => `${roles.name}`).join(', '), true)
		.setFooter(`Cerut de ${message.author.username}#${message.author.discriminator}`)
     message.channel.send({embed});
	  return;
    }
	//HEP
	if(cmd === `${prefix}help`){
		let embed = new Discord.RichEmbed()
		.setColor("#fcfdff")
		.setDescription("$userinfo - Iti arata informatiile unui membru\n$avatar [@Legion Guard] - Iti arata avatarul tau sau al unui membru\n$serverinfo - Iti arata informatiile server-ului.")
		.setFooter("Version 0.0.1 - PreAlpha")
		message.author.send({embed})
		return;
	}
	//SERVERINFO
if(cmd === `${prefix}serverinfo`){
   let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
   let day = message.guild.createdAt.getDate()
   let month = 1 + message.guild.createdAt.getMonth()
   let year = message.guild.createdAt.getFullYear()
   let sicon = message.guild.iconURL;
   let embed = new Discord.RichEmbed()
   .setAuthor(message.guild.name, sicon)
   .setFooter(`Server Creat • ${day}.${month}.${year}`)
   .setColor("#7289DA")
   .setThumbnail(sicon)
   .addField("ID", message.guild.id, true)
   .addField("Nume", message.guild.name, true)
   .addField("Owner", message.guild.owner.user.tag, true)
   .addField("Regiune", message.guild.region, true)
   .addField("Canale", message.guild.channels.size, true)
   .addField("Membrii", message.guild.memberCount, true)
   .addField("Umani", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
   .addField("Boti", message.guild.members.filter(m => m.user.bot).size, true)
   .addField("Online", online.size, true)
   .addField("Roluri", message.guild.roles.size, true);
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
	//SPOTIFY
if(cmd === `${prefix}spotify`){
	// First, we need to grab the user, if they are doing it for themselves or mentioning someone.
  let user = message.mentions.users.first() || message.author; // This checks if there is a mention, and takes the first one. Although, if there isn't a mention it uses the message author as a fallback.
 
  // Next, we need to verify that the specified user is listening to spotify.
  if (user.presence.activity !== null && user.presence.activity.type === 'LISTENING' && user.presence.activity.name === 'Spotify' && user.presence.activity.assets !== null) { // This checks all of these if statements, and if they are all true, it runs the following.
   
    // Variables - These are the variables we will be using in the embed
    let trackIMG = `https://i.scdn.co/image/${user.presence.activity.assets.largeImage.slice(8)}`; // This fetches a url image using the largeImage asset after slicing off the first 8 characters.
    let trackURL = `https://open.spotify.com/track/${user.presence.activity.syncID}`; // This grabs the syncID and adds it to the end of a spotify URL.
    let trackName = user.presence.activity.details;
    let trackAuthor = user.presence.activity.state;
    let trackAlbum = user.presence.activity.assets.largeText; // These all hold the info for the song, grabbed from the user's presence.
   
    // Create embed object
    const embed = new Discord.RichEmbed() // This will create the start of the embed, we will now add to it.
      .setAuthor('Spotify Track Info', 'https://cdn.discordapp.com/emojis/408668371039682560.png') // This url will be in the description, it is setting the author & icon field for the embed.
      .setColor(0x1ED760) // This sets the color of the embed
      .setThumbnail(trackIMG) // This sets the thumbnail of the embed, using the variable from before.
      .addField('Song Name', trackName, true) // These are fields, and can be added easily, the true signifies that they can be on the same line.
      .addField('Album', trackAlbum, true)
      .addField('Author', trackAuthor, false) // This signifies only two can be on the line above, the third will be on a new line
      .addField('Listen to Track:', `[\`${trackURL}\`](trackURL)`, false); // This here sets a clickable link, to the trackURL, while still showing the URL in ``.
   
    // Sending Embed
    message.channel.send({embed}); // This sends the formed embed to the channel.
   
    // Now, we can test it.
   
  } else { // Although, if one of those conditions is false it will run this.
   
    message.channel.send('**This user isn\'t listening to Spotify!**'); // This will notify in chat that the specified user isn't listening to Spotify.
   
  }	
}
  });
  
bot.login(process.env.BOT_TOKEN);

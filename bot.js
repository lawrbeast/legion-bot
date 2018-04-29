const Discord = require('discord.js');
const moment = require('moment');
const bot = new Discord.Client();

bot.on('guildMemberAdd', function(member) {
    member.guild.channels.find("name", "new-faggs").sendMessage(`Bine ai venit pe server, ${member} tocmai ai devenit un new fag!\n:black_medium_small_square:  Nu avem reguli, dar totuși sperăm să te comporți cât de cât omenește.`);
  });
bot.on("ready", async () => {
    console.log(`Legion Guard este online`);
    bot.user.setPresence({ stream: { name: 'discord.io/legione', type: 1 } });
});
bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return

    const prefix = "$";
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let sender = message.author;
    let args = messageArray.slice(1);
   
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
    }
  if(cmd === `${prefix}serverinfo`){

        let sicon = message.guild.iconURL;
        const serverembed = new Discord.RichEmbed()
        .setColor("#0d1d38")
        .setThumbnail(sicon)
        .addField("ID:", message.guild.id)
        .addField("Membrii", `[${message.guild.memberCount}]`, true)
        .addField("Roluri:", `[${message.guild.roles.size}]`, true)
        .addField("Emojis:", `[${message.guild.emojis.size}]`)
        .addField("Canale:", `[${message.guild.channels.size}]`, true)
        .addField("Regiune:", message.guild.region, true)
        .addField("Server Owner:", `👑${message.guild.owner}👑`)
        .setFooter(`${message.guild.name}`, message.guild.iconURL)
        .setTitle(`♦${message.guild.name}♦`, message.guild.iconURL);

        return message.channel.send({serverembed});
    }
  });
  
bot.login(process.env.BOT_TOKEN);

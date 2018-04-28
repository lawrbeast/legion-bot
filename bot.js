const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('guildMemberAdd', function(member) {
    member.guild.channels.find("name", "new-faggs").sendMessage(`Bine ai venit pe server, ${member} tocmai ai devenit un new fag!\n:black_medium_small_square:  Nu avem reguli, dar totuși sperăm să te comporți cât de cât omenește.`);
  });

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return

    const prefix = "$";
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let sender = message.author;
    let args = messageArray.slice(1);
    
    //SERVERINFO
    if(cmd === `${prefix}serverinfo`){

        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        .setColor("#0d1d38")
        .setThumbnail(sicon)
        .addField("ID:", message.guild.id)
        .addField("Membrii ", `[${message.guild.memberCount}]`, true)
        .addField("Roluri:", `[${message.guild.roles.size}]`, true)
        .addField("Emojis:", `[${message.guild.emojis.size}]`)
        .addField("Canale:", `[${message.guild.channels.size}]`, true)
        .addField("Regiune:", message.guild.region, true)
        .addField("Server Owner:", `${message.guild.owner}`);

        return message.channel.send(serverembed);
    }
});
  
  bot.login(process.env.BOT_TOKEN);

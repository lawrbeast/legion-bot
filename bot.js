const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('guildMemberAdd', function(member) {
    member.guild.channels.find("name", "new-faggs").sendMessage(`Bine ai venit pe server, ${member} tocmai ai devenit un new fag!\n:black_medium_small_square:  Nu avem reguli, dar totuși sperăm să te comporți cât de cât omenește.`);
  });
bot.on("ready", async () => {
    console.log(`Legion Guard este online`);
    bot.user.setActivity(`discord.io/legione`)
});
  
bot.login(process.env.BOT_TOKEN);

const superagent = require('superagent');
module.exports.run = async (client, message, args) => {

try {
   function clean(text) {
      if (typeof(text) === 'string')
        return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
      else
        return text;
    }
    const bug = args.join(" ")
    if (!bug) return message.channel.send('Please specify a bug!')
    const content = clean(`:flag_al: **${message.author.username}**#${message.author.discriminator} (ID: ${message.author.id}) a raportat un bug:\n\n▪**BUG**: ${bug}\n\n▪**Server**: ${message.guild.name}\n\n▪**ID**: ${message.guild.id}`);
    const id = '498907312593829888';
    new Promise((resolve, reject) => {
      superagent.post(`https://discordapp.com/api/channels/${id}/messages`)
        .set('Authorization', `Bot ${client.token}`).send({ content })
        .end((err, res) => {
          if (err) {
            reject(err);
            message.reply('Am intampinat o problema in timp ce am vrut sa trimit bug-ul raportat de tine. Te rog sa incerci din nou!');
          } else {
            resolve(res);
            message.channel.send(`:white_check_mark: **${message.author.username}**, bug-ul raportat de tine a fost trimis echipei pentru rezolvare. Multumim de ajutor!.`);
          }
        });
    });
}  catch (err) {
console.log(err)
}
}
module.exports.help = {
  name: "reportbug"
  }

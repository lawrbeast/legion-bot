const Discord = require('discord.js')

exports.run = (client, message, args, tools) => {
  let muyeembed = new Discord.RichEmbed()
  .setTitle('Sistem Muye')
  .setDescription('${args[0]} a primit muYe de la ${message.author}')
  .setThumbnail('https://discordapp.com/assets/209381ec0f39a61c1904269ed41c62eb.svg')
  .setFooter('Sistem facut de cel mai developer qLau aka Seful Banilor aka aka.')
message.channel.send({embed:muyeembed})
}
exports.help = {
  name: "muye"
  }

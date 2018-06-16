const Discord = require('discord.js')

exports.run = (client, message, args, tools) => {
  let muyeembed = new Discord.RichEmbed()
  .setTitle('Sistem Muye :middle_finger:')
  .setColor('RANDOM')
  .setDescription(`${args[0]} a primit muYe de la ${message.author}`)
  .setThumbnail('http://www.emoji.co.uk/files/emoji-one/smileys-people-emoji-one/1353-reversed-hand-with-middle-finger-extended.png')
  .setFooter('Sistem facut de cel mai developer qLau aka Seful Banilor aka aka.')
message.channel.send({embed:muyeembed})
}
exports.help = {
  name: "muye"
  }

var fs = require('fs'); //FileSystem
let conf = JSON.parse(fs.readFileSync("./config.json", "utf8")); //Config file

exports.run = (client, message, args, ops) => {

  let fetched = ops.active.get(message.guild.id);
  
  if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send({
    embed: {
      "description": "Denied!",
      "color": 0xff2222,
      "title": "Error"
    }
  }).then(msg => {
    if (conf[message.guild.id].delete == 'true') {
      msg.delete(conf[message.guild.id].deleteTime);
    }
  });

  if (!fetched) return message.channel.send("Nothing is playing! Use `play <url>|<song>` to add song to queue").then(msg => {
    if (conf[message.guild.id].delete == 'true') {
      msg.delete(conf[message.guild.id].deleteTime);
    }
  });
  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send({
    embed: {
      "title": "You should be in same channel with me!",
      "color": 0xff2222
    }
  }).then(msg => {
    if (conf[message.guild.id].delete == 'true') {
      msg.delete(conf[message.guild.id].deleteTime);
    }
  });

  fetched.dispatcher.end();
  let likeemo = client.emojis.get('571107823711289376')
  message.channel.send(likeemo)

  let vc = client.guilds.get(fetched.dispatcher.guildID).me.voiceChannel;
  if (vc) {
    vc.leave();
    ops.active.delete(fetched.dispatcher.guildID);
  }

}

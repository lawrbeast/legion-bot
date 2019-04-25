var fs = require('fs'); //FileSystem
let conf = JSON.parse(fs.readFileSync("./config.json", "utf8")); //Config file

exports.run = (client, message, args, ops) => { //Collecting info about command

  let fetched = ops.active.get(message.guild.id);

  if (!fetched) return message.channel.send("Nu este nicio melodie în lista de așteptare!");
  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("Nu ești în același canal!");

  var userCount = message.member.voiceChannel.members.size;
  var required = Math.ceil(userCount / 2);

  if (!fetched.queue.voteSkips) {
    fetched.queue.voteSkips = [];
  }

  if (fetched.queue.voteSkips.includes(message.member.id)) {
    return message.channel.send({
      embed: {
        "title": "Ai votat deja pentru skip!",
        "description": "Ce a rămas: " + fetched.queue[0].voteSkips.length / required,
        "color": 0xff2222
      }
    });
  }

  fetched.queue.voteSkips.push(message.member.id);
  ops.active.set(message.guild.id, fetched);

  if (fetched.queue.voteSkips.length >= required) {
    message.channel.send({
      embed: {
        "title": "Melodia a fost sarită!",
        "color": 0x22ff22
      }
    }).then(msg => {
      if (conf[message.guild.id].delete == 'true') {
        msg.delete(conf[message.guild.id].deleteTime);
      }
    });
    if (!fetched.queue.length == 0) {
      return fetched.dispatcher.emit('finish');
    } else {
      return fetched.dispatcher.end();
    }
    ops.active.set(message.guild.id, fetched);
  }

  message.channel.send({
    embed: {
      "title": "A fost votat!",
      "description": "Ce a rămas: " + Math.ceil(fetched.queue[0].voteSkips.length / required),
      "color": 0x22ff22
    }
  }).then(msg => {
    if (conf[message.guild.id].delete == 'true') {
      msg.delete(conf[message.guild.id].deleteTime);
    }
  });

}

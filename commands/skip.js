var fs = require('fs'); //FileSystem
let conf = JSON.parse(fs.readFileSync("./config.json", "utf8")); //Config file

exports.run = (client, message, args, ops) => { //Collecting info about command

  let fetched = ops.active.get(message.guild.id); 
  if(!fetched) return message.channel.send(`There is currently nothing playing.`) 
  if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(`We aren\'t in the same channel!`)
  
  ops.active.set(message.guild.id, fetched)
    
    message.channel.send(`Song skipped!`)
    return fetched.dispatcher.end()
}

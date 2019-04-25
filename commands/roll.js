const Discord = module.require("discord.js");
const randomnum = require("unique-random");
const rand = randomnum(1, 6);
const rand1 = randomnum(1, 6);
module.exports.run = async (bot, message, args) => {

    message.channel.send('reload merge boss')
    
}

module.exports.help = {
    name: "roll"
}

const Discord = require('discord.js')
const snekfetch = require('snekfetch')

module.exports.run = async (bot, message, args) => {
    const url = `http://mcapi.us/server/image?ip=85.10.192.217&theme=dark`;
    snekfetch.get(url)
        .then(r => message.channel.send("", { files: [{ attachment: r.body }] }));
}

exports.help = {
    name: "playstatus"
}

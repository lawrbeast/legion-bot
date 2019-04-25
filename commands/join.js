
const Discord = require("discord.js");
var fs = require('fs'); //FileSystem

exports.run = (bot, message, args) => {
  
  if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send({
    embed: {
      "description": "Denied!",
      "color": 0xff2222,
      "title": "Error"
    }
  })  
  const voiceChannel = message.member.voiceChannel;
  if (message.guild.me.voiceChannel) {
    return message.channel.send({
      embed: {
        "title": "Sorry, bot is already in voice channel!",
        "color": 0xff2222
      }
    })
  if (!voiceChannel) {
    return message.channel.send({
      embed: {
        "title": "You need to be in the same channel with me!",
        "color": 0xff2222
      }
    })
  }
  voiceChannel.join();
  message.channel.send({
    embed: {
      "description": "**Joined " + voiceChannel.name + "**",
      "color": 0x22ff22
    }
  })
  }

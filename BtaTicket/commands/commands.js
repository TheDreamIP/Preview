const Discord = require('discord.js');
const botsettings = require('../botsettings.json');

module.exports.run = async (bot, message, args) => {
    const userpfp = message.author.avatarURL()
    const infoembed = new Discord.MessageEmbed()
    .setTitle("BtaTickets-Commands")
    .setDescription("```.new - Opens a ticket.\n.close - closes a ticket.\n.rename - Rename a ticket.\n.eb - Builds an embed for you.\n.uptime - Shows how long BtaTickets has been online for\n.botinfo - Shows information about the bot.\n.commands - shows all commands for the bot.\n\nPrefix: .```")
    .setColor("RANDOM")
    .setFooter(`Requested By ${message.author.tag}`, userpfp)

    message.channel.send(infoembed)
}



module.exports.config = {
    name: "commands",
    description: "Help Command"
}
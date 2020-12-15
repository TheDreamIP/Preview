const Discord = require('discord.js');
const botsettings = require('../botsettings.json');

module.exports.run = async (bot, message, args) => {
    const userpfp = message.author.avatarURL()
    const infoembed = new Discord.MessageEmbed()
    .setTitle("BtaTickets")
    .setDescription("To set up BtaTicket you must make a few things!\n\n**Open a ticket**\nTo open a ticket you do `.new` in any channel!\n\n**Permission Role**\nYou must make a role with the name `Ticket` This role will have permissions to see the ticket. Give this to your staff team so they can view the tickets that gets created.\n\n**Catogory**\nMake a Catogory with the name of `Tickets` Thats where all the tickets will go.\n\n**Logs**\nTo have logs for the tickets and more you must make a channel with the name of `tlog`\n\n**Rename a Ticket**\nTo rename a ticket you must have the Ticket role then you can do `.rename <Name>` then the ticket name will change.\n\n**Close Ticket**\n To close a ticket you must have the Ticket role and type `.close` then you react and it will close!\n\n\n**Commands**\n```.new - Opens a ticket.\n.close - closes a ticket.\n.rename - Rename a ticket.\n.eb - Builds an embed for you.\n.uptime - Shows how long BtaTickets has been online for\n\nPrefix: .```")
    .setColor("RANDOM")
    .setFooter(`Requested By ${message.author.tag}`, userpfp)

    message.channel.send(infoembed)
}



module.exports.config = {
    name: "help",
    description: "Help Command"
}
const Discord = require("discord.js");
const botsettings = require("../botsettings.json");
const fs = require("fs");

module.exports.run = async (bot, message, args, connection) => {
        if(!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You're not in a ticket channel.`).then(msg => msg.delete({timeout: 10000}))

        if(message.member.roles.cache.some(role => role.name === "Ticket")){

        if(!args[0]) return message.channel.send("Please specify a name.");
        let channelNewName = args.slice(0)
        if(channelNewName.startsWith(`-`)) {
            message.channel.setName(`${channelNewName}`).then(newChannel => {
                message.channel.send(`${message.author} renamed the channel to *\`${newChannel.name}\`*`)
            })
        } else {
            message.channel.setName(`ticket-${channelNewName}`).then(newChannel => {
                message.channel.send(`${message.author} renamed the channel to *\`${newChannel.name}\`*`)
            })
        }

                const tlogs = message.guild.channels.cache.find(chan => chan.name === "tlog")
                if (!tlogs) return console.log("This guild dont have a log channel!")
                const eblog = new Discord.MessageEmbed()
                .setTitle("Ticket Renamed")
                .addFields(
                    { name: `Renamed By`, value: `${message.author} - hash ${message.author.tag} - ID ${message.author.id}`},
                    { name: `Old Channel:`, value: `${message.channel.name}`},
                    { name: `New Name:`, value: `<#${message.channel.id}>`},
                    { name: `New Name:`, value: `ticket-${channelNewName}`}
                )
                .setColor("RED")
                .setTimestamp()
                tlogs.send(eblog)
    } else {
        message.delete({timeout: 5000})
        message.reply("You dont have the permissions for this command!\nTo access this command you must have the Ticket Role!").then(msg => msg.delete( { timeout: 10000 } ))
    }
};

module.exports.config = {
    name: "rename",
    description: "Ticket System"
}
const Discord = require("discord.js");
const config = require("../botsettings.json");
const fs = require("fs");
const ms = require("ms");

module.exports.run = async (bot, message, args, connection) => {
        if(!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You're not in a ticket channel.`).then(msg => msg.delete({timeout: 10000}))

        if(message.member.roles.cache.some(role => role.name === "Ticket")){
        message.channel.send(`Are you sure you want to close this ticket?`).then(msg => {
            msg.react('✅').then(() => msg.react('❌'));
    
            const filterE = (reaction, user) => {
                return ['❌', '✅'].includes(reaction.emoji.name) && user.bot == false;
            };
            msg.awaitReactions(filterE, { max: 1, time: ms("20m"), errors: ['time'] }).then(collected => {
                const reaction = collected.first();
                if(reaction.emoji.name === '❌') {
                    return message.channel.send(`Ticket close cancelled.`)
                }
                if(reaction.emoji.name === '✅') {
                    message.channel.send(`This ticket has now been **closed**. || This ticket will delete in 100 seconds`)
                    setTimeout(() => {
                        message.channel.delete();
                    }, 100000);
                    
                    const tlogs = message.guild.channels.cache.find(chan => chan.name === "tlog")
                    if (!tlogs) return console.log(`This guild dont have a log channel!, Server Guild ID: ${message.guild.id} || Server Name: ${message.guild.name} `)
                    const eblog = new Discord.MessageEmbed()
                    .setTitle("Ticket Closed")
                    .addFields(
                        { name: `Closed By`, value: `${message.author} - hash ${message.author.tag} - ID ${message.author.id}`},
                        { name: `Channel Name`, value: `<#${message.channel.id}> || ${message.channel.name}`}
                    )
                    .setColor("RED")
                    .setTimestamp()
                    tlogs.send(eblog)
                }
            })



        })
    } else {
        message.delete()
        message.reply("You dont have the permissions for this command!\nTo access this command you must have the Ticket Role!").then(msg => msg.delete( { timeout: 10000 } ))
    }
    
};

module.exports.config = {
    name: "close",
    description: "Close ticket"
}
const Discord = require('discord.js');
const ms = require('ms');
const botsettings = require('../botsettings.json');

module.exports.run = async (bot, message, args) => {
    let everyone = message.guild.roles.cache.find(role => role.name === "@everyone");
    let ticketperms = message.guild.roles.cache.find(role => role.name === "Ticket");
    const catogory = message.guild.channels.cache.find(c => c.name === 'Tickets' && c.type === 'category');
    let tpermissions = [
        {
            id: message.author.id,
            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL']
        },
        {
            id: everyone.id,
            deny: ['SEND_MESSAGES', 'VIEW_CHANNEL']
        },
        {
            id: ticketperms,
            allow: ['SEND_MESSAGES', 'VIEW_CHANNEL']
        },
    ]

    message.delete( { timeout: 5000 } )
    message.guild.channels.create(`ticket-${message.author.username}`, {
        type: 'text', 
        permissionOverwrites: tpermissions
    }).then(tchannel => {

        tchannel.setParent(catogory, {lockPermissions: false});
        message.reply(`Your ticket have been created! **Ticket:**  ${tchannel}`).then(msg => msg.delete ( {timeout: 20000} ))



            tchannel.send(`${message.author}`)

            let embed = new Discord.MessageEmbed()
                embed.setAuthor(`${message.author.username} Made A Ticket`, message.author.avatarURL())
                embed.setColor("RANDOM")
                embed.setDescription("Thanks for creating a Ticket. A support member will be with you soon.\nIf you would like to close the ticket ask a support member to close it for you.\nIt can be closed by the support member by them doing `.close`")
                embed.setTimestamp()
                embed.setFooter(`${message.guild.name}`);
                tchannel.send(embed)

                const tlogs = message.guild.channels.cache.find(chan => chan.name === "tlog")
                if (!tlogs) return console.log("This guild dont have a log channel!")
                const eblog = new Discord.MessageEmbed()
                .setTitle("Ticket Created")
                .addFields(
                    { name: `Created By`, value: `${message.author} - hash ${message.author.tag} - ID ${message.author.id}`},
                    { name: `Channel:`, value: `<#${tchannel.id}> || ${tchannel.name}`}
                )
                .setColor("RED")
                .setTimestamp()
                tlogs.send(eblog)
            });
}



module.exports.config = {
    name: "new",
    description: "Ticket System"
}
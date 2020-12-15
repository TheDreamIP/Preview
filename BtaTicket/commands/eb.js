const ms = require('ms')
const Discord = require('discord.js');
const botsetting = require('../botsettings.json');

module.exports.run = async (bot, message, args) => {
    message.delete( {timeout: 2000} )
            if(message.member.roles.cache.some(r => r.name === "Ticket")){
            if("What will be your title" != "") {
                const filter = m => m.author.id === message.author.id;

                message.channel.send("What will your title be?").then(daMessage => {
                    message.channel.awaitMessages(filter, {max: 1, time: ms('1h'), errors: ['time']}).then(async (ans) => {
                        ans1 = ans.first().content;
                        let msg3 = await message.channel.messages.fetch(ans.first().id)
                        daMessage.delete();
                        msg3.delete();
                    }).then(msg2 => {
                        if("Type your descrition" != "") {
                            message.channel.send("What will be your descrition of the embed?").then(daMessage => {
                                message.channel.awaitMessages(filter, {max: 1, time: ms('1h'), errors: ['time']}).then(async (ans) => {
                                    ans2 = ans.first().content;
                                    let msg3 = await message.channel.messages.fetch(ans.first().id)
                                    daMessage.delete();
                                    msg3.delete();
                                }).then(msg2 => {
                if("Type your color" != "") {
                    message.channel.send("Type your color. This must be a hex color | https://htmlcolorcodes.com").then(daMessage => {
                        message.channel.awaitMessages(filter, {max: 1, time: ms('1h'), errors: ['time']}).then(async (ans) => {
                            ans3 = ans.first().content;
                            let msg3 = await message.channel.messages.fetch(ans.first().id)
                            daMessage.delete();
                            msg3.delete();
                        }).then(msg2 => {
                            if("What will be your footer?" != "") {
                                message.channel.send("What will be your footer?").then(daMessage => {
                                    message.channel.awaitMessages(filter, {max: 1, time: ms('1h'), errors: ['time']}).then(async (ans) => {
                                        ans4 = ans.first().content;
                                        let msg3 = await message.channel.messages.fetch(ans.first().id)
                                        daMessage.delete();
                                        msg3.delete();
                                    }).then(msg2 => {
                                                sendTheAnswers()
                                            }).catch(console.error);
                                        }).catch(console.error);
                } else {sendTheAnswers()}
            }).catch(console.error);
        }).catch(console.error);
                        } else {sendTheAnswers()}
                                }).catch(console.error);
                            }).catch(console.error);
                        } else {sendTheAnswers()}
                    }).catch(console.error);
                }).catch(console.error);
            } else {sendTheAnswers()}
            function sendTheAnswers() {

                let embed = new Discord.MessageEmbed()
                    embed.setTitle(ans1)
                    embed.setAuthor(`Embed By ${message.author.username}`, message.author.avatarURL({dynamic: true}))
                    embed.setColor(ans3)
                    embed.setDescription(ans2)
                    embed.setTimestamp()
                    embed.setFooter(ans4);
                message.channel.send(embed)


                const tlogs = message.guild.channels.cache.find(chan => chan.name === "tlog")
                if (!tlogs) return console.log("This guild dont have a log channel!")
                const eblog = new Discord.MessageEmbed()
                .setTitle("Embed Made")
                .addFields(
                    { name: `Made By`, value: `${message.author} - hash ${message.author.tag} - ID ${message.author.id}`},
                    { name: `Title:`, value: `${ans1}`},
                    { name: `Description:`, value: `${ans2}`},
                    { name: `Color:`, value: `${ans3}`},
                    { name: `Footer:`, value: `${ans4}`},
                )
                .setColor("RED")
                .setTimestamp()
                tlogs.send(eblog)
            }  
        } else {
            message.delete({timeout: 5000})
            message.reply("You dont have the permissions for this command!\nTo access this command you must have the Ticket Role!").then(msg => msg.delete( { timeout: 10000 } ))
            }
}

module.exports.config = {
    name: "eb",
    description: "EmbedBuild"
}
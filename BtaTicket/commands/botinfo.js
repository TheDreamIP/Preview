const Discord = require('discord.js');
const botsetting = require('../botsettings.json');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("BtaTickets Information")
    .addFields(
        { name: `Information`, value: `**Servers:** ${bot.guilds.cache.size}\n**Bot Name:** <@!788152552323285003>\n**Developer:** <@!633974612069187585>`}
    )
    .setColor("RANDOM")
    .setFooter(message.author.tag, `${(message.author.avatarURL())}`)
        .setTimestamp()
message.channel.send(embed)
}

module.exports.config = {
    name: "botinfo",
    description: "Information about the bot"
}
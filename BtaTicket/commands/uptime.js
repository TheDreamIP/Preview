const Discord = require("discord.js");
const botsettings = require("../botsettings.json");
const fs = require("fs");
const ms = require("ms");

module.exports.run = async (bot, message, args, connection) => {
    message.channel.send(`I've been online for \`${ms(bot.uptime, { long: true })}\``)
};

module.exports.config = {
    name: "uptime",
    description: "bot uptime."
}
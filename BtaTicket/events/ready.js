const Discord = require("discord.js")

module.exports = (client) => {
    client.user.setPresence({
        status: 'online',
    })
    
    let statuses = [
        `${client.channels.cache.size} Channels`,
        `${client.guilds.cache.size} Guilds`,
        `.help`
    ];
    
    setInterval(function () {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {
            type: "WATCHING"
        });
    }, 7000);

console.log(`online!`)
}
const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

function doSlap() {
    var rand = ['https://c.tenor.com/PeJyQRCSHHkAAAAC/saki-saki-mukai-naoya.gif', 'https://c.tenor.com/E3OW-MYYum0AAAAC/no-angry.gif', 'https://c.tenor.com/1-1M4PZpYcMAAAAd/tsuki-tsuki-ga.gif', 'https://c.tenor.com/Ws6Dm1ZW_vMAAAAC/girl-slap.gif', 'https://c.tenor.com/pHCT4ynbGIUAAAAC/anime-girl.gif', 'https://c.tenor.com/ra17G61QRQQAAAAC/tapa-slap.gif', 'https://c.tenor.com/JlfoyfxPbeEAAAAC/seiya-shinchou-yuusha.gif'];

    return rand[Math.floor(Math.random()*rand.length)];
}

module.exports = new Command({
    name: "slap",
    description: "slap slap slap",
    aliases: [],
    permission: "SEND_MESSAGES",

    async run(message, args, client) {
        const embed = new Discord.MessageEmbed();
        const target = message.mentions.members.first();

        embed
            .setTitle("Command: m?slap")
            .setDescription("Please mention a user to slap.")
            .setFooter("©️ Miyasu Development")
            .setColor("RED")
        if (!target) return message.reply({ embeds: [embed] });


        embed
            .setTitle("Command: m?slap")
            .setDescription("You cannot slap yourself!")
            .setFooter("©️ Miyasu Development")
            .setColor("RED")
        if (target.user === message.member.user) return message.reply({ embeds: [embed] });

        embed
            .setTitle(message.author.username+" slapped "+target.user.username)
            .setImage(doSlap({dynamic: true }))
            .setDescription('')
            .setFooter("©️ Miyasu Development")
            .setColor("#FF8E29")
        message.channel.send({ embeds: [embed] });
    }
});
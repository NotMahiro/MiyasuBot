const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

function doKiss() {
    var rand = ['https://c.tenor.com/PxksEwlnAAgAAAAC/jlhk-anime.gif', 'https://c.tenor.com/wDYWzpOTKgQAAAAC/anime-kiss.gif', 'https://c.tenor.com/9vycr5sUYBMAAAAC/eden-of-the-east-anime.gif', 'https://c.tenor.com/etSTc3aWspcAAAAC/yuri-kiss.gif', 'https://c.tenor.com/ErAPuiWY46QAAAAC/kiss-anime.gif', 'https://c.tenor.com/4ofp_xCUBxcAAAAC/eden-of-the-east-akira-takizawa.gif', 'https://c.tenor.com/F02Ep3b2jJgAAAAC/cute-kawai.gif'];

    return rand[Math.floor(Math.random()*rand.length)];
}

module.exports = new Command({
    name: "kiss",
    description: "kiss kiss kiss",
    aliases: [],
    permission: "SEND_MESSAGES",

    async run(message, args, client) {
        const embed = new Discord.MessageEmbed();
        const target = message.mentions.members.first();

        embed
            .setTitle("Command: m?kiss")
            .setDescription("Please mention a user to kiss.")
            .setFooter("©️ Miyasu Development")
            .setColor("RED");
        if (!target) return message.reply({ embeds: [embed] });


        embed
            .setTitle("Command: m?kiss")
            .setDescription("You cannot kiss yourself!")
            .setFooter("©️ Miyasu Development")
            .setColor("RED");
        if (target.user === message.member.user) return message.reply({ embeds: [embed] });

        embed
            .setTitle(message.author.username+" kissed "+target.user.username)
            .setImage(doKiss({dynamic: true }))
            .setDescription('')
            .setFooter("©️ Miyasu Development")
            .setColor("#FF8E29");
        message.channel.send({ embeds: [embed] });
    }
});
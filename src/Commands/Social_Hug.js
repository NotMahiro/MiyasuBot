const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

function doHug() {
    var rand = ['https://c.tenor.com/9e1aE_xBLCsAAAAC/anime-hug.gif', 'https://c.tenor.com/ItpTQW2UKPYAAAAC/cuddle-hug.gif', 'https://c.tenor.com/2bWwi8DhDsAAAAAC/hugs-and-love.gif', 'https://c.tenor.com/xgVPw2QK5n8AAAAC/sakura-quest-anime.gif', 'https://c.tenor.com/odw9yfkRU2oAAAAC/anime-hug.gif', 'https://c.tenor.com/UhcyGsGpLNIAAAAC/hug-anime.gif', 'https://c.tenor.com/0vl21YIsGvgAAAAC/hug-anime.gif'];

    return rand[Math.floor(Math.random()*rand.length)];
}

module.exports = new Command({
    name: "hug",
    description: "hug hug hug",
    aliases: [],
    permission: "SEND_MESSAGES",

    async run(message, args, client) {
        const embed = new Discord.MessageEmbed();
        const target = message.mentions.members.first();

        embed
            .setTitle("Command: m?hug")
            .setDescription("Please mention a user to hug.")
            .setFooter("©️ Miyasu Development")
            .setColor("RED")
        if (!target) return message.reply({ embeds: [embed] });


        embed
            .setTitle("Command: m?hug")
            .setDescription("You cannot hug yourself!")
            .setFooter("©️ Miyasu Development")
            .setColor("RED")
        if (target.user === message.member.user) return message.reply({ embeds: [embed] });

        embed
            .setTitle(message.author.username+" hugged "+target.user.username)
            .setImage(doHug({dynamic: true }))
            .setDescription('')
            .setFooter("©️ Miyasu Development")
            .setColor("#FF8E29")
        message.channel.send({ embeds: [embed] });
    }
});
const Command = require("../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
	name: "avatar",
	description: "send user avatar",
	aliases: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();
        const mention = message.mentions.members.first() || message.author;

        embed
            .setTitle(message.author.username+"'s Avatar:")
            .setImage(message.author.displayAvatarURL({ size: 2048, dynamic: true }))
            .setFooter("©️ Miyasu Development")
            .setColor("#FF8E29");
        if (!args[1]) return message.reply({ embeds: [embed] });

        embed
            .setTitle(mention.user.username+"'s Avatar:")
            .setImage(mention.user.displayAvatarURL({ size: 2048, dynamic: true }))
            .setFooter("©️ Miyasu Development")
            .setColor("#FF8E29");
        message.reply({ embeds: [embed] });
	}
});

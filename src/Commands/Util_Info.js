const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "info",
	description: "Shows info about the bot",
	aliases: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();

		embed
			.setTitle("Bot Info:")
			.setURL("https://discord.gg/VVnuztY")
			.setFooter("©️ Miyasu Development")
			.setDescription(
				"A bot made by **Mahiro**"
			)
			.setColor("#FF8E29")
			.setThumbnail("https://cdn.discordapp.com/attachments/472951233297121302/889100415680008192/60-1.jpg")
			.setImage(
				"https://cdn.discordapp.com/attachments/472951233297121302/889100394213539860/60-2.jpg"
			)
			.addFields(
				{
					name: "Bot Version",
					value: "4.0.0",
					inline: true
				},
				{
					name: "Bot Name",
					value: client.user.username,
					inline: true
				}
			);

		message.reply({ embeds: [embed] });
	}
});

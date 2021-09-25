const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "invite",
	description: "Invite the bot",
	aliases: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();

		embed
			.setTitle("Invite Bot:")
			.setDescription(
				"[Bot Invite Link](https://discord.com/oauth2/authorize?client_id=887648533006651432&scope=bot&permissions=8)"
			)
			.setFooter("©️ Miyasu Development")
			.setColor("#FF8E29");

		message.reply({ embeds: [embed] });
	}
});

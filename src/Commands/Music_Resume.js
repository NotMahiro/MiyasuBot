const Command = require("../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
	name: "resume",
	description: "resume the music",
	aliases: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
        let guildQueue = client.player.getQueue(message.guild.id);
		const embed = new Discord.MessageEmbed();
		const embedfail = new Discord.MessageEmbed();
		try {
			guildQueue.setPaused(false);
			embed
				.setTitle(`Resumed Queue`)
				.setFooter("©️ Miyasu Development")
				.setColor("#FF8E29")
			message.reply({ embeds: [embed] });
		} catch (error) {
			embedfail
				.setTitle(`Command: m?resume`)
				.setDescription("There is nothing to resume.")
				.setFooter("©️ Miyasu Development")
				.setColor("RED")
			message.reply({ embeds: [embedfail] });	
		}
	}
});

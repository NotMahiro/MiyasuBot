const Command = require("../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
	name: "pause",
	description: "pause the music",
	aliases: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
        let guildQueue = client.player.getQueue(message.guild.id);
		const embed = new Discord.MessageEmbed();
		try {
        	guildQueue.setPaused(true);
			embed
				.setTitle(`Paused Queue`)
				.setFooter("©️ Miyasu Development")
				.setColor("#FF8E29")
			message.reply({ embeds: [embed] });
		} catch (error) {
			embedfail
				.setTitle(`Command: m?pause`)
				.setDescription("There is nothing to pause.")
				.setFooter("©️ Miyasu Development")
				.setColor("RED")
			message.reply({ embeds: [embedfail] });	
		}
	}
});

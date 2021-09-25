const Command = require("../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
	name: "shuffle",
	description: "shuffle the music",
	aliases: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
        let guildQueue = client.player.getQueue(message.guild.id);
		const embed = new Discord.MessageEmbed();
		const embedfail = new Discord.MessageEmbed();
		try {
            guildQueue.shuffle();
			embed
				.setTitle(`Queue Shuffled`)
				.setFooter("©️ Miyasu Development")
				.setColor("#FF8E29")
			message.reply({ embeds: [embed] });
		} catch (error) {
			embedfail
				.setTitle(`Command: m?shuffle`)
				.setDescription("There is nothing to shuffle.")
				.setFooter("©️ Miyasu Development")
				.setColor("RED")
			message.reply({ embeds: [embedfail] });	
		}
	}
});

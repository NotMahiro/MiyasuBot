const Command = require("../Structures/Command.js");
const Discord = require("discord.js");
const { RepeatMode } = require('discord-music-player');

module.exports = new Command({
	name: "loop",
	description: "loop one",
	aliases: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
        let guildQueue = client.player.getQueue(message.guild.id);
		const embed = new Discord.MessageEmbed();
		try{
        	guildQueue.setRepeatMode(RepeatMode.SONG);
			
			embed
				.setTitle(`Loop set to single`)
				.setFooter("©️ Miyasu Development")
				.setColor("#FF8E29")
			message.reply({ embeds: [embed] });
		} catch (error) {
			embedfail
				.setTitle(`Command: m?loop`)
				.setDescription("Fail to loop as there is no queue.")
				.setFooter("©️ Miyasu Development")
				.setColor("RED")
			message.reply({ embeds: [embedfail] });
		}
	}
});

const Command = require("../Structures/Command.js");
const Discord = require("discord.js");
const { RepeatMode } = require('discord-music-player');

module.exports = new Command({
	name: "loopqueue",
	description: "loop entire queue",
	aliases: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
        let guildQueue = client.player.getQueue(message.guild.id);
		const embed = new Discord.MessageEmbed();
		const embedfail = new Discord.MessageEmbed();
		try{
            guildQueue.setRepeatMode(RepeatMode.QUEUE);
			embed
				.setTitle(`Loop set to queue`)
				.setFooter("©️ Miyasu Development")
				.setColor("#FF8E29")
			message.reply({ embeds: [embed] });
		} catch (error) {
			embedfail
				.setTitle(`Command: m?loopqueue`)
				.setDescription("Fail to loop queue as there is no queue.")
				.setFooter("©️ Miyasu Development")
				.setColor("RED")
			message.reply({ embeds: [embedfail] });
		}
	}
});

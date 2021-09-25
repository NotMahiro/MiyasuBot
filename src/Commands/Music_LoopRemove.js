const Command = require("../Structures/Command.js");
const Discord = require("discord.js");
const { RepeatMode } = require('discord-music-player');

module.exports = new Command({
	name: "loopremove",
	description: "remove loop",
	aliases: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();
		const embedfail = new Discord.MessageEmbed();
        let guildQueue = client.player.getQueue(message.guild.id);
		try{
            guildQueue.setRepeatMode(RepeatMode.DISABLED);
			embed
				.setTitle(`Loop removed`)
				.setFooter("©️ Miyasu Development")
				.setColor("#FF8E29")
			message.reply({ embeds: [embed] });
		} catch (error) {
			embedfail
				.setTitle(`Command: m?loopremove`)
				.setDescription("Fail to remove loop as there is no queue.")
				.setFooter("©️ Miyasu Development")
				.setColor("RED")
			message.reply({ embeds: [embedfail] });	
		}
	}
});

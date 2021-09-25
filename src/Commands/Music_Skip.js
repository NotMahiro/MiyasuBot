const Command = require("../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
	name: "skip",
	description: "skip",
	aliases: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
                let guildQueue = client.player.getQueue(message.guild.id);
				const embed = new Discord.MessageEmbed();
				const embedfail = new Discord.MessageEmbed();
                try {
					guildQueue.skip();
					embed
						.setTitle(`Song Skipped`)
						.setDescription(`Skipped: **${guildQueue.nowPlaying}**`)
						.setFooter("©️ Miyasu Development")
						.setColor("#FF8E29")
					message.reply({ embeds: [embed] });
				} catch (error) {
					embedfail
						.setTitle("Command: m?skip")
						.setDescription("There is nothing to skip.")
						.setFooter("©️ Miyasu Development")
						.setColor("RED")
					message.reply({ embeds: [embedfail] });
				}
	}
});

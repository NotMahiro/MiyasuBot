const Command = require("../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
	name: "disconnect",
	description: "disconnect the bot",
	aliases: ["dc"],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
            let guildQueue = client.player.getQueue(message.guild.id);
				const embed = new Discord.MessageEmbed();
				const embedfail = new Discord.MessageEmbed();
				try {
					guildQueue.stop();
					embed
						.setTitle(`Disconnected from Voice Channel`)
						.setFooter("©️ Miyasu Development")
						.setColor("#FF8E29")
					message.reply({ embeds: [embed] });
				} catch (error) {
					embedfail
						.setTitle(`Command: m?disconnect`)
						.setDescription("Nothing to disconnect from.")
						.setFooter("©️ Miyasu Development")
						.setColor("RED")
					message.reply({ embeds: [embedfail] });
				}
	}
});

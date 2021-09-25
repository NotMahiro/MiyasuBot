const Command = require("../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
	name: "remove",
	description: "remove the music",
	aliases: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		const amount = args[1];
		const amountParsed = parseInt(amount);

        let guildQueue = client.player.getQueue(message.guild.id);
        const msg = guildQueue.remove(amountParsed);

		const embed = new Discord.MessageEmbed();

		embed
			.setTitle(`Removed ${msg}`)
			.setFooter("©️ Miyasu Development")
			.setColor("#FF8E29")
		message.reply({ embeds: [embed] });
	}
});

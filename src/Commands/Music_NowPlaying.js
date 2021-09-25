const Command = require("../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
	name: "nowplaying",
	description: "show playing now",
	aliases: ["current", "np"],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
        let guildQueue = client.player.getQueue(message.guild.id);
		const ProgressBar = guildQueue.createProgressBar();
		const embed = new Discord.MessageEmbed();
		const embedfail = new Discord.MessageEmbed();
		try{
			embed
				.setTitle("Now Playing:")
				.setDescription(`${guildQueue.nowPlaying}\n[`+ProgressBar.times+`]`)
				.setFooter("©️ Miyasu Development")
				.setColor("#FF8E29")
			message.reply({ embeds: [embed] });
		} catch (error) {
			embedfail
				.setTitle(`Command: m?nowplaying`)
				.setDescription("Currently playing nothing.")
				.setFooter("©️ Miyasu Development")
				.setColor("RED")
			message.reply({ embeds: [embedfail] });	
		}
	}
});

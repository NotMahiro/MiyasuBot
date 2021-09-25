const Command = require("../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
	name: "queue",
	description: "loop entire queue",
	aliases: ["q"],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
        let guildQueue = client.player.getQueue(message.guild.id);
		const embedfail = new Discord.MessageEmbed()
			if (guildQueue === undefined) {
				embedfail
					.setTitle("Command: m?queue")
					.setDescription("Currently no queue.")
					.setColor("RED")
					.setFooter("©️ Miyasu Development")
				message.reply({ embeds: [embedfail] })
		  } else {
			const songs = guildQueue?.songs
			const embeded = new Discord.MessageEmbed()
			.setColor('#FF8E29')
			.setTitle(`Queue for ${message?.guild}`)
			.setFooter("©️ Miyasu Development")
			.addFields(
				{name: 'Now Playing:', value: `[${guildQueue?.nowPlaying?.name}](${guildQueue?.nowPlaying?.url}) by [${guildQueue?.nowPlaying?.author}] | ${guildQueue?.nowPlaying?.duration} `, },
				(songs || guildQueue?.songs?.length !== 1) && {name: '\u200B', value: '**Up Next:**'}   
			)
			if(songs) {
			  songs.map((song, idx) => {
				if(song.isFirst || song.isLive || guildQueue?.songs?.length === 1) {
				  return false;
				} else {
				  embeded.addField('\u200B', `${idx}: [${song.name}](${song.url}) | ${song.duration} `)
				}
			  })
			} 
			message.reply({embeds: [embeded]})
		  }
	}
});

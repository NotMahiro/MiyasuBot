const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "help",
	description: "Shows command list",
	aliases: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();

		embed
			.setAuthor(
				"Command List",
				message.author.avatarURL({ dynamic: true })
			)
			.setDescription("Here is the list of commands! <:MVMeguminHi:781879396427366440>")
			.setFooter("ÂŠī¸ Miyasu Development")
			.addFields(
				{
					name: "đą **Fun**",
					value: "`8ball` `coinflip` `snake` `tictactoe` `rockpaperscissors`\n`meme`",
					inline: false
				},
				{
					name: "đ­ **Social**",
					value: "`avatar` `say` `hug` `kiss` `slap`",
					inline: false
				},
				{
					name: "đą **Images**",
					value: "`bunny` `cat` `dog` `duck` `fox` `koala` `lizard` `panda` `shiba`",
					inline: false
				},
				{
					name: "đĩ **Musics**",
					value: "`play` `playlist` `remove` `disconnect` `queue` `nowplaying`\n`pause` `resume` `loop` `loopqueue` `loopremove` `shuffle`",
					inline: false
				},
				{
					name: "đ¨ **Moderation**",
					value: "`ban` `kick` `purge`",
					inline: false
				},
				{
					name: "đ§ **Utility**",
					value: "`help` `info` `invite` `ping` `weather`",
					inline: false
				}
			)
			.setColor("#FF8E29")

		message.reply({ embeds: [embed] });
	}
});

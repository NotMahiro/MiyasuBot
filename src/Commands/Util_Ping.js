const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
    name: "ping",
    description: "Shows the ping of the bot!",
    aliases: [],
    permission: "SEND_MESSAGES",

    async run(message, args, client) {
        const embed = new Discord.MessageEmbed();

		embed
            .setTitle("Ping:")
            .setDescription(`${client.ws.ping} ms`)
            .setFooter("©️ Miyasu Development")
			.setColor("#FF8E29")
			.setTimestamp()
		message.reply({ embeds: [embed] });
    }
});
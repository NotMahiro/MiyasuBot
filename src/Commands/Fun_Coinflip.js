const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

function doTheFuni8ball() {
    var rand = ['heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','heads', 'tails','middle'];

    return rand[Math.floor(Math.random()*rand.length)];
}

module.exports = new Command({
    name: "coinflip",
    description: "flip the coin",
    aliases: [],
    permission: "SEND_MESSAGES",

    async run(message, args, client) {
        const embed = new Discord.MessageEmbed();

		embed
            .setTitle("Coinflip")
            .setDescription(`It landed on ` + doTheFuni8ball())
            .setFooter("©️ Miyasu Development")
			.setColor("#FF8E29")
		message.reply({ embeds: [embed] });
    }
});
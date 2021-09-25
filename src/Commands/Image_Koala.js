const Command = require("../Structures/Command.js");
const animals = require('random-animals-api'); 
const Discord = require("discord.js");

module.exports = new Command({
	name: "koala",
	description: "send koala images",
    aliases: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
        const embed = new Discord.MessageEmbed();
        
        message.channel.sendTyping();

        animals.koala()
            .then(url =>  {
                embed
                    .setTitle("Random Koala")
                    .setImage(url)
                    .setFooter("©️ Miyasu Development")
                    .setColor("#FF8E29");
                message.reply({ embeds: [embed] })
            })
	}
});

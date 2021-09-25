const Command = require("../Structures/Command.js");
const animals = require('random-animals-api'); 
const Discord = require("discord.js");

module.exports = new Command({
	name: "dog",
	description: "send dog images",
    aliases: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
        const embed = new Discord.MessageEmbed();
        
        message.channel.sendTyping();

        animals.dog()
            .then(url =>  {
                embed
                    .setTitle("Random Dog")
                    .setImage(url)
                    .setFooter("©️ Miyasu Development")
                    .setColor("#FF8E29");
                message.reply({ embeds: [embed] })
            })
	}
});

const Command = require("../Structures/Command.js");
const animals = require('random-animals-api'); 
const Discord = require("discord.js");

module.exports = new Command({
	name: "fox",
	description: "send fox images",
    aliases: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
        const embed = new Discord.MessageEmbed();
        
        message.channel.sendTyping();

        animals.fox()
            .then(url =>  {
                embed
                    .setTitle("Random Fox")
                    .setImage(url)
                    .setFooter("©️ Miyasu Development")
                    .setColor("#FF8E29");
                message.reply({ embeds: [embed] })
            })
	}
});

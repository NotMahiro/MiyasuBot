const Command = require("../Structures/Command.js");
const animals = require('random-animals-api'); 
const Discord = require("discord.js");

module.exports = new Command({
	name: "bunny",
	description: "send bunny images",
    aliases: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
        const embed = new Discord.MessageEmbed();
        
        message.channel.sendTyping();

        animals.bunny()
            .then(url =>  {
                embed
                    .setTitle("Random bunny")
                    .setImage(url)
                    .setFooter("©️ Miyasu Development")
                    .setColor("#FF8E29");
                message.reply({ embeds: [embed] })
            })
	}
});

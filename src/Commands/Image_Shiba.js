const Command = require("../Structures/Command.js");
const animals = require('random-animals-api'); 
const Discord = require("discord.js");

module.exports = new Command({
	name: "shiba",
	description: "send shiba images",
    aliases: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
        const embed = new Discord.MessageEmbed();
        
        message.channel.sendTyping();

        animals.shiba()
            .then(url =>  {
                embed
                    .setTitle("Random Shiba")
                    .setImage(url)
                    .setFooter("©️ Miyasu Development")
                    .setColor("#FF8E29");
                message.reply({ embeds: [embed] })
            })
	}
});

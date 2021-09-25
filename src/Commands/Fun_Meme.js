const Command = require("../Structures/Command.js");
const memes = require("random-memes");
const Discord = require("discord.js");

module.exports = new Command({
	name: "meme",
	description: "send a random meme",
    aliases: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
        memes.fromReddit("en").then((meme)=>{
            const embed = new Discord.MessageEmbed();
            embed
                .setTitle(meme.caption)
                .setImage(meme.image)
                .setFooter("©️ Miyasu Development")
                .setColor("#FF8E29");
            message.reply({ embeds: [embed] });
            })
	}
});

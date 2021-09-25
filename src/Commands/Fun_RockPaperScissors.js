const Command = require("../Structures/Command.js");
const Discord = require("discord.js");
const rps = require('discord-rock-paper-scissor');
const _rps = require("discord-rock-paper-scissor");

module.exports = new Command({
	name: "rockpaperscissors",
	description: "play rockpaperscissors",
    aliases: ["rockpaperscissor", "rps"],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
        let player2 = message.mentions.members.first()?.user;
        const embed = new Discord.MessageEmbed();
        embed
            .setTitle("Command: m?rokcpaperscissors")
            .setDescription("Please mention a user to play with.")
            .setColor("RED")
        if (!player2) return message.reply({ embeds: [embed] });

        const rps = new _rps({
            choiceReply: "You chose {move}",
            endTitle: "Game Result",
            readyMessage: "You have been request to join a game of Rock Paper Scissors!\nCheck your dm!",
            drawEndTitle: "Game ended with a draw!",
            choiceTitle: "Rock Paper Scissor",
            choiceDescription: "Choose your move by clickling on buttons",
            drawEndDescription: "{player1} chose : {player1move}\n{player2} chose : {player2move}",
            endDescription: "A game of Rock Paper Scissors:\n[Winner 👑] {winner}'s move : {winnermove}\n[Loser 💀] {looser}'s move : {loosermove}"
        });
    
        /**
        * @param {Discord.Message} message
        * @param {Discord.User} player2
        */
        rps.duo(message,player2);


	}
});

const Command = require("../Structures/Command.js");
const Discord = require("discord.js");
const ttt = require('discord.tictactoegame');

module.exports = new Command({
	name: "tictactoe",
	description: "play tictactoe",
    aliases: ["ttt"],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
        const embed = new Discord.MessageEmbed();
        let player2 = message.mentions.members.first()?.user;

        embed
            .setTitle("Command: m?tictactoe")
            .setDescription("Please mention a user to play with.")
            .setColor("RED")
        if (!player2) return message.reply({ embeds: [embed] });

        const _ttt = new ttt({
            drawEndDescription: "Tic Tac Toe Game",
            drawEndTitle: "Game ended with a draw!",
            endDescription: "A Game of Tic Tac Toe\n[Winner 👑]: **{winner}**\n[Loser 💀]: **{looser}**",
            endTitle: "Game Result",
            forceEndDescription: "Game ended forcfully by {user}",
            forceEndTitle: "Game was forcefully ended",
            requestTitle: "You have been request to join a game of Tic Tac Toe!",
            startTitle: "TicTacToe™",
            timeEndDescription: "{user} didn't reply in time.",
            timeEndTitle: "Timeout!",
            autoDelete: 1600,
        });
        
        /**
         * @param {Discord.Message} message
         * @param {Discord.User} player2
         */
        _ttt.duo(message,player2);
	}
});

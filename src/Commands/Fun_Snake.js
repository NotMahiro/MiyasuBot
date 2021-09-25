const Command = require("../Structures/Command.js");
const Discord = require("discord.js");
const { Snake } = require('discord-gamecord')

module.exports = new Command({
	name: "snake",
	description: "play the snake game",
  aliases: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
        new Snake({
            message: message,
            embed: {
              title: "Snake™ | Miyasu Development",
              color: '#FF8E29',
              OverTitle: "Game Over",
            },
            snake: { head: '🟢', body: '🟩', tail: '🟢' },
            emojis: {
              board: '⬛', 
              food: '🍎',
              up: '⬆️', 
              right: '➡️',
              down: '⬇️',
              left: '⬅️',
            },
          }).startGame()
	}
});

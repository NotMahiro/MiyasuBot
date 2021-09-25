const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
    name: "listening",
    description: "Put a activity on bot",
    aliases: [],
    permission: "SEND_MESSAGES",

    async run(message, args, client) {
        const SayMessage = args.slice(1).join(" ");

        if(message.author.id !== '429605988530782208') return;
            client.user.setActivity(SayMessage, { type: 'LISTENING' })
    }
})

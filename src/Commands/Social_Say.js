const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
    name: "say",
    description: "Make the bot say something!",
    aliases: [],
    permission: "SEND_MESSAGES",

    async run(message, args, client) {
        const embed = new Discord.MessageEmbed();

        embed
            .setTitle("Command: ?say")
            .setDescription("Provide a word to say in the say command\nExample: m?say Hello")
            .setColor("RED")
        if (!args[1]) return message.reply({ embeds: [embed] });

        
        const SayMessage = args.slice(1).join(" ");
        message.delete();
        message.channel.send(Discord.Util.removeMentions(SayMessage))
    }
})

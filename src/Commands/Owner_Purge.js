const Discord = require("discord.js")

const Command = require("../Structures/Command")

module.exports = new Command({
    name: "ownerpurge",
    description: "Clear the channel",
    aliases: [],
    permission: "SEND_MESSAGES",

    async run(message, args, client) {
		const amount = args[1];
        const embed = new Discord.MessageEmbed
        if(message.author.id !== '429605988530782208') return;

            embed
                .setTitle("Command: m?purge")
                .setDescription(`${amount == undefined ? "Nothing" : amount} is not a valid number!`)
                .setFooter("©️ Miyasu Development")
                .setColor("RED")
            if (!amount || isNaN(amount)) return message.reply({ embeds: [embed] });

            const amountParsed = parseInt(amount);

            embed
                .setTitle("Command: m?purge")
                .setDescription("You cannot clear more than 100 messages!")
                .setFooter("©️ Miyasu Development")
                .setColor("RED")
            if (amountParsed > 100) return message.reply({ embeds: [embed] });

            message.channel.bulkDelete(amountParsed+1);

            embed
                .setTitle("Messages Purged!")
                .setDescription(`**Cleared ${amountParsed} messages!**`)
                .setFooter("©️ Miyasu Development")
                .setColor("#FF8E29")
            const msg = await message.channel.send({ embeds: [embed] });

            setTimeout(() => msg.delete(), 5000);
    }
})

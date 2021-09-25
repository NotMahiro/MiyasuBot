const Discord = require("discord.js");
const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "ownerban",
    description: "Ban a user!",
    aliases: [],
    permission: "SEND_MESSAGES",

    async run(message, args, client) {
        const embed = new Discord.MessageEmbed();
        
        const { member, mentions } = message;
        const target = message.mentions.members.first();
        const reason = args.slice(2).join(' ');

        if(message.author.id !== '429605988530782208') return;
            embed
                .setTitle("Command: m?ban")
                .setDescription("Please mention a user to ban.")
                .setFooter("©️ Miyasu Development")
                .setColor("RED")
            if (!target) return message.reply({ embeds: [embed] });

            if (message.mentions.members.first())
                embed
                    .setTitle("Command: m?ban")
                    .setDescription("Provide a reason for the ban.")
                    .setFooter("©️ Miyasu Development")
                    .setColor("RED")
                if (!args[2]) return message.reply({ embeds: [embed] });

                embed
                    .setTitle("Command: m?ban")
                    .setDescription("Cannot ban user because user is a admin.")
                    .setFooter("©️ Miyasu Development")
                    .setColor("RED")
                if (target.permissions.has("BAN_MEMBERS")) return message.reply({ embeds: [embed] });

                embed
                    .setTitle("User banned!")
                    .setDescription(`<@${target.id}> has been banned.\nReason: **${reason}**`)
                    .setFooter("©️ Miyasu Development")
                    .setColor("#FF8E29")
                if (target) {
                const targetMember = message.guild.members.cache.get(target.id);
                targetMember.ban();
                message.channel.send({ embeds: [embed] });
                }
    }
})
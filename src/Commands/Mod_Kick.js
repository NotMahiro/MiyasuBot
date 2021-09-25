const Discord = require("discord.js");
const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "kick",
    description: "kick a user!",
    aliases: [],
    permission: "KICK_MEMBERS",

    async run(message, args, client) {
        const embed = new Discord.MessageEmbed();
        
        const { member, mentions } = message;
        const target = message.mentions.members.first();
        const reason = args.slice(2).join(' ');

        embed
            .setTitle("Command: m?kick")
            .setDescription("Please mention a user to kick.")
            .setFooter("©️ Miyasu Development")
            .setColor("RED")
        if (!target) return message.reply({ embeds: [embed] });

        if (message.mentions.members.first())
            embed
                .setTitle("Command: m?kick")
                .setDescription("Provide a reason for the kick.")
                .setFooter("©️ Miyasu Development")
                .setColor("RED")
            if (!args[2]) return message.reply({ embeds: [embed] });

            embed
                .setTitle("Command: m?kick")
                .setDescription("Cannot kick user because user is a admin.")
                .setFooter("©️ Miyasu Development")
                .setColor("RED")
            if (target.permissions.has("KICK_MEMBERS")) return message.reply({ embeds: [embed] });

            embed
                .setTitle("User kicked!")
                .setDescription(`<@${target.id}> has been kicked.\nReason: **${reason}**`)
                .setFooter("©️ Miyasu Development")
                .setColor("#FF8E29")
            if (target) {
            const targetMember = message.guild.members.cache.get(target.id);
            targetMember.kick();
            message.channel.send({ embeds: [embed] });
            }
    }
})
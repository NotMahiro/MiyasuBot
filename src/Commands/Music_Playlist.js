const Command = require("../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
	name: "playlist",
	description: "play a playlist",
	aliases: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
                let guildQueue = client.player.getQueue(message.guild.id);
                const embed = new Discord.MessageEmbed();
                const embedfail = new Discord.MessageEmbed();
                message.channel.sendTyping();
                try{
                        let queue = client.player.createQueue(message.guild.id);
                        await queue.join(message.member.voice.channel);
                        let song = await queue.playlist(args.slice(1).join(' ')).catch(_ => {
                        if(!guildQueue)
                                queue.stop();
                        });
                        embed
                                .setTitle("Playlist Added")
                                .setDescription(`Playlist was added to the queue.`)
                                .setFooter("©️ Miyasu Development")
                                .setColor("#FF8E29")
                        message.reply({ embeds: [embed] });
                } catch (error) {
                        embedfail
                                .setTitle("Command: m?playlist")
                                .setDescription("Playlist fail to add")
                                .setFooter("©️ Miyasu Development")
                                .setColor("RED")
                        message.reply({ embeds: [embedfail] });
                }
	}
});

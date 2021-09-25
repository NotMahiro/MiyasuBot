const Command = require("../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
	name: "play",
	description: "play a music",
	aliases: ["p"],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
                message.channel.sendTyping();
                let guildQueue = client.player.getQueue(message.guild.id);      
                const embed = new Discord.MessageEmbed();
                const embedfail = new Discord.MessageEmbed();
                try{
                        let queue = client.player.createQueue(message.guild.id);
                        await queue.join(message.member.voice.channel);
                        let song = await queue.play(args.slice(1).join(' ')).catch(_ => {
                        if(!guildQueue)
                                queue.stop();
                        });
                        embed
                                .setTitle("Song Added")
                                .setDescription(`**[${song.name} | [${song.author}]](${song.url})** was added to the queue.\n[${song.duration}]`)
                                .setThumbnail(song.thumbnail)
                                .setFooter("©️ Miyasu Development")
                                .setColor("#FF8E29")
                        message.reply({ embeds: [embed] });
                } catch (error) {
                        embedfail
                                .setTitle("Command: m?play")
                                .setDescription("Song fail to add.")
                                .setFooter("©️ Miyasu Development")
                                .setColor("RED")
                        message.reply({ embeds: [embedfail] });
                }
	}
});


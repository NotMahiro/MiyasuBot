const Command = require("../Structures/Command.js");
const weather = require('weather-api-data');
const Discord = require("discord.js");

module.exports = new Command({
    name: "weather",
    description: "Shows the weather",
    aliases: [],
    permission: "SEND_MESSAGES",

    async run(message, args, client) {
        const embed = new Discord.MessageEmbed();
        const embedfail = new Discord.MessageEmbed();

        message.channel.sendTyping();
        weather.loction(args.slice(1).join(" ")).then(weather => {
            try {
                embed
                    .setTitle("Weather for "+`${weather.location.country}, ${weather.location.name}`)
                    .setThumbnail("https:"+`${weather.current.condition.icon}`)
                    .setFooter("©️ Miyasu Development")
                    .setTimestamp()
                    .setDescription(`Condition: ${weather.current.condition.text}`)
                    .addFields(
                        {
                            name: "**Temperature**",
                            value: `${weather.current.temp_f}°F/${weather.current.temp_c}°C`,
                            inline: false
                        },
                        {
                            name: "**Humidity**",
                            value: `${weather.current.humidity}%`,
                            inline: false
                        },
                        {
                            name: "**Local Time**",
                            value: `${weather.location.localtime}`,
                            inline: false
                        }
                    )
                    .setColor("#FF8E29");
                message.reply({ embeds: [embed] })
            } catch (error) {
                embedfail
                    .setTitle("Command: m?weather")
                    .setDescription("No Location Was Found")
                    .setColor("RED")
                    .setFooter("©️ Miyasu Development")
                message.reply({ embeds: [embedfail] })
		    }
        })
    }
});
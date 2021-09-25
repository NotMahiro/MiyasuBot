const Command = require("../Structures/Command.js");
const Discord = require("discord.js")
const paginationEmbed = require('discordjs-button-pagination');

module.exports = new Command({
    name: "guildlist",
    description: "shows guilds that your bot are in",
    aliases: [],
    permission: "SEND_MESSAGES",
    async run(message, args, client) {
        if(message.author.id !== '429605988530782208') return message.reply('Owner only cmd.');
            let Guilds = []
            let embed = {}
            let embedslist = []
            client.guilds.cache.forEach((guild) => {
              Guilds.push(`\`${guild.id}\`│**${guild.name}** \`[${guild.memberCount}]\``)})
            var i,j, temporary, chunk = 15; 
//                                      ^^ change this number according to number of lines in embed you want

              for (i = 0,j = Guilds.length; i < j; i += chunk) {
                  temporary = Guilds.slice(i, i + chunk);
                  embed[`${i/15}`] = new Discord.MessageEmbed()
                    .setAuthor(`Guild list for ${client.user.username}`, client.user.displayAvatarURL())
                    .setDescription(`Overall Guilds [${Guilds.length}]\n${temporary.join(`\n`)}`)
                    .setFooter("©️ Miyasu Development")
                    .setColor('#FF8E29')
              }
              for (let i = 0; i < (Object.keys(embed).length); i++) {
                embedslist.push(embed[i])
              }
              const button1 = new Discord.MessageButton()
                .setCustomId('previousbtn')
                .setEmoji('◀️')
                .setStyle('SECONDARY');
           
              const button2 = new Discord.MessageButton()
                .setCustomId('nextbtn')
                .setEmoji('▶️')
                .setStyle('SECONDARY');
              buttonList = [
                button1,
                button2
            ]
        if (embedslist.length<1) return message.channel.send('Bot in no guild')
              paginationEmbed(message, embedslist, buttonList);
          
  }
})
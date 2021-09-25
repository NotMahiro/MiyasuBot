const Event = require("../Structures/Event.js");
const Discord = require("discord.js");

module.exports = new Event("messageCreate", (client, message) => {
	if (message.author.bot) return;

	if (!message.content.startsWith(client.prefix)) return;

	const args = message.content.substring(client.prefix.length).split(/ +/);

	const command = client.commands.find(cmd => cmd.name == args[0].toLowerCase()) || client.aliases.get(args[0].toLowerCase());

	const embed = new Discord.MessageEmbed();

	embed
		.setTitle("Fail to run!")
		.setDescription(`${args[0]} is not a valid command!`)
		.setColor("RED")
	if (!command) return message.reply({ embeds: [embed] });

	const permission = message.member.permissions.has(command.permission, true);

	embed
		.setTitle("Fail to run!")
		.setDescription(
				`You do not have permission to run this command!\nThis command requires \`${command.permission}\`.`
			)
		.setColor("RED")
	if (!permission) return message.reply({ embeds: [embed] });

	command.run(message, args, client);
});
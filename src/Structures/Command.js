const Discord = require("discord.js");
const Client = require("./Client");

/**
 * 
 * @param {Discord.Message | Discord.Interaction} message 
 * @param {string[]} args 
 * @param {Client} client 
 */
function RunFunction(message, args, client) {}

class Command {
    /**
     * @typedef {{name: string, description: string, aliases: [], permission: Discord.PermissionString, run: RunFunction}} CommandOptions
     * @param {CommandOptions} options 
     */
    constructor(options) {
        this.name = options.name;
        this.description = options.description;
        this.aliases = options.aliases;
        this.permission = options.permission;
        this.run = options.run;
    }
}

module.exports = Command;
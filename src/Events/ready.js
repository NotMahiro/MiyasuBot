const Event = require("../Structures/Event.js");

module.exports = new Event("ready", client => {
	console.log("Miyasu is online");
});
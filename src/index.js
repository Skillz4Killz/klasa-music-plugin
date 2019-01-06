const { Client: { plugin } } = require('klasa');

// Add the guild schemas
require(`./lib/schemas/guilds`);

module.exports = {
	Client: require('./lib/Client.js'),
	MusicGuild: require('./lib/extentions/Guild'),
	Song: require('./lib/structures/Song'),
	Driver: require('./lib/structures/Driver'),
	DriverStore: require('./lib/structures/DriverStore'),
	[plugin]: require('./lib/Client')[plugin]
};

const { Client: { plugin } } = require('klasa');

module.exports = {
	Client: require('./lib/Client.js'),
	MusicGuild: require('./lib/extentions/Guild'),
	Song: require('./lib/structures/Song'),
	Driver: require('./lib/structures/Driver'),
	DriverStore: require('./lib/structures/DriverStore'),
	[plugin]: require('./lib/Client')[plugin]
};

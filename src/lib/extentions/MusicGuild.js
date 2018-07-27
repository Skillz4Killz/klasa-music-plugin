const { Structures } = require('discord.js');

module.exports = Structures.extend('Guild', Guild => {
	class MusicGuild extends Guild {

		constructor(...args) {
			super(...args);

			this.player = new Player();
		}

	}

	return MusicGuild;
});


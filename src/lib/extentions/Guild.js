const { Structures } = require('discord.js');
const Player = require('./structures/Player');

module.exports = Structures.extend('Guild', Guild => {
	class MusicGuild extends Guild {

		constructor(...args) {
			super(...args);
			this.player = new Player();
		}

	}
	return MusicGuild;
});

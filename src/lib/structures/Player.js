const Client = require('../Client');

class Player {

	constructor(client, options = {}) {
		this.client = client;
		this.queue = [];
		this.currentlyPlaying = null;
		this.driver = options.driver || this.client.drivers.default;
	}

	async play(channel, options = {}) {
		const song = this.queue.shift();

		if (!song) throw new Error('Track is empty.');

		this.currentlyPlaying = song;
		return this.driver.play(channel, song, options);
	}

	async add(url, options = {}) {
		const song = await this.driver.resolve(url, options);
		return this.queue.push(song);
	}

	voteSkip(song, member) {
		const shouldSkip = Client.defaultVotingMethod(this.currentlyPlaying, member, this.currentlyPlaying.votes);

		if (shouldSkip) {
			return this.play(member.voiceChannel);
		} else { return false; }
	}

}

module.exports = Player;

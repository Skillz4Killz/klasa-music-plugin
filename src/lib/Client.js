const { Client, util: { mergeDefault } } = require('klasa');
const DriverStore = require('../lib/structures/DriverStore');
const { OPTIONS } = require('../lib/util/constants');

class MusicClient extends Client {

	constructor(config) {
		super(config);
		this.constructor[Client.plugin].call(this);
	}

	static [Client.plugin]() {

		mergeDefault(OPTIONS, this.options);

		this.drivers = new DriverStore(this);

		this.registerStore(this.drivers);
	}

	static defaultVotingMethod(song, member, members) {
		if(!member.voiceChannel) return false;
		return (member.voiceChannel.members.size - members.length) >= member.voiceChannel.members.filter(_member => !_member.user.bot).size / 2;
	}

}

module.exports = MusicClient;


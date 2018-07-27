const { Client, Util: { mergeDefault } } = require('klasa');

class MusicClient extends Client {

	constructor(config) {
		super(config);
		this.constructor[Client.plugin].call(this);
	}

	static [Client.plugin]() {
		mergeDefault();
		// add this later
	}

	static defaultVotingMethod(song, member, members) {
		if(!member.voiceChannel) return false;
		return (member.voiceChannel.members.size - members.length) > member.voiceChannel.members.size / 2;
	}

}

module.exports = MusicClient;


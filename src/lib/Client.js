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

}

module.exports = MusicClient;


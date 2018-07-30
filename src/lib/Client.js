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

}

module.exports = MusicClient;


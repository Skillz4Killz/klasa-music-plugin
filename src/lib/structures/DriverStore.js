const { Store } = require('klasa');
const Driver = require('./Driver');
const YoutubeDriver = require('../../../bot/drivers/Youtube');

class DriverStore extends Store {

	constructor(client) {
		super(client, 'drivers', Driver);
	}

}

module.exports = DriverStore;

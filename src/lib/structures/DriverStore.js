const { Store } = require('klasa');
const Driver = require('./Driver');

class DriverStore extends Store {

	constructor(client) {
		super(client, 'drivers', Driver);
	}

}

module.exports = DriverStore;

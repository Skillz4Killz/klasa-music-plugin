const { Store } = require('klasa');
const Driver = require('./Driver');
const { join } = require('path');

class DriverStore extends Store {

	constructor(client) {
		super(client, 'drivers', Driver);
		this.registerCoreDirectory(join(__dirname, '../'));
	}

}

module.exports = DriverStore;

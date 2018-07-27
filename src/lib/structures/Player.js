class Player {

	constructor(client) {
		this.client = client;
		this.queue = [];
		this.currentlyPlaying = {};
		this.driver = client.drivers.default;
	}

}

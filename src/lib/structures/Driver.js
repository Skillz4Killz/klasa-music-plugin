const { Piece } = require('klasa');

class Driver extends Piece {

	play() {
		throw new Error(`The play method has not been implemented by ${this.type}:${this.name}.`);
	}

	async getInfo() {
		throw new Error(`The getInfo method has not been implemented by ${this.type}:${this.name}.`);
	}

}

module.exports = Driver;

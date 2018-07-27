const Driver = require('../../src/lib/structures/Driver');
const Song = require('../../src/lib/structures/Song');
const ytdl = require('ytdl-core');

class YoutubeDriver extends Driver {

	constructor(...args) {
		super(...args);
	}

	play(channel, song) {
		console.log(song);
		return channel.join()
			.then(connection => {
				connection.play(ytdl(song.url));
			})
			.catch(error => error);
	}

	async resolve(url) {
		const data = await ytdl.getInfo(url);
		return new Song(data.title, url, data);
	}

}

module.exports = YoutubeDriver;

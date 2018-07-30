const Driver = require('../structures/Driver');
const Song = require('../structures/Song');
const ytdl = require('ytdl-core');

class YoutubeDriver extends Driver {

	play(channel, song) {
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

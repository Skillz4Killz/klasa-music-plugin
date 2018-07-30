exports.OPTIONS = {
	pieceDefaults: { drivers: { enabled: true } },

	defaultSortingMethod: (member, members) => {
		if (!member.voiceChannel) return false;
		const noBots = member.voiceChannel.members.filter(_member => !_member.user.bot).size;
		return members.length >= noBots / 2;
	}
}
;

const displayChat = (params) => {
	let chatBot = document.getElementById('chatBot'),
		chatBotMain = document.getElementById('chatBotMain');

	if (params === 0) {
		console.log('minimize');
		chatBot.style.display = 'flex';
		chatBotMain.style.display = 'none';
	} else {
		console.log('maximize');
		chatBot.style.display = 'none';
		chatBotMain.style.display = 'flex';
	}
};

export default displayChat;

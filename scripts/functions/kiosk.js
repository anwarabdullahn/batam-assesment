const kiosk = (params) => {
	let botContainer = document.getElementById('botContainer'),
		chatPhone = document.getElementById('chatBot-phone'),
		chatName = document.getElementById('chatBot-name');

	console.log('params', params);

	params.vertical === 'top' ? (botContainer.style.top = '10px') : (botContainer.style.bottom = '10px');
	params.horizontal === 'right' ? (botContainer.style.right = '10px') : (botContainer.style.left = '10px');

	chatPhone.value = params.phone;
	chatName.value = params.name;
};

export default kiosk;

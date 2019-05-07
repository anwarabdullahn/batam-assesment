import botContainer from './views/chatBotContainer.js';
import chatBot from './views/chatBot.js';
import chatBotMain from './views/chatBotMain.js';
import doSubmit from './functions/doSubmit.js';
import displayChat from './functions/displayChat.js';
import kiosk from './functions/kiosk.js';

document.addEventListener('DOMContentLoaded', () => {
	let body = document.getElementsByTagName('body')[0],
		error = false;

	body.append(botContainer);
	botContainer.append(chatBot);
	botContainer.append(chatBotMain);

	const closeBtn = document.getElementById('close'),
		chatBotForm = document.getElementById('chatBot-form'),
		chatPhone = document.getElementById('chatBot-phone'),
		chatContent = document.getElementById('chatContent'),
		thankContentSubmit = document.getElementById('thankContentSubmit'),
		thankContent = document.getElementById('thankContent'),
		widgetConf = document.getElementById('widgetConf'),
		vertical = document.getElementById('vertical'),
		horizontal = document.getElementById('horizontal'),
		name = document.getElementById('name'),
		phone = document.getElementById('phone');

	chatPhone.addEventListener('change', (e) =>
		fetch(
			`http://apilayer.net/api/validate?access_key=246ba16960b3b21c1d7dacd71a04f584&number=${e.target
				.value}&country_code=ID&format=1`
		)
			.then((response) => response.json())
			.then((json) => {
				if (!json.valid) {
					let h3 = document.createElement('h3');
					h3.innerHTML = 'nganu';
					error = true;
					e.target.style.color = 'red';
					e.target.style.borderStyle = 'solid';
					e.target.style.borderWidth = '2px';
					e.target.style.borderColor = 'red';
				} else {
					error = false;
					e.target.style.color = 'green';
					e.target.style.borderStyle = 'solid';
					e.target.style.borderWidth = '2px';
					e.target.style.borderColor = 'green';
				}
			})
	);

	chatBotForm.addEventListener('submit', (e) => {
		e.preventDefault();
		let inputName = document.getElementById('chatBot-name');
		!error && doSubmit(inputName.value);
	});

	widgetConf.addEventListener('submit', (e) => {
		e.preventDefault();

		console.log(vertical.value);
		console.log(horizontal.value);
		if (!vertical.value === 'top' || !vertical.value === 'bottom' || vertical.value == '')
			return alert('Invalid Vertical Value');

		if (!horizontal.value === 'left' || !horizontal.value === 'right' || horizontal.value == '')
			return alert('Invalid Horizontal Value');

		kiosk({
			vertical: vertical.value,
			horizontal: horizontal.value,
			phone: phone.value,
			name: name.value
		});
	});

	closeBtn.addEventListener('click', (e) => {
		console.log('asdasdas');
		displayChat(0);
	});

	chatBot.addEventListener('click', (e) => {
		console.log('asdasdas');
		displayChat(1);
	});

	thankContentSubmit.addEventListener('click', (e) => {
		chatContent.style.display = 'flex';
		thankContent.style.display = 'none';
	});

	// vertical value must be top or bottom
	// horizontal value must be right or left
	kiosk({
		vertical: 'bottom',
		horizontal: 'right',
		name: '',
		phone: '',
		email: 0
	});
});

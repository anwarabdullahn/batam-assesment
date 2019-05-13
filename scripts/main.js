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

	// vertical value must be top or bottom
	// horizontal value must be right or left
	kiosk({
		vertical: 'bottom',
		horizontal: 'right',
		name: '',
		phone: '',
		email: 0
	});

	const closeBtn = document.getElementById('close'),
		chatBotForm = document.getElementById('chatBot-form'),
		chatPhone = document.getElementById('chatBot-phone'),
		chatContent = document.getElementById('chatContent'),
		thankContentSubmit = document.getElementById('thankContentSubmit'),
		thankContent = document.getElementById('thankContent'),
		btnTop = document.getElementById('btnTop'),
		btnLeft = document.getElementById('btnLeft'),
		btnRight = document.getElementById('btnRight'),
		btnBottom = document.getElementById('btnBottom');

	btnTop.addEventListener('click', () => kiosk({ vertical: 'top' }));
	btnLeft.addEventListener('click', () => kiosk({ horizontal: 'left' }));
	btnRight.addEventListener('click', () => kiosk({ horizontal: 'right' }));
	btnBottom.addEventListener('click', () => kiosk({ vertical: 'bottom' }));

	chatPhone.addEventListener('change', (e) =>
		fetch(
			`http://apilayer.net/api/validate?access_key=246ba16960b3b21c1d7dacd71a04f584&number=${e.target
				.value}&country_code=ID&format=1`
		)
			.then((response) => response.json())
			.then((json) => {
				if (!json.valid) {
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

	closeBtn.addEventListener('click', (e) => displayChat(0));

	chatBot.addEventListener('click', (e) => displayChat(1));

	thankContentSubmit.addEventListener('click', (e) => {
		chatContent.style.display = 'flex';
		thankContent.style.display = 'none';
	});
});

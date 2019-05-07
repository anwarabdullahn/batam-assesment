document.addEventListener('DOMContentLoaded', () => {
	const chatBot = document.createElement('div'),
		botContainer = document.getElementById('forBot'),
		chatBotMain = document.createElement('div');

	const displayChat = (params) => {
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

	const doSubmit = (params) => {
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify({
				title: params,
				body: 'bar',
				userId: 1
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8'
			}
		})
			.then((response) => response.json())
			.then((json) => alert(`You will receive a call soon ${json.title}`));
	};

	chatBot.className = 'chatBot';
	chatBot.style.position = 'fixed';
	chatBot.style.display = 'none';
	chatBot.style.width = '400px';
	chatBot.style.height = '110px';
	chatBot.style.zIndex = '3';
	chatBot.style.bottom = '10px';
	chatBot.style.right = '20px';
	chatBot.style.backgroundImage = "url('../assets/mini.png')";
	chatBot.style.objectFit = 'fill';
	chatBot.style.cursor = 'pointer';
	chatBot.style.transition = 'all 0.3s ease';

	chatBotMain.className = 'chatBot-main';
	chatBotMain.innerHTML = `<div class="chatBot-main">
								<span id="close" class="close">x</span>
								<h3>DO YOU WANT A CALLBACK ?</h3>
								<span>Please give us your details and we will get back to you.</span>
								<form id="chatBot-form">
									<select class="form" id="chatBot-select">
										<option value="I'm Interested in Content">I'm Interested in Content</option>
										<option value="I'm Interested in Design">I'm Interested in Design</option>
									</select>
									<input class="form" id="chatBot-email" type="text" placeholder="email">
									<button id="chatBot-submit" type="submit" class="chatBot-main-submit">Call Now</button>
								</form>
							</div>`;

	botContainer.append(chatBot);
	botContainer.append(chatBotMain);

	const closeBtn = document.getElementById('close'),
		chatBotForm = document.getElementById('chatBot-form');

	let inputSelected = document.getElementById('chatBot-select'),
		inputEmail = document.getElementById('chatBot-email');

	chatBotForm.addEventListener('submit', (e) => {
		e.preventDefault();
		console.log('inputSelected', inputSelected.value.toLowerCase());
		console.log('inputEmail', inputEmail.value.toLowerCase());
		inputEmail.value.toLowerCase() === '' ? alert('Email cant be empty') : doSubmit(inputEmail.value.toLowerCase());
	});

	closeBtn.addEventListener('click', (e) => {
		displayChat(0);
	});

	chatBot.addEventListener('click', (e) => {
		displayChat(1);
	});
});

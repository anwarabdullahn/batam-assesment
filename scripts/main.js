document.addEventListener('DOMContentLoaded', () => {
	let chatBot = document.createElement('div'),
		botContainer = document.getElementById('forBot'),
		chatBotMain = document.createElement('div'),
		error = false;

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
			.then((json) => {
				alert(`You will receive a call soon ${json.title}`);
				window.location = '/end.html';
			});
	};

	const kiosk = (params) => {
		botContainer.style.position = 'fixed';
		botContainer.style.display = 'flex';
		botContainer.style.width = '400px';
		botContainer.style.zIndex = '3';

		// botContainer.innerHTML = `
		//                         <h3> name : ${params.name}</h3>
		//                         <h4> phone : ${params.phone}</h4>
		//                     `;

		params.vertical === 'top' ? (botContainer.style.top = '10px') : (botContainer.style.bottom = '10px');
		params.horizontal === 'right' ? (botContainer.style.right = '10px') : (botContainer.style.left = '10px');
	};

	chatBot.className = 'chatBot';
	chatBot.style.position = 'fixed';
	chatBot.style.display = 'none';
	chatBot.style.width = '400px';
	chatBot.style.height = '90px';
	chatBot.style.zIndex = '3';
	chatBot.style.backgroundImage = "url('../assets/mini.png')";
	chatBot.style.backgroundPositionY = '-15px';
	chatBot.style.objectFit = 'fill';
	chatBot.style.cursor = 'pointer';
	chatBot.style.transition = 'all 0.3s ease';

	chatBotMain.className = 'chatBot-main';
	chatBotMain.innerHTML = ` <span id="close" class="close">x</span>
								<h3>DO YOU WANT A CALLBACK ?</h3>
								<span>Please give us your details and we will get back to you.</span>
								<form id="chatBot-form">
									<select class="form" id="chatBot-select">
										<option value="I'm Interested in Content">I'm Interested in Content</option>
										<option value="I'm Interested in Design">I'm Interested in Design</option>
									</select>
									<input class="form" id="chatBot-email" type="hidden" placeholder="email">
									<input class="form" id="chatBot-phone" type="text" placeholder="phone">
									<input class="form" id="chatBot-name" type="text" placeholder="name">
									<button id="chatBot-submit" type="submit" class="chatBot-main-submit">Call Now</button>
								</form>
							`;

	// vertical value must be top or bottom
	// horizontal value must be right or left
	kiosk({
		vertical: 'bottom',
		horizontal: 'right',
		name: '',
		phone: '',
		email: 0
	});

	botContainer.append(chatBot);
	botContainer.append(chatBotMain);

	const closeBtn = document.getElementById('close'),
		chatBotForm = document.getElementById('chatBot-form'),
		chatPhone = document.getElementById('chatBot-phone');

	chatPhone.addEventListener('change', (e) =>
		fetch(
			`http://apilayer.net/api/validate?access_key=246ba16960b3b21c1d7dacd71a04f584&number=${e.target
				.value}&country_code=ID&format=1`
		)
			.then((response) => response.json())
			.then((json) => {
				if (!json.valid) {
					error = true;
					alert('Phone InValid');
				} else {
					error = false;
				}
			})
	);

	chatBotForm.addEventListener('submit', (e) => {
		e.preventDefault();
		let inputName = document.getElementById('chatBot-name');
		if (error) {
			alert('Phone InValid');
		} else {
			inputName.value.toLowerCase() === '' ? alert('Name cant be empty') : doSubmit(inputName.value);
		}
	});

	closeBtn.addEventListener('click', (e) => {
		displayChat(0);
	});

	chatBot.addEventListener('click', (e) => {
		displayChat(1);
	});
});

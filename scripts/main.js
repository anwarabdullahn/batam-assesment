document.addEventListener('DOMContentLoaded', () => {
	let body = document.getElementsByTagName('body')[0],
		botContainer = document.createElement('div'),
		chatBot = document.createElement('div'),
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
				chatContent.style.display = 'none';
				thankContent.style.display = 'flex';
			});
	};

	const kiosk = (params) => {
		params.vertical === 'top' ? (botContainer.style.top = '10px') : (botContainer.style.bottom = '10px');
		params.horizontal === 'right' ? (botContainer.style.right = '10px') : (botContainer.style.left = '10px');
	};

	botContainer.style.position = 'fixed';
	botContainer.style.display = 'flex';
	botContainer.style.width = '400px';
	botContainer.style.zIndex = '3';
	botContainer.style.bottom = '10px';
	botContainer.style.right = '10px';

	chatBot.className = 'chatBot';
	chatBot.style.display = 'flex';
	chatBot.style.width = '400px';
	chatBot.style.height = '90px';
	chatBot.style.zIndex = '3';
	chatBot.style.backgroundImage = "url('../assets/mini.png')";
	chatBot.style.backgroundPositionY = '-15px';
	chatBot.style.objectFit = 'fill';
	chatBot.style.cursor = 'pointer';
	chatBot.style.transition = 'all 0.3s ease';
	chatBotMain.className = 'chatBot-main';
	chatBotMain.innerHTML = `<span id="close" class="close">x</span>
								<div id='chatContent' style="flex-direction: column">
									<h3>DO YOU WANT A CALLBACK ?</h3>
									<span>Please give us your details and we will get back to you.</span>
									<form id="chatBot-form">
										<select class="form" id="chatBot-select">
											<option value="I'm Interested in Content">I'm Interested in Content</option>
											<option value="I'm Interested in Design">I'm Interested in Design</option>
										</select>
										<input class="form" id="chatBot-email" type="hidden" placeholder="email">
										<input class="form" id="chatBot-phone" type="text" placeholder="phone" required>
										<input class="form" id="chatBot-name" type="text" placeholder="name" required>
										<button id="chatBot-submit" type="submit" class="chatBot-main-submit">Call Now</button>
									</form>
								</div>
								<div id="thankContent" style="display: none; flex-direction: column">
									<h3>Thanks You for Your Submit</h3>
									<button id="thankContentSubmit" type="submit" class="chatBot-main-submit">Get a Callback</button>
								</div>
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

	body.append(botContainer);
	botContainer.append(chatBot);
	botContainer.append(chatBotMain);

	const closeBtn = document.getElementById('close'),
		chatBotForm = document.getElementById('chatBot-form'),
		chatPhone = document.getElementById('chatBot-phone'),
		chatName = document.getElementById('chatBot-name'),
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
		console.log('nganu');
		console.log(vertical.value);
		console.log('vertical', vertical);
		kiosk({
			vertical: vertical.option[vertical.selectedIndex].value,
			horizontal: horizontal.option[horizontal.selectedIndex].value
		});
		chatPhone.value = phone.value;
		chatName.value = name.value;
	});

	closeBtn.addEventListener('click', (e) => {
		displayChat(0);
	});

	chatBot.addEventListener('click', (e) => {
		displayChat(1);
	});

	thankContentSubmit.addEventListener('click', (e) => {
		chatContent.style.display = 'flex';
		thankContent.style.display = 'none';
	});
});

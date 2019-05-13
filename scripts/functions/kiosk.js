const kiosk = (params) => {
	let botContainer = document.getElementById('botContainer');

	console.log('params', params);

	if (params.vertical === 'top') {
		botContainer.style.top = '10px';
		botContainer.style.bottom = null;
	} else if (params.vertical === 'bottom') {
		botContainer.style.bottom = '10px';
		botContainer.style.top = null;
	}

	if (params.horizontal === 'right') {
		botContainer.style.right = '10px';
		botContainer.style.left = null;
	} else if (params.horizontal === 'left') {
		botContainer.style.left = '10px';
		botContainer.style.right = null;
	}

	console.log(botContainer);
};

export default kiosk;

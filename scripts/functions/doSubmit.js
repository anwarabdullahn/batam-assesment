const doSubmit = (params) => {
	let chatContent = document.getElementById('chatContent'),
		thankContent = document.getElementById('thankContent');

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

export default doSubmit;

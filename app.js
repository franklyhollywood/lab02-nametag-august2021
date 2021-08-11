const nameEl = document.getElementById('name');
const inputEl = document.getElementById('input');
const buttonEl = document.getElementById('button');

buttonEl.addEventListener('click', () => {
	const inputEL = document.getElementById('input');
	nameEl.textContent = inputEl.value;
});

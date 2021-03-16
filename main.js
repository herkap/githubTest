let button = document.getElementById('knappFun');
function runFun() {
	document.body.style.backgroundColor = 'red';
	document.body.innerHTML = '';
	document.body.innerHTML = '<h1>TAPER DU TRYKET. DU TAPER!</h1>';

	let lyd = new Audio('Audio/punch.mp3');
	lyd.play();
}

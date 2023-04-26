var screen = document.getElementById("result");

function addToScreen(value) {
	screen.innerHTML += value;
}

function clearScreen() {
	screen.innerHTML = "0";
}

function backspace() {
	screen.innerHTML = screen.innerHTML.slice(0, -1);
	if (screen.innerHTML === "") {
		screen.innerHTML = "0";
	}
}

function calculate() {
	screen.innerHTML = eval(screen.innerHTML);
}

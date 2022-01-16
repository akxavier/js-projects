let buffer = "0";
let runningTotal = 0;
let prevOperator = null;
const screen = document.querySelector(".screen");

function buttonClick(value) {
	if ( isNaN( parseInt(value) ) )
		handleSymbol(value);
	else
		handleNumber(value);
}

function handleNumber(value) {
	if (buffer === "0") {
		buffer = value;
	}
	else {
		buffer += value;
	}

	screen.innerText = buffer;
}

function handleSymbol(value) {
	if (value === "C") {
		runningTotal = 0;
		buffer = "0";
		prevOperator = null;
	}

	else if (value === '←') {
		if (buffer.length === 1) {
			buffer = "0";
		}

		else {
			buffer = buffer.substring(0, buffer.length - 1);
		}

		screen.innerText = buffer;
		return;
	}

	else if (prevOperator === null) {
		if (value === "=") {
			return;
		}

		prevOperator = value;
		runningTotal = parseInt(buffer);
		buffer = "0";
	}

	else {
		switch (prevOperator) {
			case '+': runningTotal += parseInt(buffer);
				break;

			case '-': runningTotal -= parseInt(buffer);
				break;

			case '×': runningTotal *= parseInt(buffer);
				break;

			case '÷': runningTotal /= parseInt(buffer);
				break;
		}

		buffer = "0";
		prevOperator = value;
	}

	screen.innerText = runningTotal;
}



function init() {
	document.querySelector(".calc-buttons").addEventListener("click", function (event) {
		buttonClick(event.target.innerText);
	})
}

init();
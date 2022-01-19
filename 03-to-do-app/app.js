let input = document.getElementById("user-input");
let enterButton = document.getElementById("enter-btn");
let ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	console.log("Hello");

	let li = document.createElement("li");
	li.appendChild( document.createTextNode(input.value) );

	// ADD DELETE BUTTON
	let delBtn = document.createElement("button");
	delBtn.appendChild(  document.createTextNode("X") );
	delBtn.addEventListener( "click", deleteItem );
	li.appendChild(delBtn);

	// ADD ITEM TO LIST
	ul.appendChild(li);
	input.value = "";

	// MARK DONE WORK
	li.addEventListener( "click", crossOut );

	function crossOut() {
		li.classList.toggle("done");
	}

	function deleteItem() {
		li.classList.add("delete");
	}
}

function addListAfterClick(){
	if (inputLength() > 0) { 	//makes sure that an empty input field doesn't create a list item
		createListElement();
	}
}

function addListAfterEnterKey(event) {
	/* 13 is the keycode of 'carriage return' key
	 * alternative method is event.keyCode === 13 
	 */

	if (inputLength() > 0 && event.which === 13) {
		createListElement();
	}
}


enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterEnterKey);

function init() {
	input.value = "";
}

init();
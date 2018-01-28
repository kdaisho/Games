'use strict';

function handleKeyDown(event) {
	Keyboard.keyDown = event.keyCode;
}

function handleKeyUp(event) {
	Keyboard.keyDown = -1;
}

var Keyboard = {
	keyDown: -1
};

Keyboard.init = function() {
	document.onkeydown = handleKeyDown;
	document.onkeyup = handleKeyUp;
};
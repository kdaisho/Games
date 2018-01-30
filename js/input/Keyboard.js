'use strict';

function handleKeyDown(event) {
	Keyboard.keyDown = event.keyCode;
}

function handleKeyUp(event) {
	Keyboard.keyDown = -1;
}

function Keyboard_Singleton() {
	this.keyDow = -1;
	document.onkeydown = handleKeyDown;
	document.onkeyup = handleKeyUp;
}

var Keyboard = new Keyboard_Singleton();
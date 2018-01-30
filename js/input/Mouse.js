'use strict';

function handleMouseMove(event) {
	Mouse.position = new Vector2(event.pageX, event.pageY);
}

function handleMouseDown(event) {
	if (event.which === 1) {
		if (!Mouse.leftDown)
			Mouse.leftPressed = true;
		Mouse.leftDown = true;
	}
}

function handleMouseUp(event) {
	if (event.which === 1)
		Mouse.leftDown = false;
}

function Mouse_Singleton() {
	this.position = { x: 0, y: 0 };
	this.leftDown = false;
    this.leftPressed = false;
    document.onmousemove = handleMouseMove;
	document.onmousedown = handleMouseDown;
	document.onmouseup = handleMouseUp;
}

Mouse_Singleton.prototype.reset = function () {
	this.leftPressed = false;
};

var Mouse = new Mouse_Singleton();
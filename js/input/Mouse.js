'use strict';

var Mouse = {
    position: {
        x: 0,
        y: 0
    },
    leftDown: false,
    leftPressed: false
};

function handleMouseMove(event) {
    Mouse.position = {
        x: event.pageX,
        y: event.pageY
    };
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

Mouse.init = function() {
    document.onmousemove = handleMouseMove;
    document.onmousedown = handleMouseDown;
    document.onmouseup = handleMouseUp;
};

Mouse.reset = function() {
    Mouse.leftPressed = false;
};
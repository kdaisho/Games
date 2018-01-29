'use strict';

window.requestAnimationFrame = window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
	function(callback) {
		window.setTimeout(callback, 1000 / 60);
};

var Game = {
	spriteStillLoading: 0,
	gameWorld: ''
};

Game.start = function(canvasName, x, y) {
	Canvas2D.init(canvasName);
	Game.size = { x: x, y: y };
	Keyboard.init();
	Mouse.init();
	Game.loadAssets();
	Game.assetLoadingLoop();
};

Game.loadAssets = function() {
};

Game.loadSprite = function(imageName) {
	console.log('loading sprite: ' + imageName);
	var image = new Image();
	image.src = imageName;
	Game.spritesStillLoading += 1;
	image.onload = function() {
		Game.spritesStillLoading -= 1;
	};
	return image;
};

Game.assetLoadingLoop = function() {
	//new
	if (Game.spritesStillLoading > 0)
		window.requestAnimationFrame(Game.assetLoadingLoop);
	else {
		Game.init();
		//new
		window.requestAnimationFrame(Game.mainLoop);
		// Game.mainLoop();
	}
};

Game.mainLoop = function() {
	var delta = 1 / 60;

	Game.gameWorld.handleInput(delta);
	Game.gameWorld.update(delta);
	Canvas2D.clear();
	Game.gameWorld.draw();
	Mouse.reset();
	requestAnimationFrame(Game.mainLoop);
};
'use strict';

var requestAnimationFrame = (function() {
	return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function(callback) {
			window.setTimeout(callback, 1000 / 60);
		};
}());

function Game_Singleton() {
	this.size = '';
	this.spriteStillLoading = 0;
	this.gameWorld = '';
}

Game_Singleton.prototype.start = function(canvasName, x, y) {
	this.size = { x: x, y: y };
	Canvas2D.init(canvasName);
	this.loadAssets();
	this.assetLoadingLoop();
};

Game_Singleton.prototype.init = function() {
	this.gameWorld = new PainterGameWorld();
};

Game_Singleton.prototype.loadAssets = function() {
};

Game_Singleton.prototype.loadSprite = function(imageName) {
	console.log('Loading sprite: ' + imageName);
	var image = new Image();
	image.src = imageName;
	this.spritesStillLoading += 1;
	image.onload = function() {
		this.spritesStillLoading -= 1;
	};
	return image;
};

Game_Singleton.prototype.assetLoadingLoop = function() {
	if (this.spritesStillLoading > 0)
		window.requestAnimationFrame(this.assetLoadingLoop);
	else {
		this.init();
		requestAnimationFrame(Game.mainLoop);
	}
};

Game_Singleton.prototype.mainLoop = function() {
	var delta = 1 / 60;

	Game.gameWorld.handleInput(delta);
	// this.gameWorld.handleInput(delta);
	Game.gameWorld.update(delta);
	Canvas2D.clear();
	Game.gameWorld.draw();
	// this.gameWorld.draw();
	// this.gameWorld.draw(.2);
	Mouse.reset();
	requestAnimationFrame(Game.mainLoop);
};

var Game = new Game_Singleton();
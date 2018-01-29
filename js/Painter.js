'use strict';

var sprites = {};

Game.loadAssets = function() {
	var loadSprite = function(sprite) {
		return Game.loadSprite('./assets/Painter/sprites/' + sprite);
	};

	sprites.background = loadSprite('spr_background.jpg');
	sprites.cannon_barrel = loadSprite('spr_cannon_barrel.png');
	sprites.cannon_red = loadSprite('spr_cannon_red.png');
	sprites.cannon_green = loadSprite('spr_cannon_green.png');
	sprites.cannon_blue = loadSprite('spr_cannon_blue.png');
	sprites.ball_red = loadSprite('spr_ball_red.png');
	sprites.ball_green = loadSprite('spr_ball_green.png');
	sprites.ball_blue = loadSprite('spr_ball_blue.png');
};

Game.init = function() {

	console.log('Creating game world');
	cannon.init();
	ball.init();
	Game.gameWorld = painterGameWorld;
};
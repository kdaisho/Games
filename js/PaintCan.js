'use strict';

function PaintCan(positionOffset) {
	this.currentColor = sprites.can_red;
	this.velocity = { x: 0, y: 0 };
	this.position = { x: 0, y: 0 };
	this.origin = { x: 0, y: 0 };
	this.positionOffset = positionOffset;
	this.reset();
}

PaintCan.prototype.reset = function() {
	this.moveToTop();
	this.minVelocity = 30;
};

PaintCan.prototype.moveToTop = function() {
	this.position = { x: this.positionOffset, y: -20 };
	this.velocity = { x: 0, y: 0 };
};

PaintCan.prototype.update = function(delta) {
	this.position.x += this.velocity.x * delta;
	this.position.y += this.velocity.y * delta;
	if (this.velocity.y === 0 && Math.random() < .01) {
		this.velocity = this.calculateRandomVelocity();
		this.currentColor = this.calculateRandomColor();
	}

	if (Game.gameWorld.isOutsideWorld(this.position))
		this.moveToTop();

	this.minVelocity += .01;
};

PaintCan.prototype.draw = function() {
	Canvas2D.drawImage(this.currentColor, this.position, 0, this.origin);
};

PaintCan.prototype.calculateRandomVelocity = function() {
	return { x: 0, y: Math.random() * 30 + this.minVelocity };
};

PaintCan.prototype.calculateRandomColor = function() {
	var randomVal = Math.floor(Math.random() * 3);
	if(randomVal === 0)
		return sprites.can_red;
	else if (randomVal === 1)
		return sprites.can_green;
	else
		return sprites.can_blue;
};

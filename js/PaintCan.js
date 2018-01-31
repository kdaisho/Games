'use strict';

function PaintCan(xPosition) {
	this.currentColor = sprites.can_red;
	this.velocity = new Vector2();
	this.position = new Vector2(xPosition, -200);
	this.origin = new Vector2();
	this.reset();
}

PaintCan.prototype.reset = function() {
	this.moveToTop();
	this.minVelocity = 30;
};

PaintCan.prototype.moveToTop = function() {
	this.position.y = -200;
	this.velocity = new Vector2();
};

PaintCan.prototype.update = function(delta) {
	this.position.addTo(this.velocity.multiply(delta));
	// this.position.x += this.velocity.x * delta;
	// this.position.y += this.velocity.y * delta;
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
	return new Vector2(0, Math.random() * 30 + this.minVelocity);
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

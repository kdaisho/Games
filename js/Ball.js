'use strict';

function Ball() {
	this.currentColor = sprites.ball_red;
	this.velocity = Vector2.zero;
	this.position = Vector2.zero;
	this.origin = Vector2.zero;
	this.shooting = false;
}

Object.defineProperty(Ball.prototype, 'color',
	{
		get: function() {
			if (this.currentColor === sprites.ball_red)
				return Color.red;
			else if (this.currentColor === sprites.ball_green)
				return Color.green;
			else
				return Color.blue;
		},
		set: function(value) {
			if (value === Color.red)
				this.currentColor = sprites.ball_red;
			else if (value === Color.green)
				this.currentColor = sprites.ball_green;
			else
				this.currentColor = sprites.ball_blue;
		}
	});

Object.defineProperty(Ball.prototype, 'width',
	{
		get: function() {
			return this.currentColor.width;
		}
	});

Object.defineProperty(Ball.prototype, 'height',
	{
		get: function() {
			return this.currentColor.height;
		}
	});

Object.defineProperty(Ball.prototype, 'size',
	{
		get: function() {
			return new Vector2(this.currentColor.width, this.currentColor.height);
		}
	});

Object.defineProperty(Ball.prototype, 'center',
	{
		get: function() {
			return new Vector2(this.currentColor.width / 2, this.currentColor.height / 2);
		}
	});

Ball.prototype.handleInput = function(delta) {
	if (Mouse.leftPressed && !this.shooting) {
		this.shooting = true;
		this.velocity = Mouse.position.subtract(this.position).multiplyWith(1.2);
		// this.velocity.x = (Mouse.position.x - this.position.x) * 1.2;
		// this.velocity.y = (Mouse.position.y - this.position.y) * 1.2;
	}
};

Ball.prototype.update = function(delta) {
	if (this.shooting) {
		this.velocity.x *= .99;
		this.velocity.y += 6;
		this.position.addTo(this.velocity.multiply(delta));
		// this.position.x += this.velocity.x * delta;
		// this.position.y += this.velocity.y * delta;
	}
	else {
		this.color = Game.gameWorld.cannon.color;
		this.position = Game.gameWorld.cannon.ballPosition.subtractFrom(this.center);
	}
	if (Game.gameWorld.isOutsideWorld(this.position))
		this.reset();
};

Ball.prototype.reset = function() {
	this.position = Vector2.zero;
	this.shooting = false;
};

Ball.prototype.draw = function() {
	if (!this.shooting)
		return;
	Canvas2D.drawImage(this.currentColor, this.position, 0, this.origin);
};
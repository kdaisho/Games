'use strict';


function Ball() {
	this.position = new Vector2();
    this.velocity = new Vector2();
    this.origin = new Vector2();
    this.currentColor = sprites.ball_red;
    this.shooting = false;
}


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
		if (Game.gameWorld.cannon.currentColor === sprites.cannon_red)
			this.currentColor = sprites.ball_red;
		else if (Game.gameWorld.cannon.currentColor === sprites.cannon_green)
			this.currentColor = sprites.ball_green;
		else
			this.currentColor = sprites.ball_blue;
		var center = new Vector2(this.currentColor.width / 2, this.currentColor.height / 2);

		this.position = Game.gameWorld.cannon.ballPosition().subtractFrom(center);
		// this.position.x -= this.currentColor.width / 2;
		// this.position.y -= this.currentColor.height / 2;
	}
	if (Game.gameWorld.isOutsideWorld(this.position)) {
		console.log('Ball is gone');
		this.reset();
	}
};

Ball.prototype.reset = function() {
	this.position = new Vector2();
	this.shooting = false;
};

Ball.prototype.draw = function() {
	if (!this.shooting)
		return;
	Canvas2D.drawImage(this.currentColor, this.position, 0, this.origin);
};
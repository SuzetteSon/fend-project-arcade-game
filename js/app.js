
//var player = {};

// Enemies our player must avoid
class Enemy {
	constructor(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
	this.y = y;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.speed = Math.floor(Math.random()*200);
	}
	// Update the enemy's position, required method for game
	// Parameter: dt, a time delta between ticks
	update(dt) {
    	// You should multiply any movement by the dt parameter
    	// which will ensure the game runs at the same speed for
    	// all computers.
    	//this.x = this.x +(this.speed *dt);
	}
	// Draw the enemy on the screen, required method for game
	render() {
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
};








// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
	constructor(x,y) {
		// Variables applied to each of our instances go here,
    	// we've provided one for you to get started
		this.x = x
		this.y = y
		// The image/sprite for our enemies, this uses
    	// a helper we've provided to easily load images
		this.sprite = 'images/char-boy.png';
		this.allowed = true;
	}


	//draws the player image on the screen
	render() {
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
	// Update the player's position, required method for game
	// Parameter: dt, a time delta between ticks
	update() {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.


	//if the player gets to the water, after 1.5s, player returns to initial location
	if (this.y === -15) {
			setTimeout(() => {
				this.x = 202;
				this.y = 400;
			}, 1500);
		} 
	}

	handleInput(key) {
		//alert('input');
		switch(key) {
			case 'up':
				if (this.y > -15 ) {
					this.y -= 83;
				} else {
					console.log('not allowed');
				}
				console.log(this.y);
				break;
			case 'left':
				if (this.x > 0) {
					this.x -=101;
				} else {
					console.log('not allowed');
				}
				console.log(this.x);
				break;
			case 'right':
				if (this.x < 404) {
					this.x +=101
				} else {
					console.log('not allowed');
				}
				console.log(this.x);
				break;
			case 'down':
				if (this.y < 400 ) {
					this.y +=83;
				} else {
					console.log('not allowed');
				}
				console.log(this.y);
		}
	}

};








// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let player = new Player(202,400);
let allEnemies = [];
let enemy1 = new Enemy(-25, 60);
allEnemies.push(enemy1);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});



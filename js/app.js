// Enemies our player must avoid
class Enemy {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.sprite = 'images/enemy-bug.png';
		this.speed = Math.floor(Math.random() * 200);
	}
	// Update the enemy's position, required method for game
	// Parameter: dt, a time delta between ticks
	update(dt) {
		// when the enemy reaches the end of the road, it resets to beginning
		if (this.x < 503) {
			// Multiply any movement by the dt parameter
			// to ensure the game runs at the same speed for
			// all computers.
			this.x = this.x + (this.speed * dt);
		} else {
			this.x = -15;
		}

	}
	// draws the enemy on the screen, required method for game
	render() {
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
};


// Player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
	constructor(x, y) {
		this.x = x
		this.y = y
		this.sprite = 'images/char-pink-girl.png';
		//sets the winning condition to false
		this.win = false;
		//sets the collission condition to false
		this.lose = false;
	}


	//draws the player image on the screen
	render() {
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}

	// Update the player's position, required method for game
	// Parameter: dt, a time delta between ticks
	update() {
		// Multiply any movement by the dt parameter
		// to ensure the game runs at the same speed for
		// all computers.

		//if the player gets to the water, player returns to initial location
		//win condition = true
		//call method to increase scrore

		if (this.y === -15) {

			this.win = true;
			this.x = 202;
			this.y = 400;
			game.increaseScore();
		}

		//check for collissions and reset player if collission occurs
		//lose condition = true
		//call method to decrease score

		for (let enemy of allEnemies) {
			if (Math.abs(enemy.x - this.x) < 75 && Math.abs(enemy.y - this.y) < 75) {
				this.x = 202;
				this.y = 400;
				this.lose = true;
				game.decreaseScore();
			}
		}

	}

	handleInput(key) {
		//if statements make sure the player cannot move off the screen
		switch (key) {
			case 'up':
				if (this.y > -15) {
					this.y -= 83;
				}
				break;
			case 'left':
				if (this.x > 0) {
					this.x -= 101;
				}
				break;
			case 'right':
				if (this.x < 404) {
					this.x += 101
				}
				break;
			case 'down':
				if (this.y < 400) {
					this.y += 83;
				}
		}
	}
};

class GameLogic {
	constructor(score) {
		this.score = score;
	}
	//increases the score by one everytime the players winning condition is true
	increaseScore() {
		if (player.win === true) {
			this.score += 1;
			document.getElementById('score').innerText = this.score;
		}
	}
	//decreases the score by one everytime the players losing condition is true to a minimum of zero
	decreaseScore() {
		if ((player.lose === true) && (this.score > 0)) {
			this.score -= 1;
			document.getElementById('score').innerText = this.score;
		}
	}
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let enemy1 = new Enemy(-15, 60);
let enemy2 = new Enemy(-15, 150);
let enemy3 = new Enemy(-15, 230);
let allEnemies = [];
allEnemies.push(enemy1, enemy2, enemy3);

// Place the player object in a variable called player
let player = new Player(202, 400);

// Place the game object in a variable called game with a starting score of zero
let game = new GameLogic(0);


/*window.setInterval(function () {
  allEnemies.push(new Enemy(-15, 150));
}, 7000);

window.setInterval(function () {
  allEnemies.push(new Enemy(-15, 230));
}, 6000);

window.setInterval(function () {
  allEnemies.push(new Enemy(-15, 60));
}, 5000);*/


// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function (e) {
	var allowedKeys = {
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down'
	};

	player.handleInput(allowedKeys[e.keyCode]);
});
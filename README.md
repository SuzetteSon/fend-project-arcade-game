frontend-nanodegree-arcade-game
===============================

**Basic Functionality**

In this game there is a Player and Enemies (Bugs). The goal of the player is to reach the water, without colliding into any one of the enemies. The player can move left, right, up and down. The enemies move in varying speeds on the paved block portion of the scene. Once a the player collides with an enemy, the game is reset and the player moves back to the start square. Once the player reaches the water the game is won. 

**Additional Functionality**

Score: I implemented a score for the game. Every win increases the score, and every collission decreases the score to a minimum of zero.

**Opening the game**

To play the game, open the index.html file in a JavaScript-enabled browser.

**I needed to implement the Player and the Enemy classes, using Object-Oriented JavaScript.**

The Enemy function, which initiates the Enemy by:
 - Loading the image by setting this.sprite to the appropriate image in the image folder
 - Setting the Enemy initial location 
 - Setting the Enemy speed 
 - The update method for the Enemy
     - Updates the Enemy location 
 - The render method for the Enemy

The Player function, which initiates the Player by:
 - Loading the image by setting this.sprite to the appropriate image in the image folder
 - Setting the Player initial location
 - The update method for the Player 
    - which also handles the collission with enemies 
    - and the winning condition (player reaches water, game resets)
 - The render method for the Player
 - The handleInput method, which receives user input, allowedKeys (the key which was pressed) and moves the player              according to that input. In particular:
     - Left key should move the player to the left, right key to the right, up should move the player up and down should            move the player down.
     - The player cannot move off screen so I set parameters for that

**I created a Game function, which initiates the Game by:**

 - increasing the score when the player reaches the water
 - decreasing the score when the player collides with an enemy to a minimum of 0

**I instantiate them by:**

 - Creating a new Player object.
 - Creating several new Enemies objects and placing them in an array called allEnemies.
 - Creating a new Game object and setting the starting score to zero.

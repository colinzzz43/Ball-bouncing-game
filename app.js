import Paddle from "/First game/src/Paddle.js";
import Ball from "/First game/src/Ball.js";
import InputHandler from "/First game/src/Input.js";

let canvas = document.getElementById("gameScreen");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 800;

// The context gives us rendering context for us to draw
let context = canvas.getContext("2d");

// Clear the canvas before adding any element to the screen
context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

// Changing color of the rectangle but it will also be applied it to every single rectangle created later unless update the fillStyle again
// context.fillStyle = 'red';
// context.fillRect(20, 20, 100, 100);

// context.fillStyle = 'blue';
// context.fillRect(200, 200, 100, 100);

// Adding the paddle to the canvas
let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

// Adding the ball image to the canvas
let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);

// Handling user inputs and we need to instantiate before the gameLoop
new InputHandler(paddle);

paddle.draw(context);

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  // clear the canvas in the game loop
  context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  // update the paddle
  paddle.update(deltaTime);
  paddle.draw(context);

  ball.draw(context);
  ball.update(deltaTime);

  // When the next frame is ready, call gameLoop
  requestAnimationFrame(gameLoop);
}

// instead of calling gameLoop(1), we can call rAF which will give us valid frame
requestAnimationFrame(gameLoop);

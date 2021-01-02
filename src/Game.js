import Paddle from "/First game/src/Paddle.js";
import Ball from "/First game/src/Ball.js";
import InputHandler from "/First game/src/Input.js";

export default class Game {
  constructor(GAME_WIDTH, GAME_HEIGHT) {
    this.GAME_WIDTH = GAME_WIDTH;
    this.GAME_HEIGHT = GAME_HEIGHT;
  }

  start() {
    // Adding the paddle to the canvas
    this.paddle = new Paddle(this);

    // Adding the ball image to the canvas
    this.ball = new Ball(this);

    this.gameObjects = [this.ball, this.paddle];

    // Handling user inputs and we need to instantiate before the gameLoop
    new InputHandler(this.paddle);
  }

  update(deltaTime) {
    // this.paddle.update(deltaTime);
    // this.ball.update(deltaTime);

    this.gameObjects.forEach((object) => object.update(deltaTime));
  }

  draw(context) {
    // this.paddle.draw(context);
    // this.ball.draw(context);

    this.gameObjects.forEach((object) => object.draw(context));
  }
}

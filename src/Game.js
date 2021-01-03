import Paddle from "/First game/src/Paddle.js";
import Ball from "/First game/src/Ball.js";
import InputHandler from "/First game/src/Input.js";
import Brick from "/First game/src/Brick.js";
import { buildLevel, level1 } from "/First game/src/Level.js";

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

    // // Adding the brick image to the canvas
    // this.brick = new Brick(this, { x: 20, y: 20 });
    let bricks = buildLevel(this, level1);

    // for (let i = 0; i < 15; i++) {
    //   for (let j = 0; j < 2; j++) {
    //     bricks.push(new Brick(this, { x: i * 52, y: 30 }));
    //     bricks.push(new Brick(this, { x: i * 52, y: 30 * j }));
    //   }
    // }

    this.gameObjects = [this.ball, this.paddle, ...bricks];

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

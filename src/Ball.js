export default class Ball {
  constructor(Game) {
    this.GAME_HEIGHT = Game.GAME_HEIGHT;
    this.GAME_WIDTH = Game.GAME_WIDTH;
    this.image = document.getElementById("img_ball");

    this.Game = Game;

    this.currentSpeed = {
      x: 40,
      y: 30,
    };
    this.position = {
      x: 10,
      y: 10,
    };

    this.size = 30;
  }

  draw(context) {
    // drawing the ball into the canvas
    context.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {
    this.position.x += this.currentSpeed.x;
    this.position.y += this.currentSpeed.y;

    // Setting up the boundary of the left or right for the ball
    if (this.position.x + this.size > this.GAME_WIDTH || this.position.x < 0) {
      this.currentSpeed.x = -this.currentSpeed.x;
    }
    // Wall on the top or the bottom
    if (this.position.y + this.size > this.GAME_HEIGHT || this.position.y < 0) {
      this.currentSpeed.y = -this.currentSpeed.y;
    }

    // const result_div = document.querySelector(".result > p");
    // var counter = 0;

    // Check collision with paddle
    let bottomOfBall = this.position.y + this.size;
    let topOfPaddle = this.Game.paddle.position.y;
    let leftSideOfPaddle = this.Game.paddle.position.x;
    let rightSideOfPaddle =
      this.Game.paddle.position.x + this.Game.paddle.width;

    if (
      bottomOfBall >= topOfPaddle &&
      this.position.x >= leftSideOfPaddle &&
      this.position.x + this.size <= rightSideOfPaddle
    ) {
      // counter++;
      this.currentSpeed.y = -this.currentSpeed.y;
      this.position.y = this.Game.paddle.position.y - this.size;
      // whenever change the counter text to counter but it crashed for some reason.
    }
  }
}

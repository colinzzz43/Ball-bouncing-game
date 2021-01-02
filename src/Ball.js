export default class Ball {
  constructor(gameWidth, gameHeight) {
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    this.image = document.getElementById("ball");
    this.currentSpeed = {
      x: 2,
      y: 2,
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

    // Setting up the boundary for the ball
    if (this.position.x > this.gameWidth || this.position.x < 0) {
      this.currentSpeed.x = -this.currentSpeed.x;
    }
    if (this.position.y > this.gameHeight || this.position.y < 0) {
      this.currentSpeed.y = -this.currentSpeed.y;
    }
  }
}

export default class BottomPaddle {
  constructor(Game) {
    this.GAME_WIDTH = Game.GAME_WIDTH;
    this.GAME_HEIGHT = Game.GAME_HEIGHT;

    this.width = 150;
    this.height = 30;

    this.maxSpeed = 10;
    this.currentSpeed = 0;

    this.position = {
      // gameWidht = 800
      // width = 150
      // x = 400 - 75 = 325
      x: this.GAME_WIDTH / 2 - this.width / 2,
      // GAME_HEIGHT = 800
      // height = 30
      // y = 400 - 15 - 10 = 375
      y: 10,
    };
  }

  // key handling
  moveLeft() {
    this.currentSpeed = -this.maxSpeed;
  }

  moveRight() {
    this.currentSpeed = this.maxSpeed;
  }

  // moveUp() {
  //     this.currentSpeed = -this.maxSpeed;
  // }

  // moveDown() {
  //     this.currentSpeed = this.maxSpeed;
  // }

  stop() {
    this.currentSpeed = 0;
  }

  draw(context) {
    // Set the color of the paddle
    context.fillStyle = "purple";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  // deltaTime = dt in a lot of games = changing time
  update(deltaTime) {
    // this.position.x += 10 / deltaTime;
    this.position.x += this.currentSpeed;
    // this.position.y += this.currentSpeed;

    // setting a bound for the paddle
    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x + this.width > this.GAME_WIDTH)
      this.position.x = this.GAME_WIDTH - this.width;

    // if(this.position.y < 0) this.position.y = 0;
    // if(this.position.y + this.width > this.GAME_HEIGHT) this.position.y = this.GAME_HEIGHT - this.height - 10;
  }
}

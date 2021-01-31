export default class Brick {
  constructor(Game, position) {
    this.image = document.getElementById("img_brick");
    this.Game = Game;
    this.position = position;
    this.width = 70;
    this.height = 15;
  }

  update(deltaTime) {}

  draw(context) {
    context.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}

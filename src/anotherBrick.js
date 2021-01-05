export default class anotherBrick {
  constructor(Game, position) {
    this.Game = Game;
    this.position = position;
    this.width = 70;
    this.height = 15;
  }

  update(deltaTime) {}

  draw(context) {
    context.rect(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}

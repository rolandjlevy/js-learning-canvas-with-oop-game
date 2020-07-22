class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }
  start() {
    this.ball = new Ball('#img-ball', this);
    this.paddle = new Paddle(this);

    this.gameObjects = [
      this.ball, this.paddle
    ];

    new InputHandler(this.paddle);
  }
  update(deltaTime) {
    this.gameObjects.forEach(obj => obj.update(deltaTime));
  }
  draw(ctx) {
    this.gameObjects.forEach(obj => obj.draw(ctx));
  }
}
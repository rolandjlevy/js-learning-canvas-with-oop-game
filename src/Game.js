class Game {
  constructor() {
  }
  initCanvas(id) {
    const canvas = document.querySelector(id);
    this.ctx = canvas.getContext('2d');
    this.width = getComputedStyle(canvas).getPropertyValue('--game-width');
    this.height = getComputedStyle(canvas).getPropertyValue('--game-height');
    canvas.width = this.width;
    canvas.height = this.height;
    canvas.focus();
  }
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.width, this.height);
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
  draw() {
    this.gameObjects.forEach(obj => obj.draw(this.ctx));
  }
}

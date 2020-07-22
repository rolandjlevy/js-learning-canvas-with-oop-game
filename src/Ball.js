class Ball {
  constructor(id, game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.image = document.querySelector(id);
    this.position = { x: 10, y: 10};
    this.speed = { x: 5, y: 3};
    this.size = 20;
    this.game = game;
  }
  draw(ctx) {
    ctx.drawImage(
      this.image, 
      this.position.x, 
      this.position.y, 
      this.size, 
      this.size
    );
  }
  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }
    if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }
    const ballBottom = this.position.y + this.size;
    const paddleTop = this.game.paddle.position.y;
    const paddleLeft = this.game.paddle.position.x;
    const paddleRight = this.game.paddle.position.x + this.game.paddle.width;
    if (ballBottom >= paddleTop 
      && this.position.x >= paddleLeft 
      && this.position.x + this.size <= paddleRight) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
}
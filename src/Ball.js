class Ball {
  constructor() {
    this.image = document.querySelector('#img-ball');
  }
  draw(ctx) {
    ctx.drawImage(this.image, 20, 20, 20, 20);
  }
  update() {

  }
}
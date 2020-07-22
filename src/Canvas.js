class Canvas {
  constructor(id) {
    this.canvas = document.querySelector(id);
    this.ctx = this.canvas.getContext('2d');
    this.width = getComputedStyle(this.canvas).getPropertyValue('--game-width');
    this.height = getComputedStyle(this.canvas).getPropertyValue('--game-height');
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }
  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}

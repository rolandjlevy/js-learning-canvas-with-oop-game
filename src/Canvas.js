class Canvas {
  constructor(id) {
    const canvas = document.querySelector(id);
    this.ctx = canvas.getContext('2d');
    this.width = getComputedStyle(canvas).getPropertyValue('--game-width');
    this.height = getComputedStyle(canvas).getPropertyValue('--game-height');
    canvas.width = this.width;
    canvas.height = this.height;
    canvas.focus();
    this.clear('init');
  }
  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}

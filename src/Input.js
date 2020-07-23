class InputHandler {
  constructor(paddle) {
    this.keyCodeLeft = 37;
    this.keyCodeRight = 39;
    document.addEventListener('touchstart', (e) => {
      if (e.touches[0].clientX < paddle.position.x + paddle.width / 2) {
        paddle.moveLeft();
      } else {
        paddle.moveRight();
      }
    }, false);
    document.addEventListener('touchend', (e) => {
      paddle.stop();
    }, false);
    document.addEventListener('keydown', (e) => {
      switch(e.keyCode) {
        case this.keyCodeLeft:
          paddle.moveLeft();
          break;
        case this.keyCodeRight:
          paddle.moveRight();
          break;
      }
    }, false);
    document.addEventListener('keyup', (e) => {
      switch(e.keyCode) {
        case this.keyCodeLeft:
          if (paddle.speed < 0) {
            paddle.stop();
            break;
          }
        case this.keyCodeRight:
        if (paddle.speed > 0) {
          paddle.stop();
          break;
        }
      }
    }, false);
  }
}
class InputHandler {
  constructor(paddle) {
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
        case 37:
          paddle.moveLeft();
          break;
        case 39:
          paddle.moveRight();
          break;
      }
    }, false);
    document.addEventListener('keyup', (e) => {
      switch(e.keyCode) {
        case 37:
          if (paddle.speed < 0) {
            paddle.stop();
            break;
          }
        case 39:
        if (paddle.speed > 0) {
          paddle.stop();
          break;
        }
      }
    }, false);
  }
}
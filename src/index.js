
// instantiate Canvas
const canvas = new Canvas('#game-area');
canvas.clear();

// instantiate Paddle
const paddle = new Paddle(canvas.width, canvas.height);
paddle.draw(canvas.ctx);

// instantiate Ball
const ball = new Ball();

// instantiate Input
new InputHandler(paddle);

let lastTime = 0;

function gameLoop(timeStamp) {
  canvas.clear();
  let deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;
  paddle.update(deltaTime);
  paddle.draw(canvas.ctx);
  ball.draw(canvas.ctx);
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

// got to Moving the Ball, 27:00
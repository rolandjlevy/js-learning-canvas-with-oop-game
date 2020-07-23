// 43:00 Bricks

document.addEventListener('DOMContentLoaded', () => {
  
  const canvas = new Canvas('#game-area');

  const game = new Game(canvas.width, canvas.height);
  game.start();
  
  let lastTime = 0;

  function gameLoop(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    canvas.clear();
    game.update(deltaTime);
    game.draw(canvas.ctx);
    requestAnimationFrame(gameLoop);
  }

  requestAnimationFrame(gameLoop);

});

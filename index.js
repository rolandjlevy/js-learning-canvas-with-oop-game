// 43:00 Bricks

document.addEventListener('DOMContentLoaded', () => {
  
  const game = new Game();
  game.initCanvas('#game-area');
  game.clearCanvas();
  game.start();
  
  let lastTime = 0;

  function gameLoop(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    game.clearCanvas();
    game.update(deltaTime);
    game.draw(game.ctx);
    requestAnimationFrame(gameLoop);
  }

  requestAnimationFrame(gameLoop);

});

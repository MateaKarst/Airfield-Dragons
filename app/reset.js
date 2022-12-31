// Reset game when player loses
function reset() {
  // Clear enemies and bullets, reset score
  enemies = [];
  bullets = [];
  score = 0;
  redraw(); // redraw canvas
  button.remove(); // remove reset button
  loop(); // start game loop again
  // Respawn enemies
  for (let i = 0; i < 10; i++) {
    let enemy = {
      x: random(45, width - 205), // random x position
      y: random(-800, 0), // random y position
      img: enemyImg,
    };
    enemies.push(enemy);
  }
}

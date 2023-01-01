function startGame() {
  // spawn enemies
  for (let i = 0; i < 10; i++) {
    // create a new enemy
    let enemy = {
      x: random(45, width - 205), // random x position
      y: random(-800, 0), // random y position
      img: enemyImg, // enemy image
    };
    // add the enemy to the enemies array
    enemies.push(enemy);
  }

  // remove start button
  startButton.remove();
}

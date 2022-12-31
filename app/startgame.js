function startGame() {
    // Spawn enemies
    for (let i = 0; i < 10; i++) {
      let enemy = {
        x: random(45, width - 205),
        y: random(-800, 0),
        img: enemyImg,
      };
      enemies.push(enemy);
    }
    startButton.remove();
  }
  
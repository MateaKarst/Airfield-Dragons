// Preload enemy image
let enemyImg;
function preload() {
  enemyImg = loadImage("../assets/images/dragon.gif");
}

// Variables
let bullets = [];
let enemies = [];
let score = 0;
let button;

// Interval for shooting bullets
let bulletInterval = 1; // (10 seconds at 60 fps)
let frameCount = 0; // frame number

function setup() {
  createCanvas(400, 600);
  bg = new castle();

  // Spawn enemies
  for (let i = 0; i < 10; i++) {
    let enemy = {
      x: random(45, width - 205), // random x position
      y: random(-800, 0), // random y position
      img: enemyImg,
    };
    enemies.push(enemy);
  }
}

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

function draw() {
  bg.draw(); // background image

  // Draw bullets
  for (let bullet of bullets) {
    bullet.y -= 10; // move bullet upwards
    circle(bullet.x, bullet.y, 8); // draw bullet
    if (bullet.y < 1) {
      bullets.splice(bullets.indexOf(bullet), 1);
    }
  }

  // Draw enemies
  for (let enemy of enemies) {
    enemy.y += 2; // move enemy downwards
    image(enemy.img, enemy.x, enemy.y); // draw enemy
    // If enemy reaches bottom of canvas, stop game loop and show "You Lost" message
    if (enemy.y > 448) {
      textSize(20);
      text("You Lost", width / 2 - 40, height / 2 - 20);
      button = createButton("reset"); // create reset button
      button.position(width / 2 - 15, height / 2); // position reset button
      button.mousePressed(reset); // reset game when pressed button
      noLoop();
    }
  }

 // Collisions between bullets and enemies
 for (let enemy of enemies) {
  for (let bullet of bullets) {
    // If distance between enemy and bullet is something
    if (dist(enemy.x, enemy.y, bullet.x, bullet.y) < 26) {
      // remove enemy and bullet from lists,
      enemies.splice(enemies.indexOf(enemy), 1);
      bullets.splice(bullets.indexOf(bullet), 1);
      // spawn new enemy, and add to score
      let newEnemy = {
        x: random(45, width - 205), // random x position
        y: random(-800, 0), // random y position
        img: enemyImg,
      };
      enemies.push(newEnemy);
      score += 1;
    }
  }
}

  // Display score
  textSize(25);
  text(score, 15, 35);
}

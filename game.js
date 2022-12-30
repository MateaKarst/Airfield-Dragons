let bg;
let bullets = [];
let enemies = [];
let score = 0;
let button;

let bulletInterval = 1; // number of frames between bullet shots (10 seconds at 60 fps)
let frameCount = 0; // current frame number

function preload() {
  enemyImg = loadImage("dragon.gif");
}

function setup() {
  createCanvas(400, 600);
  bg = new ImgBg();

  //spawn enemies//
  for (let i = 0; i < 10; i++) {
    let enemy = {
      x: random(45, width - 205),
      y: random(-800, 0),
      img: enemyImg,
    };
    enemies.push(enemy);
  }
}

function reset() {
  enemies = [];
  bullets = [];
  score = 0;
  redraw();
  button.remove();
  loop();
  //respawn enemies
  for (let i = 0; i < 10; i++) {
    let enemy = {
      x: random(45, width - 205),
      y: random(-800, 0),
      img: enemyImg,
    };
    enemies.push(enemy);
  }
}

function draw() {
  bg.draw();
  //update and draw the bullets//
  for (let bullet of bullets) {
    bullet.y -= 10;
    circle(bullet.x, bullet.y, 8);
  }
  //update and draw enemies//
  for (let enemy of enemies) {
    enemy.y += 2;
    image(enemy.img, enemy.x, enemy.y);
    if (enemy.y > 448) {
      textSize(20);
      text("You Lost", width / 2 - 40, height / 2 - 20);
      button = createButton("reset");
      button.position(width / 2 - 15, height / 2);
      button.mousePressed(reset);
      noLoop();
    }
  }
  //collisions with bullet//
  for (let enemy of enemies) {
    for (let bullet of bullets) {
      if (dist(enemy.x, enemy.y, bullet.x, bullet.y) < 25) {
        //rid of "n items" ~ splice , list of the items , //
        enemies.splice(enemies.indexOf(enemy), 1);
        bullets.splice(bullets.indexOf(bullet), 1);
        let newEnemy = {
          x: random(45, width - 205),
          y: random(-800, 0),
          img: enemyImg,
        };
        enemies.push(newEnemy);
        score += 1;
      }
    }
  }
  textSize(25);
  text(score, 15, 35);
}

function mousePressed() {
  frameCount++;
  if (frameCount % bulletInterval == 0) {
    //spawn the bullets when user clicks//
    let bullet = {
      x: mouseX,
      y: height - 159,
    };
    bullets.push(bullet);
  }
}

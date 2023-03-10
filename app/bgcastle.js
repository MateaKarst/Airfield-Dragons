class Castle {
  constructor(canvas) {
    this.canvas = canvas;
    this.towerBrickWidth = 13;
    this.towerBrickHeight = 3;
    this.towerBrickPadding = 0.1;
  }

  draw() {
    // Walls //
    fill(0, 0, 0); // black
    fill(60, 0, 0); // dark red
    rect(0, 480, 400, 120); // mid wall
    fill(90, 20, 20); // light red
    rect(0, 480, 400, 5); // top wall
    fill(40, 0, 0); // medium red
    triangle(55, 600, 90, 600, 55, 530); // left triangle wall
    triangle(345, 600, 310, 600, 345, 530); // right triangle wall
    rect(0, 580, 400, 20); // bottom wall

    // House //
    fill(20, 0, 0); // dark red
    // house base
    rect(150, 520, 100, 80); // house base
    // house tops
    rect(160, 505, 80, 15); // large top
    rect(180, 500, 40, 5); // small top
    // door
    fill(80, 80, 90); // grey
    rect(190, 565, 20, 35); // door
    fill(0, 0, 0); // black
    ellipse(195, 585, 5, 2); // door knob
    // windows
    fill(120, 130, 130); // light grey
    rect(165, 570, 10, 10); // window left
    rect(222, 570, 10, 10); // window right

    // Towers //
    // left tower
    fill(30, 10, 10); // dark red
    rect(0, 500, 55, 100); // short wall
    fill(15, 10, 10); // light red
    rect(0, 450, 45, 150); // taller wall
    fill(50, 50, 50); // dark grey
    rect(0, 430, 40, 200); // main tower
    triangle(0, 430, 19, 380, 40, 430); // main tower roof
    stroke(50, 50, 50); //dark grey
    fill(0, 0, 0); // black
    // bricks for left tower
    for (let row = 0; row < 55; row++) {
      for (let col = 0; col < 3; col++) {
        rect(
          col * (this.towerBrickWidth + this.towerBrickPadding) + 1, // x position
          row * (this.towerBrickHeight + this.towerBrickPadding) + 430, // y position
          this.towerBrickWidth, // width
          this.towerBrickHeight // height
        );
      }
    }
    // bricks for left tower roof
    for (let i = 0; i < 7; i++) {
      triangle(0, 430, 19, 380, 40 - 6 * i, 430);
    }
    noStroke();
    // right tower
    fill(30, 10, 10); // dark red
    rect(345, 500, 55, 100); // short wall
    fill(15, 10, 10); // light red
    rect(355, 450, 45, 150); // taller wall
    fill(50, 50, 50); // dark grey
    rect(360, 430, 40, 200); // main tower
    triangle(360, 430, 378.5, 380, 400, 430); // main tower roof
    stroke(50, 50, 50); //dark grey
    fill(0, 0, 0); // black
    // bricks for right tower
    for (let row = 0; row < 55; row++) {
      for (let col = 0; col < 3; col++) {
        fill(0, 0, 0); // black
        rect(
          col * (this.towerBrickWidth + this.towerBrickPadding) + 359.5, // x position
          row * (this.towerBrickHeight + this.towerBrickPadding) + 430, // y position
          this.towerBrickWidth, // width
          this.towerBrickHeight // height
        );
      }
    }
    // bricks for right tower roof
    stroke(50, 50, 50); // dark grey
    fill(0, 0, 0); // black
    for (let i = 0; i < 7; i++) {
      triangle(360, 430, 378.5, 380, 400 - 6 * i, 430);
    }
    noStroke();

    // Cannon //
    fill(0, 0, 0); // black
    let cannonX = constrain(mouseX, 57, width - 57); // constrain the cannon's x position to the canvas bounds
    rect(cannonX - 8, 435, 15, 5); // cannon mouth
    rect(cannonX - 5.5, 440, 10, 25); // cannon tube
    ellipse(cannonX, 472.5, 22.5, 20); // cannon rotator
  }
}

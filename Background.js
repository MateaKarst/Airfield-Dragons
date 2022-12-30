class ImgBg {
  constructor() {
    this.canvas = createCanvas(400, 600);
  }

  draw() {
    background(240);

    
  // draw the walls

  fill(208, 198, 176); // medium stone color
  rect(0, 480, 400, 120);
  fill(236, 229, 221); // light stone color
  rect(0, 480, 400, 5);
  fill(150, 133, 123); // dark stone color
  rect(0, 580, 400, 20);

  // draw the tower base
  fill(128, 93, 65); // wood color
  rect(150, 520, 100, 80);

  // draw the tower tops
  fill(75, 55, 45) // dark roof color
  rect(160, 505, 80, 15);
  fill(75, 65, 55) // medium roof color
  rect(180, 500, 40, 5);

  // draw the door
  fill(75, 65, 55) // medium roof color
  rect(190, 565, 20, 35);

  // draw the windows
  fill(255, 255, 255); // white window color
  rect(165, 570, 10, 10);
  rect(222, 570, 10, 10);

  // draw the left tower
  fill(150, 133, 123) // dark stone color
  rect(0, 500, 55, 100);
  fill(128, 93, 65) // wood color
  rect(0, 450, 45, 150);
  fill(75, 65, 55) // medium roof color
  rect(0, 430, 40, 200);
  fill(236, 229, 221) // light stone color
  triangle(0, 430, 19, 380, 40, 430);

  // draw the right tower
  fill(150, 133, 123) // dark stone color
  rect(345, 500, 55, 100);
  fill(128, 93, 65) // wood color
  rect(355, 450, 45, 150);
  fill(75, 65, 55) // medium roof color
  rect(360, 430, 40, 200);
  fill(236, 229, 221) // light stone color
  triangle(360, 430, 378.5, 380, 400, 430);

  // cannon
  let cannonX = constrain(mouseX, 57, width - 57);  // constrain the cannon's x position to the canvas bounds
  fill(75, 65, 55) // medium roof color
  rect(cannonX - 8, 435, 15, 5);
  rect(cannonX - 5.5, 440, 10, 25);
  fill(128, 93, 65) // wood color
  ellipse(cannonX , 472.5, 22.5, 20);
  }
}
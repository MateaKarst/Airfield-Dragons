function mousePressed() {
  // frame count
  frameCount++;

  // frame count and bullet interval then spawn a new bullet when possible
  if (frameCount % bulletInterval == 0) {
    // Create a new bullet
    let bullet = {
      x: mouseX,
      y: height - 159,
    };
    // new bullets are added to the list of bullets
    bullets.push(bullet);
  }
}

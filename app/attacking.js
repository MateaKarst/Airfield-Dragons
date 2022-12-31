function mousePressed() {
    // frame count
    frameCount++;
  
    // Frame count and bullet spawnings
    if (frameCount % bulletInterval == 0) {
      // Create new bullet
      let bullet = {
        x: mouseX,
        y: height - 159,
      };
      // Add bullet to list of bullets
      bullets.push(bullet);
    }
  }
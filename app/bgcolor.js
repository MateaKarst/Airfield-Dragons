class Color {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
  }

  display() {
    this.gradient = this.ctx.createLinearGradient(0, 600, 400, 0);
    this.gradient.addColorStop(0.0, "#00008b");
    this.gradient.addColorStop(0.1, "#0000a5");
    this.gradient.addColorStop(0.2, "#0000cd");
    this.gradient.addColorStop(0.3, "#0066cc");
    this.gradient.addColorStop(0.4, "#00b2ee");
    this.gradient.addColorStop(0.5, "#00bfff");
    this.gradient.addColorStop(0.6, "#87ceeb");
    this.gradient.addColorStop(0.7, "#87cefa");
    this.gradient.addColorStop(0.8, "#add8e6");
    this.gradient.addColorStop(0.9, "#b0e0e6");
    this.gradient.addColorStop(1.0, "#b0e0e6");
    this.ctx.fillStyle = this.gradient;
    this.ctx.fillRect(0, 0, 400, 600);

    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(340, 60, 30, 0, 2 * Math.PI);
    this.ctx.fillStyle = "#e6cc00";
    this.ctx.shadowColor = "#ffff00";
    this.ctx.shadowBlur = 100;
    this.ctx.fill();
    this.ctx.restore();

  }
}

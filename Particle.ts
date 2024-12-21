export class Particle {
  constructor(
    public x: number,
    public y: number,
    public size: number,
    public speedX: number,
    public speedY: number,
    private canvasWidth: number,
    private canvasHeight: number
  ) {}

  update(mouseX: number | null, mouseY: number | null) {
    this.x += this.speedX;
    this.y += this.speedY;

    // Wrap around screen edges
    if (this.x > this.canvasWidth) this.x = 0;
    if (this.x < 0) this.x = this.canvasWidth;
    if (this.y > this.canvasHeight) this.y = 0;
    if (this.y < 0) this.y = this.canvasHeight;

    // React to mouse
    if (mouseX && mouseY) {
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 100) {
        const angle = Math.atan2(dy, dx);
        this.x -= Math.cos(angle) * 1;
        this.y -= Math.sin(angle) * 1;
      }
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = 'rgba(66, 153, 225, 0.5)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}
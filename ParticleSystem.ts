import { Particle } from './Particle';

export class ParticleSystem {
  private particles: Particle[] = [];
  
  constructor(
    private ctx: CanvasRenderingContext2D,
    private width: number,
    private height: number,
    private particleCount: number = 100
  ) {
    this.init();
  }

  private init() {
    this.particles = Array.from({ length: this.particleCount }, () => {
      return new Particle(
        Math.random() * this.width,
        Math.random() * this.height,
        Math.random() * 3,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        this.width,
        this.height
      );
    });
  }

  update(mouseX: number | null, mouseY: number | null) {
    this.particles.forEach(particle => {
      particle.update(mouseX, mouseY);
      particle.draw(this.ctx);
    });

    this.drawConnections();
  }

  private drawConnections() {
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(66, 153, 225, ${1 - distance/100})`;
          this.ctx.lineWidth = 1;
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
    }
  }

  resize(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.init();
  }
}
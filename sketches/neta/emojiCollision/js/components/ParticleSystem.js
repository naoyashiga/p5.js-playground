import Particle from "./Particle";

export default class ParticleSystem {
  constructor() {
    this.particles = [];

  }

  addParticle(p, location) {
    this.particles.push(new Particle(p, location));
  }

  run() {

    this.particles.forEach((particle) => {
      particle.run();
    })
  }
}

import Particle from "./Particle";

export default class ParticleSystem {

  constructor(p) {
    this.p = p;
    this.particles = [];

    this.colors = [
      this.p.color("#222831"),
      this.p.color("#393E46"),
      this.p.color("#00ADB5"),
      this.p.color("#EEEEEE")
    ];
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

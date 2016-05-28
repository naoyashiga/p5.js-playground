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
    // this.p.stroke(this.colors[1]);

    for(var i = 0; i < this.particles.length; i += 4) {
      var n1 = this.particles[i];
      var n2 = this.particles[i + 1];
      var n3 = this.particles[i + 2];
      var n4 = this.particles[i + 3];

      var rnd = Math.floor(this.p.random(this.colors.length));
      // console.log(rnd);
      this.p.stroke(this.colors[rnd]);

      this.p.bezier(
        n1.location.x, n1.location.y,
        n2.location.x, n2.location.y,
        n3.location.x, n3.location.y,
        n4.location.x, n4.location.y
      );

      n1.run();
      n2.run();
      n3.run();
      n4.run();
    }
  }
}

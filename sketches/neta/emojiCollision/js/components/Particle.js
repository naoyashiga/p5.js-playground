
export default class Particle {
  constructor(p, location) {
    var v = 10;

    this.p = p;

    this.acceleration = p.createVector(0, 0);
    this.velocity = p.createVector(p.random(-v, v), p.random(-v, v));
    this.location = location.copy();

    this.radius = 10;

  }

  run() {
    this.update();
    this.borders();
    this.display();
  }

  update() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
  }

  display() {
    this.p.noStroke();
    this.p.fill(0);
    this.p.ellipse(this.location.x, this.location.y, this.radius, this.radius);
  }

  borders() {
    if (this.location.x < 0 || this.location.x > this.p.windowWidth) this.velocity.x *= -1;
    if (this.location.y < 0 || this.location.y > this.p.windowHeight) this.velocity.y *= -1;
  }

}

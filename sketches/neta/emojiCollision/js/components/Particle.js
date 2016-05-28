
export default class Particle {
  constructor(p, location) {
    var v = 1;

    this.p = p;

    this.acceleration = p.createVector(0, 0);
    this.velocity = p.createVector(p.random(-v, v), p.random(-v, v));
    this.location = location.copy();

    this.diameter = 30;

    this.wall = {
      top: this.diameter / 2,
      right: this.p.windowWidth - this.diameter / 2,
      bottom: this.p.windowHeight - this.diameter / 2,
      left: this.diameter / 2
    }

    this.p.textSize(20);
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

    this.p.ellipse(this.location.x, this.location.y, this.diameter, this.diameter);
    // this.p.text("A", this.location.x, this.location.y);
  }

  borders() {
    if (this.location.y < this.wall.top) {
      this.location.y = this.wall.top;
      this.velocity.y *= -1;
    }

    if (this.location.x > this.wall.right) {
      this.location.x = this.wall.right;
      this.velocity.x *= -1;
    }

    if (this.location.y > this.wall.bottom) {
      this.location.y = this.wall.bottom;
      this.velocity.y *= -1;
    }

    if (this.location.x < this.wall.left) {
      this.location.x = this.wall.left;
      this.velocity.x *= -1;
    }
  }
}

import P5 from "p5";

export default class Particle {

  constructor(p, scl) {
    this.p = p;
    this.scl = scl;

    this.location = p.createVector(p.random(p.width), p.random(p.height));
    this.prevLocation = this.location.copy();

    this.velocity = P5.Vector.random2D();
    this.acceleration = p.createVector(0, 0);

    this.maxSpeed = 10;

    this.diameter = 1;


    this.wall = {
      top: this.diameter / 2,
      right: this.p.width - this.diameter / 2,
      bottom: this.p.height - this.diameter / 2,
      left: this.diameter / 2
    }

  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);

    this.location.add(this.velocity);

    this.acceleration.mult(0);
  }


  follow(vectors, cols) {
    var x = this.p.floor(this.location.x / this.scl);
    var y = this.p.floor(this.location.y / this.scl);
    var index = x + y * cols;
    var force = vectors[index];

    this.applyForce(force);
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  show() {
    this.p.stroke(50);
    this.p.strokeWeight(0.5);

    this.p.line(this.location.x, this.location.y, this.prevLocation.x, this.prevLocation.y);
    this.updatePrev();

    // this.p.point(this.location.x, this.location.y, prevLocation.x, this.prevLocation.y);
  }

  updatePrev() {
    this.prevLocation.x = this.location.x;
    this.prevLocation.y = this.location.y;
  }

  borders() {
    if (this.location.y < this.wall.top) {
      this.location.y = this.wall.bottom;

      this.updatePrev();
    }

    if (this.location.x > this.wall.right) {
      this.location.x = this.wall.left;
      this.updatePrev();
      // this.velocity.x *= -1;
    }

    if (this.location.y > this.wall.bottom) {
      this.location.y = this.wall.top;
      this.updatePrev();
      // this.velocity.y *= -1;
    }

    if (this.location.x < this.wall.left) {
      this.location.x = this.wall.right;
      this.updatePrev();
      // this.velocity.x *= -1;
    }
  }
}

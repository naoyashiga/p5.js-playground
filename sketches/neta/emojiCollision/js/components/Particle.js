export default class Particle {
  constructor(p, location) {
    var v = 10;

    this.p = p;

    this.acceleration = this.p.createVector(0, 0);
    this.velocity = this.p.createVector(p.random(-v, v), p.random(-v, v));
    this.location = location.copy();


    this.diameter = 150;
    // this.diameter = this.p.windowWidth / 10;

    this.wall = {
      top: this.diameter,
      right: this.p.windowWidth - this.diameter,
      bottom: this.p.windowHeight,
      left: 0
      // top: this.diameter,
      // right: this.p.windowWidth - this.diameter,
      // bottom: this.p.windowHeight - this.diameter,
      // left: -this.diameter
    }

    this.p.textSize(this.diameter);

    this.emojiFlag = 1;
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

    // this.p.ellipse(this.location.x, this.location.y, this.diameter, this.diameter);

    if(this.emojiFlag >= 1) {
      this.p.text("😎", this.location.x, this.location.y);
    } else {
      this.p.text("😩", this.location.x, this.location.y);
    }
  }

  borders() {
    if (this.location.y < this.wall.top) {
      this.location.y = this.wall.top;
      this.velocity.y *= -1;

      this.emojiFlag *= -1;
    }

    if (this.location.x > this.wall.right) {
      this.location.x = this.wall.right;
      this.velocity.x *= -1;

      this.emojiFlag *= -1;
    }

    if (this.location.y > this.wall.bottom) {
      this.location.y = this.wall.bottom;
      this.velocity.y *= -1;

      this.emojiFlag *= -1;
    }

    if (this.location.x < this.wall.left) {
      this.location.x = this.wall.left;
      this.velocity.x *= -1;

      this.emojiFlag *= -1;
    }
  }
}

var system;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  system = new ParticleSystem(createVector(width/2, height / 2));
}

function draw() {
  background(255);
  system.addParticle();
  system.run();
}

// A simple Particle class
var Particle = function(position) {
  var a = 0.006;
  var v = 0.1;
  this.acceleration = createVector(random(-a, a), random(-a, a));
  this.velocity = createVector(random(-v, v), random(-v, v));
  this.position = position.copy();
  this.lifespan = 255.0;
  this.lifeSpeed = 0.08;
  this.radius = 1 + this.velocity.mag() * 30;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);

  this.lifespan -= this.lifeSpeed;

  // this.radius += this.lifeSpeed / 30;
};

// Method to display
Particle.prototype.display = function() {
  // stroke(200, this.lifespan);
  // strokeWeight(2);
  noStroke();
  fill(0, this.lifespan);
  ellipse(this.position.x, this.position.y, this.radius, this.radius);
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};

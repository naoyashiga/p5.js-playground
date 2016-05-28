import P5 from "p5";
import ParticleSystem from "./ParticleSystem";

class Visualization {
  constructor(cb) {
    this.hoge = new P5(sketch);

    // Callback onLoaded
    cb();
  }
}

const sketch = (p) => {

  var system;
  p.preload = function() {

  }

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);

    system = new ParticleSystem();

    var num = 1;

    for(var i = 0; i < num; i++) {
      // var l = p.createVector(p.random(p.windowWidth), p.random(p.windowHeight));
      var l = p.createVector(p.windowWidth / 2, p.windowHeight / 2);

      system.addParticle(p, l);
    }
  }

  p.draw = function() {
    p.background(255);

    system.run();
  }

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);

  }
}

export default Visualization;

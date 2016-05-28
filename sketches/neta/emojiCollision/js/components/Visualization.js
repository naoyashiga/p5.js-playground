import P5 from "p5";
import ParticleSystem from "./ParticleSystem";

class Visualization {
  constructor(cb) {
    new P5(sketch);

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

    var num = 30;

    for(var i = 0; i < num; i++) {
      var l = p.createVector(p.random(p.windowWidth), p.random(p.windowHeight));

      system.addParticle(p, l);
    }
  }

  p.draw = function() {
    p.background(100);

    system.run();
  }
}

export default Visualization;

import P5 from "p5";
import Particle from "./Particle";

export default class Visualization {
  constructor(cb) {
    const _this = this;

    console.log("aa");
    new P5(s);


    // Callback onLoaded
    cb();
  }

}

const s = function(p) {

  var particles = [];
  p.preload = function() {



  }

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);

    var num = 10;

    for(var i = 0; i < num; i++) {
      var l = p.createVector(p.random(p.windowWidth), p.random(p.windowHeight));

      particles.push(new Particle(p, l));
    }



  }

  p.draw = function() {
    p.background(255);

    particles.forEach(function(particle) {
      particle.run();
    })

  }

}

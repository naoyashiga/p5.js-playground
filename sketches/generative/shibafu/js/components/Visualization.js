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

  var colors;
  var density = 3;

  p.preload = function() {

  }

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);

    system = new ParticleSystem(p);

    colors = [
      p.color("#222831"),
      p.color("#393E46"),
      p.color("#00ADB5"),
      p.color("#EEEEEE")
    ];

    // p.noStroke();

    var num = 4 * 100;
    var xoff = 1;

    for(var i = 0; i < num; i++) {
      // var l = p.createVector(p.random(p.windowWidth), p.random(p.windowHeight));
      var l = p.createVector(
        p.noise(xoff) * p.windowWidth,
        i
        // p.noise(xoff, 100) * p.random(p.windowHeight)
      );

      console.log(l.x);
      system.addParticle(p, l);

      xoff += 0.01;
    }

    // for(var i = 0; i < p.windowWidth; i += density) {
    //   var rnd = Math.floor(p.random(colors.length));
    //
    //   // p.fill(colors[rnd]);
    //   p.stroke(colors[rnd]);
    //   // p.rect(i, 0, i + density, p.windowHeight);
    //
    //   var p1 = {x: i, y: 0},
    //   p2 = {x: p.windowWidth / 2, y: p.windowHeight / 2},
    //   p3 = {x: p.windowWidth / 2, y: p.windowHeight / 2},
    //   p4 = {x: i + density, y: p.windowHeight};
    //
    //   // p.curve(p1.x, p1.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y)
    //   p.bezier(p1.x, p1.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y)
    //
    // }
    p.noFill();
    system.run();
  }

  // p.draw = function() {
  //   p.background(255);
  //
  //   p.noFill();
  //   system.run();
  // }

  // p.draw = function() {
  //   p.background(255);
  //
  //   for(var i = 0; i < p.windowWidth; i += density) {
  //     var rnd = Math.floor(p.random(colors.length));
  //
  //     p.fill(colors[rnd]);
  //     p.rect(i, 0, i + density, p.windowHeight);
  //
  //   }
  // }

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);

    p.setup();
  }
}

export default Visualization;

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
  var lines = [];
  var lineColors = [];

  p.preload = function() {

  }

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(255);

    // system = new ParticleSystem(p);

    colors = [
      p.color("#222831"),
      p.color("#393E46"),
      p.color("#00ADB5"),
      p.color("#EEEEEE")
    ];
    // colors = [
    //   [34, 40, 49],
    //   [57, 62, 70],
    //   [0, 173, 181],
    //   [238, 238, 238]
    // ];

    // p.noStroke();

    // var num = 4 * 100;
    var xoff = 1;

    lines = [];

    p.strokeWeight(20);
    p.noiseSeed(p.random(100));

    for(var i = 0; i < p.windowWidth; i += density) {
      var rnd = Math.floor(p.random(colors.length));

      // p.fill(colors[rnd]);
      // lineColors.push(colors[rnd]);
      p.stroke(colors[rnd]);
      // p.rect(i, 0, i + density, p.windowHeight);

      // var p1 = {x: i, y: 0},
      // p2 = {x: p.windowWidth / 2, y: p.windowHeight / 2},
      // p3 = {x: p.windowWidth / 2, y: p.noise(xoff) * p.windowHeight / 2},
      // p4 = {x: i + density, y: p.windowHeight};

      var p1 = {x: i, y: 0},
      p2 = {x: p.noise(xoff) * p.windowWidth, y: p.windowHeight},
      p3 = {x: p.windowWidth / 2, y: p.windowHeight / 2},
      p4 = {x: i + density, y: p.windowHeight};

      // p.curve(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
      // p.bezier(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
      p.line(p1.x, p1.y, p2.x, p2.y);
      // lines.push([p1.x, p1.y, p2.x, p2.y]);

      xoff += 0.01;
    }
    // p.noFill();
    // system.run();
  }

  // p.draw = function() {
  //
  //
  //   var speed = 3;
  //   var opacity = 255 - ((p.frameCount * speed) % 255) ;
  //   console.log(opacity);
  //   p.background(255, opacity);
  //
  //   lines.forEach((l, index) => {
  //     var c = lineColors[index];
  //     p.stroke(c[0], c[1], c[2], opacity);
  //     p.line(l[0], l[1], l[2], l[3]);
  //   });
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

  p.mousePressed = function() {
    p.clear();
    p.setup();
  }

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);

    p.setup();
  }
}

export default Visualization;

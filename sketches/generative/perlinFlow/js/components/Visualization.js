import P5 from "p5";
import Particle from "./Particle";

class Visualization {
  constructor(cb) {
    this.sketch = new P5(sketch);

    cb();
  }
}

const sketch = (p) => {


  var inc = 0.1;
  var scl = 10;
  var cols, rows;

  var zoff = 0;

  var particles = [];

  var flowFields = [];

  p.setup = function() {

    p.createCanvas(500, 100);

    cols = p.floor(p.width / scl);
    rows = p.floor(p.height / scl);

    // p.noLoop();


    for (var i = 0; i < cols * rows; i++) {
      flowFields.push(p.createVector(0,0));
    }

    for (var i = 0; i < 500; i++) {
      particles.push(new Particle(p, scl));
    }

    p.background(255);

  }

  p.draw = function () {
    p.background(255);

    p.randomSeed(10);

    var yoff = 0;

    for(var y = 1; y < rows; y++) {

      var xoff = 0;

      for(var x = 1; x < cols; x++) {

        var index = x + y * cols;
        var angle = p.noise(xoff, yoff, zoff) * p.TWO_PI;

        var v = P5.Vector.fromAngle(angle);
        v.setMag(1);

        flowFields[index] = v;

        xoff += inc;

        p.stroke(0, 50);
        p.strokeWeight(0.3);

        // p.push();
        //
        // p.translate(x * scl, y * scl);
        //
        // p.rotate(v.heading());
        //
        // p.line(0, 0, scl, 0);
        //
        // p.pop();

      }

      yoff += inc;

      zoff += 0.0004;
    }

    particles.forEach((particle) => {

      particle.follow(flowFields, cols);

      particle.update();
      particle.borders();
      particle.show();
    })

    // fr.html(p.floor(p.frameRate()));

  }

  p.keyPressed = function() {

    // console.log(p.keyCode);
    if(p.keyCode == p.UP_ARROW) {

      // if(debug) {
      //   debug = 0;
      //   p.noLoop();
      //   console.log("no loop");
      //
      // } else {
      //   debug = 1;
      //   console.log("loop");
      //   p.loop();
      // }
    }

  }

  p.mousePressed = function() {
    p.clear();
    p.setup();
  }

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);

    p.setup();
  }

  function getRandomArrayIndex(arry) {
    return Math.floor(p.random(arry.length));
  }
}

export default Visualization;

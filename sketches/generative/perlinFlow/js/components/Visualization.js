import P5 from "p5";
import ColorPalette from "../ColorPalette";

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

  p.setup = function() {

    p.createCanvas(200,200);
    // p.pixelDensity(1);

    cols = p.floor(p.width / scl);
    rows = p.floor(p.height / scl);

    console.log(cols);
    console.log(rows);

    // p.noLoop();

  }

  p.draw = function () {
    p.background(51);

    var yoff = 0;

    for(var y = 1; y < rows; y++) {

      var xoff = 0;

      for(var x = 1; x < cols; x++) {

        var index = (x + y * p.width) * 4;
        var r = p.noise(xoff, yoff) * 255;

        xoff += inc;

        p.fill(p.random(255));

        p.rect(x * scl, y * scl, scl, scl);
      }

      yoff += inc;
    }
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

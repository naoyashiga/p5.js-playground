import P5 from "p5";
import ColorPalette from "../ColorPalette";

class Visualization {
  constructor(cb) {
    this.sketch = new P5(sketch);

    cb();
  }
}

const sketch = (p) => {

  const density = 30;

  var debug = 1;

  var grid;
  var next;

  var dA = 1;
  var dB = 0.5;
  var feed = 0.055;
  var k = 0.062;


  p.setup = function() {

    var divide = 4;

    // p.createCanvas(p.windowWidth / divide, p.windowHeight / divide);
    // p.createCanvas(200,200);
    var point = 50;
    p.createCanvas(point * 2,point * 2);
    p.pixelDensity(1);

    grid = [];
    next = [];

    for(var x = 0; x < p.width; x++) {
      grid[x] = [];
      next[x] = [];
      for(var y = 0; y < p.height; y++) {
        grid[x][y] = { a: 1, b: 0};
        next[x][y] = { a: 1, b: 0};
      }
    }


    for(var i = point; i < point + 10; i++) {
      for(var j = point; j < point + 10; j++) {
        grid[i][j].b = 1;
      }
    }



    // p.background("#ffffff");

    // p.noLoop();

  }

  p.draw = function () {
    p.background(51);

    for(var x = 1; x < p.width - 1; x++) {
      for(var y = 1; y < p.height - 1; y++) {
        var a = grid[x][y].a;
        var b = grid[x][y].b;

        next[x][y].a = a +
        (dA * laplaceA(x, y)) -
        (a * b * b) +
        (feed * (1 - a));

        next[x][y].b = b +
        (dB * laplaceB(x, y)) +
        (a * b * b) -
        ((k + feed) * b);

        next[x][y].a = p.constrain(next[x][y].a, 0, 1);
        next[x][y].b = p.constrain(next[x][y].b, 0, 1);

      }
    }

    p.loadPixels();

    for(var x = 0; x < p.width; x++) {
      for(var y = 0; y < p.height; y++) {
        var pix = (x + y * p.width) * 4;
        var a = next[x][y].a;
        var b = next[x][y].b;
        var c = p.floor((a - b) * 255);
        c = p.constrain(c, 0, 255);


        // p.pixels[pix + 0] = p.floor(a * 255);
        // p.pixels[pix + 1] = 0;
        // p.pixels[pix + 2] = p.floor(b * 255);
        p.pixels[pix + 0] = c;
        p.pixels[pix + 1] = c;
        p.pixels[pix + 2] = c;
        p.pixels[pix + 3] = 255;
      }
    }

    p.updatePixels();

    swap();


  }

  function swap() {
    var tmp = grid;

    grid = next;
    next = tmp;

  }

  function laplaceA(x, y) {
    var sumA = 0;

    sumA += grid[x][y].a * -1;
    sumA += grid[x-1][y].a * 0.2;
    sumA += grid[x+1][y].a * 0.2;
    sumA += grid[x][y+1].a * 0.2;
    sumA += grid[x][y-1].a * 0.2;
    sumA += grid[x-1][y-1].a * 0.05;
    sumA += grid[x+1][y-1].a * 0.05;
    sumA += grid[x+1][y+1].a * 0.05;
    sumA += grid[x-1][y+1].a * 0.05;
    return sumA;
  }

  function laplaceB(x, y) {
    var sumB = 0;

    sumB += grid[x][y].b * -1;
    sumB += grid[x-1][y].b * 0.2;
    sumB += grid[x+1][y].b * 0.2;
    sumB += grid[x][y+1].b * 0.2;
    sumB += grid[x][y-1].b * 0.2;
    sumB += grid[x-1][y-1].b * 0.05;
    sumB += grid[x+1][y-1].b * 0.05;
    sumB += grid[x+1][y+1].b * 0.05;
    sumB += grid[x-1][y+1].b * 0.05;
    return sumB;
  }

  p.keyPressed = function() {

    // console.log(p.keyCode);
    if(p.keyCode == p.UP_ARROW) {

      if(debug) {
        debug = 0;
        p.noLoop();
        console.log("no loop");

      } else {
        debug = 1;
        console.log("loop");
        p.loop();
      }
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

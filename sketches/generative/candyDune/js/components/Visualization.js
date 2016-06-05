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

  var center = {x: 0, y: 0};
  var stepSize = 1;

  var vertexLength = 5;
  var px = [];
  var py = [];

  var debug = 1;

  var colorTheme = getRandomArrayIndex(ColorPalette);
  var bgColorIndex = getRandomArrayIndex(ColorPalette[colorTheme]);

  p.setup = function() {
    let xoff = 1;
    let yoff = 1;


    p.createCanvas(p.windowWidth, p.windowHeight);

    center.x = p.windowWidth / 2;
    center.y = p.windowHeight / 2;
    // center.y = 0;

    p.background("#80D6FF");
    // p.background("#ffffff");
    // p.background(ColorPalette[colorTheme][bgColorIndex]);

    // p.noLoop();

    // p.strokeWeight(0.5);
    p.strokeWeight(10);
    // p.stroke("#000000");
    p.noFill();



    var radius = 150 * p.random(0.5, 5.0);
    var angle = p.random(p.PI);

    radius = p.windowWidth;
    angle = 0;



    var x1 = p.cos(angle) * radius;
    var y1 = p.sin(angle) * radius;
    var x2 = p.cos(angle - p.PI) * radius;
    // var x2 = radius;
    var y2 = p.sin(angle - p.PI) * radius;

    for(var i = 0; i < vertexLength; i++) {
      var tx = p.lerp(x1, x2, i / vertexLength);
      var ty = p.lerp(y1, y2, i / vertexLength);

      px.push(tx);
      py.push(ty);
    }

  }

  p.draw = function () {
    if(p.mouseX != 0 || p.mouseY != 0) {
      center.x += (p.mouseX - center.x) * 0.01;
      center.y += (p.mouseY - center.y) * 0.01;
      // center.y += (p.windowHeight - center.y) * 0.01;
    }


    for(var i = 0; i < vertexLength; i++) {

      px[i] += p.random(-stepSize,stepSize);
      py[i] += p.random(-stepSize,stepSize);

      // p.ellipse(px[i] + center.x, py[i] + center.y, 10 , 10);
      // console.log(px[i], py[i]);
    }

    var strokeColorIndex = getRandomArrayIndex(ColorPalette[colorTheme]);

    p.stroke(ColorPalette[colorTheme][strokeColorIndex]);

    p.beginShape();
    p.curveVertex(px[0] + center.x, py[0] + center.y);

    for(var i = 0; i < vertexLength; i++) {
      p.curveVertex(px[i] + center.x, py[i] + center.y);
    }

    p.curveVertex(px[vertexLength - 1] + center.x, py[vertexLength - 1] + center.y);

    p.endShape();

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

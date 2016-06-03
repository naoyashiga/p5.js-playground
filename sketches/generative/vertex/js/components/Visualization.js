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

  p.setup = function() {
    let colorTheme = getRandomArrayIndex(ColorPalette);
    let bgColorIndex = getRandomArrayIndex(ColorPalette[colorTheme]);
    let xoff = 1;
    let yoff = 1;

    var px = [];
    var py = [];

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background("#ffffff");

    p.noLoop();

    p.strokeWeight(1);
    p.stroke("#000000");
    p.noFill();


    var stepSize = 40;

    var vertexLength = 10;

    for(var i = 0; i < vertexLength; i++) {

      px.push(100 * i);
      py.push(p.windowHeight / 2);
    }

    for(var i = 0; i < vertexLength; i++) {

      px[i] += p.random(-stepSize,stepSize);
      py[i] += p.random(-stepSize,stepSize);

      // p.ellipse(px[i], py[i], 10 , 10);
      console.log(px[i], py[i]);
    }

    p.beginShape();
    // p.vertex(px[vertexLength - 1], py[vertexLength - 1]);

    for(var i = 0; i < vertexLength; i++) {
      p.vertex(px[i], py[i]);

    }

    // p.vertex(px[0], py[0]);
    // p.vertex(px[1], py[1]);

    p.endShape();
  }

  // p.mousePressed = function() {
  //   p.clear();
  //   p.setup();
  // }

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);

    p.setup();
  }

  function getRandomArrayIndex(arry) {
    return Math.floor(p.random(arry.length));
  }
}

export default Visualization;

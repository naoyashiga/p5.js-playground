var tSize = 32;

var corner;

var direction = 30;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  textSize(tSize);

  corner = createVector(direction, direction);
}

function draw() {
	background(0);

	fill(255);

	translate(width / 2, height / 2);
	text("P", -corner.x - tSize / 2, -corner.y + tSize / 2);
	text("D", corner.x - tSize / 2, -corner.y + tSize / 2);
	text("C", corner.x - tSize / 2, corner.y + tSize / 2);
	text("A", -corner.x - tSize / 2, corner.y + tSize / 2);

}
var yoff = 0.0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
	background(51);

	fill(255);

	beginShape();

	// var xoff = 0;
	var xoff = yoff;

	for (var x = 0; x <= width; x += 10) {
		var y = map(noise(xoff, yoff), 0, 1, height / 2, height / 1.2);
		// var y = map(noise(xoff), 0, 1, height / 2, height / 1.2);

		vertex(x ,y);

		xoff += 0.05;
	}

	yoff += 0.01;
	vertex(width, height);
	vertex(0, height);
	endShape(CLOSE);
}
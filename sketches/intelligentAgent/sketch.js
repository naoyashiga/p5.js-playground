var NORTH = 0,
EAST = 1,
SOUTH = 2,
WEST = 3,
posX, posY,
posXcross, posYcross,
direction = SOUTH,
angleCount = 7,
angle = getRandomAngle(direction),
stepSize = 30,
minLength = 10;


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  smooth();
  background(0);

  posX = Math.floor(getRandomNum(0, width));
  posY = 5;
  posXcross = posX;
  posYcross = posY;
}

function draw() {
	// background(51);
	for (var i = 0; i < 1; i++) {
		strokeWeight(1);
		stroke(200);

		point(posX, posY);

		posX += cos(radians(angle)) * stepSize;
		posY += sin(radians(angle)) * stepSize;

		var reachedBorder = false;

		if (posY <= 5) {
			direction = SOUTH;
			reachedBorder = true;
		}
		else if (posX >= width - 5) {
			direction = WEST;
			reachedBorder = true;
		} 
		else if (posY >= height - 5) {
			direction = NORTH;
			reachedBorder = true;
		} 
		else if (posX <= 5) {
			direction = EAST;
			reachedBorder = true;
		} 

		// crossing
		var px = posX;
		var py = posY;

		if (get(px, py) != color(0) || reachedBorder) {
			angle = getRandomAngle(direction);

			var distance = dist(posX, posY, posXcross, posYcross);


			if(distance >= minLength) {
				strokeWeight(1);
				stroke(200);
				line(posX, posY, posXcross, posYcross);
			}

			posXcross = posX;
			posYcross = posY;
		}
	}
}

function getRandomAngle(theDirection) {
	var a = Math.floor(getRandomNum(-angleCount, angleCount)) + 0.5 * 90.0 / angleCount;

	// console.log(a);

	switch(theDirection) {
		case NORTH:
			return a - 90;
		case EAST:
			return a;
		case SOUTH:
			return a + 90;
		case WEST:
			return a + 180;
		default:
			return 0;
	}
}

function getRandomNum(min, max) {
	return Math.random() * (max - min) + min;
}
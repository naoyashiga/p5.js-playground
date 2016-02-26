
var w = 512;
var h = 1;


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  var img = loadImage("cat.jpeg");
  image(img, 0, 0);

  for(var i = 0; i < height / h;i++) {
  	var x = i;
  	y = i * h;
  	var d = getRandomNum(-30, 30);

  	var copyImg = img.get(x, y, w, h);

  	fill(0);
  	noStroke();
  	rect(0, y, width, h);
  	image(copyImg, x + d, y);
  }
}

function draw() {
	// background(51);

}

function getRandomNum(min, max) {
	return Math.random() * (max - min) + min;
}
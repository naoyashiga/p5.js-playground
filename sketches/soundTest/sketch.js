var sketch = function($p) {
	var mySound;

	$p.preload = function() {
		mySound = $p.loadSound('symphony.mp3');

	};

	$p.setup = function() {
		$p.createCanvas(window.innerWidth, window.innerHeight);

		mySound.setVolume(0.1);
  		mySound.play();

	};

	$p.draw = function() {
		$p.background(0);

		$p.fill(255);

	};
};

var myp5 = new p5(sketch);
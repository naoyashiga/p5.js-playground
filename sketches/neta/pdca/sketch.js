var sketch = function($p) {

	var corner;
	var angle = 0;

	var variables = {
		rotateSpeed: 0.01,
		direction: 30,
		tSize: 32
	}

	$p.setVariables = function(_v) {
		variables = _v;
	}

	$p.setup = function() {
		$p.createCanvas(window.innerWidth, window.innerHeight);
		$p.textSize(variables.tSize);

		corner = $p.createVector(variables.direction, variables.direction);

		$p.textSize(variables.tSize);
	};

	$p.draw = function() {
		$p.background(0);

		$p.fill(255);

		angle += variables.rotateSpeed;

		corner = $p.createVector(variables.direction, variables.direction);
		$p.textSize(variables.tSize);

		$p.translate($p.width / 2, $p.height / 2);

		$p.rotate(angle);

		$p.text("P", -corner.x - variables.tSize / 2, -corner.y + variables.tSize / 2);
		$p.text("D", corner.x - variables.tSize / 2, -corner.y + variables.tSize / 2);
		$p.text("C", corner.x - variables.tSize / 2, corner.y + variables.tSize / 2);
		$p.text("A", -corner.x - variables.tSize / 2, corner.y + variables.tSize / 2);
	};
};

var Variables = function() {
	this.rotateSpeed = 0.01;
	this.direction = 100;
	this.tSize = 200;
};


window.onload = function() {
	var myp5 = new p5(sketch);
	var variables = new Variables();

	myp5.setVariables(variables);

	var gui = new dat.GUI();

	gui.add(variables, 'rotateSpeed', 0, 0.2);
	gui.add(variables, 'direction', 1, 300);
	gui.add(variables, 'tSize', 1, 300);

};
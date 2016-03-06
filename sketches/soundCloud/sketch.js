var TRACK_URL = "https://soundcloud.com/iikaode/by-2";

var visualize = function(track) {
	var streamURL = track.stream_url + "?client_id=" + CLIENT_ID;
	var particles = [];

	function Particle($p, radius) {
		this.$p = $p;
    	this.width = radius;
    	this.height = radius;
    	this.depth = radius;
	}

	Particle.prototype.render = function() {
		this.$p.box(this.width, this.height, this.depth);
	}

	var sketch = function($p) {

		var sound;
		var fft = null;

		$p.preload = function(){
			sound = $p.loadSound(streamURL);

			fft = new p5.FFT();
		}

		$p.setup = function() {
			$p.createCanvas($p.windowWidth, $p.windowHeight, $p.WEBGL);

			for(var i = 0; i < 1; i++) {
				particles.push(new Particle($p, 100));
			}
			sound.loop();
		};

		$p.draw = function() {
			$p.background(51);
			// $p.basicMaterial(20, 0, 0);
			$p.ambientLight(100);
			$p.pointLight(250, 250, 250, 100, 100, 0);
			$p.ambientMaterial(250);

			var spectrum = fft.analyze();

			$p.rotateX($p.frameCount * 0.005);
  			$p.rotateY($p.frameCount * 0.01);

			for(var i = 0; i < particles.length; i++) {
				var current_p = particles[i];

				var amplitude = fft.getEnergy(spectrum[i * (1024 % particles.length)]);
				current_p.width = $p.map(amplitude, 0, 255, 30, 100);
				// current_p.height = $p.map(amplitude, 0, 255, 30, 50);
				// current_p.depth = $p.map(amplitude, 0, 255, 50, 80);
				// $p.translate(i * 50, 0);
				current_p.render();
			}
		};

		$p.mousePressed = function() {

			if(sound.isPlaying()) {
				sound.pause();
			} else {
				sound.loop();
			}
		};
	};

	var myp5 = new p5(sketch);
};

SC.initialize({
	client_id: CLIENT_ID
});

SC.resolve(TRACK_URL).then(function(track){
	visualize(track);

}).catch(function(error){
	console.log(error);
});
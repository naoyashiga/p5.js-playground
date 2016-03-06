var TRACK_URL = "https://soundcloud.com/jerbeary/mrsaxobeat";

var visualize = function(track) {
	var streamURL = track.stream_url + "?client_id=" + CLIENT_ID;

	var sketch = function($p) {

		var sound;
		var fft = null;

		$p.preload = function(){
			sound = $p.loadSound(streamURL);

			fft = new p5.FFT();
		}

		$p.setup = function() {
			$p.createCanvas($p.windowWidth, $p.windowHeight, $p.WEBGL);
		};

		$p.draw = function() {
			$p.background(51);

			var spectrum = fft.analyze();
			var amplitude = fft.getEnergy(spectrum[128]);

			var radius = $p.map(amplitude, 0, 255, 100, 200);

			amplitude = fft.getEnergy(spectrum[200]);
			var boxW = $p.map(amplitude, 0, 255, 100, 200);

			amplitude = fft.getEnergy(spectrum[50]);
			var boxH = $p.map(amplitude, 0, 255, 100, 200);

			$p.rotateX($p.frameCount * 0.01);
  			$p.rotateZ($p.frameCount * 0.01);

			$p.push();
			$p.fill(255);
			// $p.translate($p.windowWidth / 2, $p.windowHeight / 2);
			// $p.ellipse(0, 0, radius, radius);
			$p.box(boxW, boxH, radius);
			$p.pop();
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